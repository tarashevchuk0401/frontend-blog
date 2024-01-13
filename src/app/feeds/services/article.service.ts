import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "../../shared/types/article.interface";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private http: HttpClient){}

    addNewArticle(article: Article){
        // return this.http.put<Product>(`https://store-payment-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`, {

        return this.http.put('https://frontend-blog-angular-default-rtdb.europe-west1.firebasedatabase.app/articles/' + article.id +'/.json', article)
    }
}