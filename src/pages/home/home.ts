import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { NotificationService } from "../../services/notification.service";
import { DetailsPage } from "../details/details";
import { ArticleService } from "../../services/article.service";
import { Article } from "../../models/index";
import { AutoUnsubscribe } from "../../shared/auto-unsubscribe";
import { BranchesPage } from "../branches/branches";
import { Storage } from "@ionic/storage";

@AutoUnsubscribe()
@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage implements OnInit {
    public selectedBranch: string;

    constructor(
        private navController: NavController,
        private barcodeScanner: BarcodeScanner,
        private notificationService: NotificationService,
        private articleService: ArticleService,
        private modalController: ModalController,
        private storage: Storage) {
    }

    public ngOnInit(): void {
        this.storage.get("branchId").then((id: string) => {
            if (!id) {
                this.openBranchesModal();
            }
            this.selectedBranch = id || "001";
        });
    }

    public scan(): void {
        this.barcodeScanner.scan().then((barcodeData) => {
            this.getArticleData(barcodeData);
        }, () => {
            this.notificationService.alert("No se puede leer el código de barras. Inténtelo nuevamente por favor.",
                "¡Error!");
        });
    }

    public enterCode(): void {
        this.notificationService.prompt("Entre el código del producto que desea consultar", "Introduzca código")
            .subscribe((response: any) => {
                if (!response.cancelled) {
                    this.getArticleData(response.text);
                }
            });
    }

    public openBranchesModal(): void {
        let modal = this.modalController.create(BranchesPage);
        modal.present().then(() => {
            this.storage.get("branchId").then((id: string) => this.selectedBranch = id || "001");
        });
    }

    private navigateToDetailssPage(article: Article): void {
        this.navController.push(DetailsPage, { article });
    }

    private getArticleData(barcode: string): void {
        this.articleService.get(barcode, this.selectedBranch).subscribe(
            (data: Article[]) => {
                if (data && data.length) {
                    this.navigateToDetailssPage(data[0]);
                } else {
                    this.notificationService.alert("No se ha podido encontrar el artículo", "¡Error!");
                }
            }
        );
    }
}
