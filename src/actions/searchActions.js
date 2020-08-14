import { SEARCH_ARTICLE, FETCH_ARTICLES, FETCH_ARTICLE, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../APIKey';

export const searchArticle = text => dispatch => {
    dispatch({
        type: SEARCH_ARTICLE,
        payload: text
    });
};

export const fetchArticles = (page, perpage, cat) => dispatch => {
  axios
    .get(`http://newsapi.org/v2/top-headlines?apikey=${APIKey}&page=${page}&pageSize=${perpage}&category=${cat}`)
    .then(response =>
      dispatch({
        type: FETCH_ARTICLES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchArticle = index => dispatch => {
    dispatch({
        type: FETCH_ARTICLE,
        payload: index
    });
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};