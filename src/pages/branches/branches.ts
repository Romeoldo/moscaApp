import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../../services/article.service";
import { Observable } from "rxjs/Observable";
import { Branch } from "../../models/index";
import { NavController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";

@Component({
    selector: "branches-list",
    templateUrl: "branches.html"
})
export class BranchesPage implements OnInit {
    public items$: Observable<Branch[]>;
    public selectedBranch: string;

    constructor(
        public articleService: ArticleService,
        private navController: NavController,
        private storage: Storage) {
    }

    public ngOnInit(): void {
        this.items$ = this.articleService.getBranches();
        this.getSelectedBranch();
    }

    public getArticleImage(id: string): string {
        return `http://res.cloudinary.com/moscahnos/image/upload/v1498339243/${id}.jpg`;
    }

    public onBranchSelected(branchId: string): void {
        this.storage.set("branchId", branchId);
        this.navController.push(HomePage);
    }

    public isSelected(branchId: string): boolean {
        return this.selectedBranch === branchId;
    }

    private getSelectedBranch(): void {
        this.storage.get("branchId").then((id: string) => this.selectedBranch = id);
    }
}
