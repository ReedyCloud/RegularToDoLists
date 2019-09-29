import React from 'react';

import axios from '../../../axios';
import styles from './NewTask.module.scss';
import {getJwt} from '../../Auth/helpers/jwt';

class NewTask extends React.Component {
  
  state = {
    toDoListId: null,
    name : '',
    description: '',
    priority: 1,
    state: 0,
    creatingTask: false
  }

  static getDerivedStateFromProps(props, state) {
    return {...state, toDoListId: props.listId}
  }

  creatingTaskHandler = () => {
    let prevState = this.state.creatingTask;
    this.setState({creatingTask: !prevState});
  }
  postTaskHandler = () => {
    const jwt = getJwt();
    const data = {
      TodoListId: this.state.toDoListId,
      Name: this.state.name,
      Description: this.state.description,
      Priority: this.state.priority,
      Status: this.state.state
    };

    axios.post('todo/AddTodoItem', data, {headers: {Authorization: `Bearer ${jwt}`}}).then((res) => {
      this.setState({name: '', description:'', priority: 1, creatingTask: false});
      this.props.tasksUpdate();
    });
  }

  postTaskValidation = () => {
    let validate = true;
    if(this.state.name.length < 3) {
      validate = false;
    }

    if( validate && Number.isInteger(parseInt(this.state.priority, 10))) {
      this.postTaskHandler();
    }
  }


  render () {

    let newTaskButton = <div onClick={this.creatingTaskHandler} className={styles.NewTaskButtonClosed} >New Task </div>;
    if(this.state.creatingTask) {
      newTaskButton =   <div onClick={this.creatingTaskHandler} className={styles.NewTaskButtonOpened} >Close </div>;
    }

  return(
    <div className={styles.NewTask}>
      {newTaskButton}
      {
        !this.state.creatingTask ?
           null :
            <div className={styles.NewTaskCreator}>
              <h4>Title:</h4>
              <input type='text' placeholder='my name' value={this.state.name}
                onChange={(event)=> this.setState({name: event.target.value}) } required/>
                <h4>Description:</h4>
              <textarea type='text' placeholder='optional' value={this.state.description}
                onChange={(event)=> this.setState({description: event.target.value}) } required/>
                <h4>Priority:</h4>
              <input type='text' placeholder='my prio' value={this.state.priority}
                onChange={(event)=> this.setState({priority: event.target.value}) } required/>
                <button onClick={this.postTaskValidation} className={styles.NewTaskButton} >
                  Create
                </button>
            </div>
      }
    </div>
  );

  }
};

export default NewTask;