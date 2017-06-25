import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AppConstants } from "../app/app.contants";
import { Observable } from "rxjs/Observable";
import { Article, Branch } from "../models/index";

@Injectable()
export class ArticleService {
    constructor(
        private http: Http,
        private appConstants: AppConstants) {
    }

    public get(
        barcode: string,
        branchId: string): Observable<Article[]> {
        return this.http
                   .get(`${this.appConstants.API_URL}/articulos/getSearchArtApp?articulo=${barcode}&sucursal=${branchId}`)
                   .map((response: any) => response.json());
    }

    public all(id: string): Observable<Article[]> {
        return this.http
                   .get(`${this.appConstants.API_URL}/articulos/getSockArt?articleID=${id}`)
                   .map((response: any) => response.json());
    }

    public getBranches(): Observable<Branch[]> {
        return this.http
                   .get(`${this.appConstants.API_URL}/articulos/getSucursalZona`)
                   .map((response: any) => response.json());
    }
}

