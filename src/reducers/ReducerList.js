import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  GET_BREAKING_NEWS,
  GET_TECH_NEWS,
  GET_ENTERTAINMENT_NEWS,
  GET_POLITICAL_NEWS,
  SET_CURRENT_TITLE,
  SET_CURRENT_DATA,
  SEARCH_BAR_CHANGED,
  FILTER_ARTICLE_LIST,
  SET_CURRENT_ARTICLE,
  MODAL_VISIBLE,
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  username: '',
  password: '',
  breakingNews: [],
  techNews: [],
  entertainmentNews: [],
  politcalNews: [],
  currentTitle:'',
  currentData:[],
  search:'',
  filtered_article_List:[],
  currentArticle:[],
  modal_visible:false,
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action)
  // console.log(action)
  
  switch (action.type) {
    case USERNAME_CHANGED:
      return {...state, username: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case GET_BREAKING_NEWS:
      return {...state, breakingNews: action.payload};
    case GET_TECH_NEWS:
      return {...state, techNews: action.payload};
    case GET_ENTERTAINMENT_NEWS:
      return {...state, entertainmentNews: action.payload};
    case GET_POLITICAL_NEWS:
      return {...state, politicalNews: action.payload};
    case SET_CURRENT_TITLE:
      return{...state,currentTitle:action.payload}
    case SET_CURRENT_DATA:
      return{...state,currentData:action.payload}
    case SEARCH_BAR_CHANGED:
      return{...state,search:action.payload}
    case FILTER_ARTICLE_LIST:
      return{...state,filtered_article_List:action.payload}
    case SET_CURRENT_ARTICLE:
      return{...state,currentArticle:action.payload}
    case MODAL_VISIBLE:
      return{...state,modal_visible:action.payload}
    default:
      return {...state};
  }
};
