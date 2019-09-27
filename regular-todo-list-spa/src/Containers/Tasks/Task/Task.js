import React from 'react';

import styles from './Task.module.scss';

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
    return {...state, priority: props.priority}
  }


  render () {

  return(
    <div 
    onDragStart={this.props.onDragStart}
      draggable
      className={styles.Task}
      style={{backgroundColor:'rgb(255,'+ (255 - 10.5 * this.state.priority)+ ',' + (255 - 25.5 * this.state.priority)+  ')' }}>
      <h2> {this.props.name}</h2>
      <p>
        {this.props.description}
      </p>

    </div>
  );
  }
};

export default Task;