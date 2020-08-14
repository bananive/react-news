import {
    SEARCH_ARTICLE,
    FETCH_ARTICLES,
    FETCH_ARTICLE,
    LOADING
} from '../actions/types';

const initialState = {
    text: '',
    articles: [],
    loading: false,
    movie: []
};

export default function(state = initialState, action) {
    switch (action.type) {
    case SEARCH_ARTICLE:
        return {
        ...state,
        text: action.payload,
        loading: false
        };
    case FETCH_ARTICLES:
        return {
        ...state,
        articles: action.payload,
        loading: false
        };
    case FETCH_ARTICLE:
        return {
        ...state,
        article: action.payload,
        loading: false
        };
    case LOADING:
        return {
        ...state,
        loading: true
        };
    default:
        return state;
    }
}