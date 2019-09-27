import React from 'react';

import axios from '../../../axios';
import styles from './NewTask.module.scss';

class NewTask extends React.Component {
  
  state = {
    toDoListId: null,
    name : '',
    description: '',
    priority: 10,
    state: 0,
    creatingTask: true
  }

  static getDerivedStateFromProps(props, state) {
    return {...state, toDoListId: props.listId}
  }

  creatingTaskHandler = () => {
    let prevState = this.state.creatingTask;
    this.setState({creatingTask: !prevState});
    console.log(this.state);
  }
  postTaskHandler = () => {
    const data = {
      TodoListId: this.state.toDoListId,
      Name: this.state.name,
      Description: this.state.description,
      Priority: this.state.priority,
      Statis: this.state.state
    };

    axios.post('/AddTodoItem', data).then((res) => {
      console.log(res);
    });
  }


  render () {
  return(
    <div className={styles.NewTask}>
      <div onClick={this.creatingTaskHandler}> add list</div>
      {
        this.state.creatingTask ?
           null :
            <div className={styles.NewTaskCreator}>
              <input type='text' placeholder='my name' value={this.state.name}
                onChange={(event)=> this.setState({name: event.target.value}) } required/>
              <input type='text' placeholder='my descript' value={this.state.description}
                onChange={(event)=> this.setState({description: event.target.value}) } required/>
              <input type='text' placeholder='my prio' value={this.state.priority}
                onChange={(event)=> this.setState({priority: event.target.value}) } required/>
                <button onClick={this.postTaskHandler} >
                  reee
                </button>
            </div>
      }
    </div>
  );

  }
};

export default NewTask;