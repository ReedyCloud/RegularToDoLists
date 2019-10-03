import React from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

import {getJwt} from '../../Auth/helpers/jwt';
import axios from '../../../Axios/axios';
import Task from '.././../Tasks/Task/Task';
import NewTask from '../../Tasks/NewTask/NewTask';
import styles from './FullList.module.scss';
import ListState from '../List/ListState/ListState';
import * as actions from '../../../store/actions/index';

class FullList extends React.Component {


  componentDidMount () {
    this.props.onGetTasks(this.props.match.params.id);
  }

  componentDidUpdate = () => {
    if(this.props.loading){
      this.props.onGetTasks(this.props.match.params.id);
    }
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData('id', id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    const jwt = getJwt();

    const taskState = {
      toDo: 0,
      workInProgress: 1,
      finished: 2

    }
    let id = ev.dataTransfer.getData('id');
    let tasks = this.props.tasks.filter((task) => {
      if(task.id === Number.parseInt(id)) {
        task.status = cat;
        axios.put('todo/ChangeStatus?todoItemId='+ task.id +'&status=' + taskState[task.status], null, {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
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

    this.props.tasks.forEach(task => {
      states[task.status].push(
        <Task
          updateTasks={this.tasksUpdateHandler}
          description={task.description}
          priority={task.priority}
          name={task.name}
          onDragStart = {(e) => this.onDragStart(e, task.id)}
          id={task.id}
          key={task.id}/>
      );
    });

  return(
    <>
      <div className={styles.ListTitle}>
        {this.props.match.params.title}
      </div>

      <div className={styles.FullList}>
        <ListState 
          status='To Do:'
          tasks={states.toDo}
          onDragOver={(e) =>this.onDragOver(e)}
          onDrop={(e) => {this.onDrop(e, 'toDo')}}>
            <NewTask listId={this.props.match.params.id} tasksUpdate={this.tasksUpdateHandler} />
        </ListState>
        <ListState 
          status='Work in Poggers:'
          tasks={states.workInProgress}
          onDragOver={(e) =>this.onDragOver(e)}
          onDrop={(e) => {this.onDrop(e, 'workInProgress')}}/>
        <ListState
          status='Finished:'
          tasks={states.finished}
          onDragOver={(e) =>this.onDragOver(e)}
          onDrop={(e) => {this.onDrop(e, 'finished')}}/>
      </div>
    </>
  );
  }
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    loading: state.tasks.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetTasks: (id) => dispatch(actions.getTasks(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FullList));