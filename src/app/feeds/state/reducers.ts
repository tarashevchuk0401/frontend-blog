import {createFeature, createReducer, on} from '@ngrx/store';
import {Article} from '../../shared/types/article.interface';
import {articleActions} from './actions';

export interface ArticlesStateInterface {
  articles: Array<Article> | null | undefined;
  singleArticle : Article | null |undefined;
}

const initialState: ArticlesStateInterface = {
  articles: null,
  singleArticle : null
};

const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, (state) => ({
      ...state,
    })),
    on(articleActions.getArticleSuccess, (state, action) => ({
      ...state,
      articles: action.articles,
    })),
    on(articleActions.getArticleFailed, (state) => ({
      ...state,
      articles: null,
    })),


    on(articleActions.getSingleArticle, (state) => ({
      ...state
    })),
    on(articleActions.getSingleArticleSuccess, (state, actions) => ({
      ...state, 
      singleArticle: actions
    })),
    on(articleActions.getSingleArticleFailed, (state) => ({
      ...state,
      singleArticle: null,
    })),
  ),
});

export const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectArticles,
  selectSingleArticle
} = articleFeature;
