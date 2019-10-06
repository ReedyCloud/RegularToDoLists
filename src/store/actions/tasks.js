import * as actionTypes from './actionTypes';
import axios from '../../Axios/axios';
import {getJwt} from '../../Containers/Auth/helpers/jwt';

export const setTasks = (tasks) => {
  return {
    type: actionTypes.GET_TASKS,
    tasks: tasks
  };
}

export const getTasks = (id) => {
  return dispatch => {
    const jwt = getJwt();
    axios.get('todo/GetTodoList?todoListId=' + id, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then(res => {
      let fetchedTasks = [];
      fetchedTasks = res.data.todoItems.map(task => {
        return {
          id: task.id,
          name: task.name,
          description: task.description,
          priority: task.priority,
          status: task.status,
          key: task.id
        }
      });
      fetchedTasks.forEach(task => {
        switch(task.status){
          case 0:
            task.status = 'toDo';
            break;
          case 1:
            task.status = 'workInProgress';
            break;
          case 2:
            task.status = 'finished';
            break;
            default:
              break;
        }
      });
      dispatch(setTasks(fetchedTasks));
    });
  }
}

export const updateTasks = () => {
  return {
    type: actionTypes.UPDATE_TASKS
  };
}

export const deleteTask = (id) => {
  return dispatch => {
    const jwt = getJwt();
    axios.delete('todo/DeleteTodoItem?todoItemId=' + id, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then(() => {
      dispatch(updateTasks())
    });
  }
}

export const createTask = (data) => {
  return dispatch => {
    const jwt = getJwt();
    axios.post('todo/AddTodoItem', data, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then(() => {
      dispatch(updateTasks())
    });
  }
}