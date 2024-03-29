import { Route } from "@angular/router";
import { GlobalFeedsComponent } from "./components/global-feeds/global-feeds.component";
import { AddNewArticleComponent } from "./components/add-new-article/add-new-article.component";
import { SingleArticleComponent } from "./components/single-article/single-article.component";

export const FeedsRoutes: Route[] =[
 {
    path:'',
    component: GlobalFeedsComponent
 },
 {
    path:'add-new',
    component: AddNewArticleComponent
 },
 {
    path:':id',
    component: SingleArticleComponent
 },
]