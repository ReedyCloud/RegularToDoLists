import * as actionTypes from '../actions/actionTypes';

const initialState = {
  lists: [],
  creating: false,
  loading: true,
  title: ''
}

const getLists = (state, action) => {
  return {
    ...state,
    lists: action.lists,
    loading: false
  };
}

const createList = (state) => {
  return {
    ...state,
    creating: true
  };
}

const createListCancel = (state) => {
  return {
    ...state,
    creating: false
  };
}

const setListTitle = (state, action) => {
  return {
    ...state,
    title: action.title
  };
}

const listsUpdate = (state) => {
  return {
    ...state,
    creating: false,
    loading: true,
    title: ''
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.GET_LISTS: return getLists(state, action);
      case actionTypes.CREATE_LIST: return createList(state);
      case actionTypes.CREATE_LIST_CANCEL: return createListCancel(state);
      case actionTypes.SET_LIST_TITLE: return setListTitle(state, action);
      case actionTypes.LISTS_UPDATE: return listsUpdate(state);
  
    default: return state;
  }
}

export default reducer;