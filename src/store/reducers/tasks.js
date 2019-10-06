import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tasks: [],
  loading: true
}

const getTasks = (state, action) => {
  return {
    ...state,
    tasks: action.tasks,
    loading: false
  };
}

const updateTasks = (state) => {
  return {
    ...state,
    loading: true
  }
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.GET_TASKS: return getTasks(state, action);
    case actionTypes.UPDATE_TASKS: return updateTasks(state);
    default:
      break;
  }

  return state;
}

export default reducer;