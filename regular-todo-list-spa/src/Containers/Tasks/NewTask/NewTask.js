import React from 'react';
import {connect} from 'react-redux'

import * as actions from '../../../store/actions/index';
import styles from './NewTask.module.scss';

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
    const data = {
      TodoListId: this.state.toDoListId,
      Name: this.state.name,
      Description: this.state.description,
      Priority: this.state.priority,
      Status: this.state.state
    };
    this.props.onTaskCreated(data)
  }

  postTaskValidation = () => {
      this.postTaskHandler();
      this.setState({creatingTask: false, name: '', description:'', priority: 1})
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
              <input type='number' placeholder='my prio' value={this.state.priority}
                onChange={(event)=> this.setState({priority: event.target.value}) } required min='0' max='10'/>
                <button onClick={this.postTaskValidation} className={styles.NewTaskButton} >
                  Create
                </button>
            </div>
      }
    </div>
  );

  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTaskCreated: (data) => dispatch(actions.createTask(data))
  };
}

export default connect(null, mapDispatchToProps)(NewTask);