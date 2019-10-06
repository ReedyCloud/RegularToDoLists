import * as actionTypes from './actionTypes';
import {getJwt} from '../../Containers/Auth/helpers/jwt';
import axios from '../../Axios/axios';

export const setLists = (lists) => {
  return {
    type: actionTypes.GET_LISTS,
    lists: lists
  };
};

export const getLists = () => {
  return dispatch => {
    const jwt = getJwt();
    axios.get('todo/GetTodoLists', {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then(res => {
      let fetchedLists = [];
      fetchedLists = res.data.map(list => {
        return {
          id: list.id,
          title: list.title,
          status: list.status,
          key: list.id
        };
      });
      dispatch(setLists(fetchedLists));
    });
  }
}

export const createList = () => {
  return {
    type: actionTypes.CREATE_LIST
  };
};

export const createListCancel = () => {
  return {
    type: actionTypes.CREATE_LIST_CANCEL
  };
};

export const setListTitle = (title) => {
  return {
    type: actionTypes.SET_LIST_TITLE,
    title: title
  }
}

export const listsUpdate = () => {
  return {
    type: actionTypes.LISTS_UPDATE
  }
}

export const listCreated = (title) => {
  return dispatch => {
    const jwt = getJwt();
    const data = {
      title: title,
    };
    axios.post('todo/AddTodoList', data, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then(() =>{
      dispatch(listsUpdate());
    });
  };
}

export const listDeleted = (id) => {
  return dispatch => {
    const jwt = getJwt();
    axios.delete('todo/DeleteTodoList?todoListId=' + id, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then(() => {
      dispatch(listsUpdate())
    });
  };
}

