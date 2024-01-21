import {createFeature, createReducer, on} from '@ngrx/store';
import {Article} from '../../shared/types/article.interface';
import {articleActions} from './actions';

export interface ArticlesStateInterface {
  articles: Array<Article> | null | undefined;
  singleArticle : Article | null |undefined;
  isLoading: boolean;
}

const initialState: ArticlesStateInterface = {
  articles: null,
  singleArticle : null,
  isLoading: true,
};

const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(articleActions.getArticleSuccess, (state, action) => ({
      ...state,
      articles: action.articles,
      isLoading: false,
    })),
    on(articleActions.getArticleFailed, (state) => ({
      ...state,
      articles: null,
      isLoading: false,
    })),


    on(articleActions.getSingleArticle, (state) => ({
      ...state,
      singleArticle: null,
    })),
    on(articleActions.getSingleArticleSuccess, (state, actions) => ({
      ...state, 
      singleArticle: actions,
      isLoading: false,

    })),
    on(articleActions.getSingleArticleFailed, (state) => ({
      ...state,
      singleArticle: null,
      isLoading: false,
    })),
  ),
});

export const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectArticles,
  selectSingleArticle,
  selectIsLoading
} = articleFeature;
