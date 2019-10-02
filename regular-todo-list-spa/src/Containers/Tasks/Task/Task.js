import React from 'react';

import axios from '../../../Axios/axios';
import X from '../../../Components/UI/X/X';
import styles from './Task.module.scss';
import {getJwt} from '../../Auth/helpers/jwt';

const taskStatus = {
  TODO: 0,
  WORK_IN_PROGRESS: 1,
  FINISHED: 2
}

class Task extends React.Component {

  state = {
    taskId: null,
    toDoListId: null,
    name : '',
    description: '',
    priority: 0,
    state: 0
  }

  static getDerivedStateFromProps(props, state) {
    return {...state, priority: props.priority, id: props.id}
  }


  taskDeleteHandler = (id) => {
    const jwt = getJwt();
    axios.delete('todo/DeleteTodoItem?todoItemId=' + id, {headers: {Authorization: `Bearer ${jwt}`}}).then(res=>{
      this.props.updateTasks();
    });
  }

  render () {

  return(
    <div 
    onDragStart={this.props.onDragStart}
      draggable
      className={styles.Task}
      style={{backgroundColor:'rgb(255,'+ (255 - 10.5 * this.state.priority)+ ',' + (255 - 25.5 * this.state.priority)+  ')' }}>
        <button className={styles.TaskDeleteButton} onClick={() => this.taskDeleteHandler(this.state.id)} ><X /></button>
      <h2> {this.props.name}</h2>
      <p>
        {this.props.description}
      </p>
    
    </div>
  );
  }
};

export default Task;