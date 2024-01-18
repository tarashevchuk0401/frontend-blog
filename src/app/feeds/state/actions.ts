import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "../../shared/types/article.interface";

export const articleActions = createActionGroup({
    source: 'article',
    events: {
        GetArticle: props<any>(),
        'Get article success': props<{articles: Array<Article>}>(),
        'Get article failed': emptyProps(),

        'Get single article': props<{id : string}>(),
        'Get single article success': props<Article>(),
        'Get single article failed': emptyProps(),

    }
})