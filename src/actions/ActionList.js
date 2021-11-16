import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  GET_BREAKING_NEWS,
  GET_TECH_NEWS,
  GET_ENTERTAINMENT_NEWS,
  GET_POLITICAL_NEWS,
  SET_CURRENT_TITLE,
  SET_CURRENT_DATA,
  FILTER_ARTICLE_LIST,
  SEARCH_BAR_CHANGED,
  SET_CURRENT_ARTICLE,
  MODAL_VISIBLE,
} from './ActionTypes';
import data from '../FakeData';

export const usernameChanged = text => {
  return {
    type: USERNAME_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const getBreakingNews = () => {
  return {
    type: GET_BREAKING_NEWS,
    payload: data.filter(item => item.category === 'breaking-news'),
  };
};

export const getTechNews = () => {
  return {
    type: GET_TECH_NEWS,
    payload: data.filter(item => item.category === 'tech'),
  };
};

export const getEntertainmentNews = () => {
  return {
    type: GET_ENTERTAINMENT_NEWS,
    payload: data.filter(item => item.category === 'entertainment'),
  };
};

export const getPoliticalNews = () => {
  return {
    type: GET_POLITICAL_NEWS,
    payload: data.filter(item => item.category === 'entertainment'),
  };
};

export const setCurrentTitle = title => {
  return {
    type: SET_CURRENT_TITLE,
    payload: title,
  };
};

export const setCurrentData = category => {
  return {
    category: String({category}),
    type: SET_CURRENT_DATA,
    payload: data.filter(item => item.category === category),
  };
};

export const searchBarValueChanged = search => {
  return dispatch => {
    var filtered_articleList = data.filter(item =>
      item.title.includes(search, 0)
    );

    var modal_visible=false
    if(search=='' ){
      modal_visible=false
    }else{
      modal_visible=true
    }

    dispatch({
      type: SEARCH_BAR_CHANGED,
      payload: search,
    });

    dispatch({
      type: FILTER_ARTICLE_LIST,
      payload: filtered_articleList,
    
    });

    dispatch({
      type:MODAL_VISIBLE,
      payload:modal_visible,
    })
  };
};


export const setCurrentArticle=id=>{
  return{
    type:SET_CURRENT_ARTICLE,
    payload:data.filter(item=>item.id==id)
  }
}