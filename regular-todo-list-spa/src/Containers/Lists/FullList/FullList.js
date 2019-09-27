import React from 'react';
import { withRouter } from 'react-router-dom'

import Spinner from '../../../Components/UI/Spinner/Spinner';
import axios from '../../../axios';
import Task from '.././../Tasks/Task/Task';
import NewTask from '../../Tasks/NewTask/NewTask';
import styles from './FullList.module.scss';

class FullList extends React.Component {

  state = {
    tasks: [],
    loading: true
  }

  componentDidMount () {
    axios.get('GetTodoList?todoListId=' + this.props.match.params.id).then(response =>{
      let fetchedTasks = [];
      fetchedTasks = (response.data.todoItems.map(task => {
        return {
          id: task.id,
          name: task.name,
          description: task.description,
          priority: task.priority,
          status: task.status
          }
      }));
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
        }
      });
      this.setState({tasks: fetchedTasks, loading: false});
    });
  }

  componentDidUpdate = () => {
    if(this.state.loading){
      axios.get('GetTodoList?todoListId=' + this.props.match.params.id).then(response =>{
        let fetchedTasks = [];
        fetchedTasks = (response.data.todoItems.map(task => {
          return {
            id: task.id,
            name: task.name,
            description: task.description,
            priority: task.priority,
            status: task.status
            }
        }));
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
          }
        });
        this.setState({tasks: fetchedTasks, loading: false});
      });
    }
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData('id', id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    const xd = {
      toDo: 0,
      workInProgress: 1,
      finished: 2

    }
    let id = ev.dataTransfer.getData('id');
    let tasks = this.state.tasks.filter((task) => {
      if(task.id == id) {
        task.status = cat;
        axios.put('ChangeStatus?todoItemId='+ task.id +'&status=' + xd[task.status]);
      }
      return task;
    });

    this.setState({tasks: tasks});
  }

  tasksUpdateHandler = () => {
    this.setState({loading: true});
  }
 
 


  render () {

    let states = {
      toDo: [],
      workInProgress: [],
      finished: []
    }

    this.state.tasks.forEach(task => {
      states[task.status].push(
        <Task
          description={task.description}
          priority={task.priority}
          name={task.name}
          onDragStart = {(e) => this.onDragStart(e, task.id)} />
      );
    });

  return(
    <>
      <div className={styles.ListTitle}>
        {this.props.match.params.title}
      </div>

      <div className={styles.FullList}>
        <div className={styles.ListState} 
        onDragOver={(e) =>this.onDragOver(e)}
        onDrop={(e) => {this.onDrop(e, 'toDo')}} >
          <div>
           <h3>To Do:</h3>
          <NewTask listId={this.props.match.params.id} tasksUpdate={this.tasksUpdateHandler} />

           {states.toDo}
          </div>
          
        </div>

        <div className={styles.ListState} 
        onDragOver={(e) =>this.onDragOver(e)}
        onDrop={(e) => {this.onDrop(e, 'workInProgress')}} >
        <div  >
           <h3>Work in Poggers:</h3>
           {states.workInProgress}
          </div>
        </div>

        <div className={styles.ListState} 
        onDragOver={(e) =>this.onDragOver(e)}
        onDrop={(e) => {this.onDrop(e, 'finished')}} >
          <div>
           <h3> Done:</h3>
            {states.finished}
          </div>
        </div>

      </div>
    </>
  );
  }
};

export default withRouter(FullList);