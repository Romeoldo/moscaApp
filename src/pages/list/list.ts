import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../../services/article.service";
import { Observable } from "rxjs/Observable";
import { Article } from "../../models/index";
import { NavParams } from "ionic-angular";

@Component({
    selector: "page-list",
    templateUrl: "list.html"
})
export class ListPage implements OnInit {
    public items$: Observable<Article[]>;
    public article: Article;

    constructor(
        public articleService: ArticleService,
        private navParms: NavParams) {
    }

    public ngOnInit(): void {
        this.article = this.navParms.get("article");
        this.items$ = this.articleService.all(this.article.idArticulo);
    }

    public getArticleImage(id: string): string {
        return `http://res.cloudinary.com/moscahnos/image/upload/v1498339243/${id}.jpg`;
    }
}
