import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ListPage } from "../list/list";
import { Article } from "../../models/index";

@Component({
    selector: "page-details",
    templateUrl: "details.html"
})
export class DetailsPage implements OnInit {
    public article: Article;

    constructor(private navController: NavController,
                private navParams: NavParams) {
    }

    public ngOnInit(): void {
        this.article = this.navParams.get("article");
    }

    public navigateToStock(): void {
        this.navController.push(ListPage, { article: this.article });
    }

    public get articleImage(): string {
        return `http://res.cloudinary.com/moscahnos/image/upload/v1498339243/${this.article.idArticulo}.jpg`;
    }
}
