import React from 'react';
import {connect} from 'react-redux'

import X from '../../../Components/UI/X/X';
import styles from './Task.module.scss';
import * as actions from '../../../store/actions/index';

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

  render () {

  return(
    <div 
    onDragStart={this.props.onDragStart}
      draggable
      className={styles.Task}
      style={{backgroundColor:'rgb(255,'+ (255 - 10.5 * this.state.priority)+ ',' + (255 - 25.5 * this.state.priority)+  ')' }}>
        <button className={styles.TaskDeleteButton} onClick={() => this.props.onTaskDelete(this.state.id)} ><X /></button>
      <h2> {this.props.name}</h2>
      <p>
        {this.props.description}
      </p>
    
    </div>
  );
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onTaskDelete: (id) => dispatch(actions.deleteTask(id))
  };
}

export default connect(null, mapDispatchToProps)(Task);