import React from 'react';

import List from './List/List';
import styles from './Lists.module.scss';

class Lists extends React.Component {

  state = {
    lists: [
      {
        id: 1,
        name: 'list_name',
        tasks: [
          {taskName:'powieś się', taskState: 'toDo', taskPrio: false },
          {taskName:'zrub to', taskState: 'toDo', taskPrio: false },
          {taskName:'naucz sie', taskState: 'toDo', taskPrio: false },
          {taskName:'jeb disa', taskState: 'toDo', taskPrio: false },
        ]
    },
    {
      id: 2,
      name: 'list_name',
      tasks: [
        {taskName:'powieś się', taskState: 'toDo', taskPrio: false },
        {taskName:'zrub to', taskState: 'toDo', taskPrio: false },
        {taskName:'naucz sie', taskState: 'toDo', taskPrio: false },
        {taskName:'jeb disa', taskState: 'toDo', taskPrio: false },
      ]
  },
  {
    id: 3,
    name: 'list_name',
    tasks: [
      {taskName:'task_name1', taskState: 'toDo', taskPrio: false },
      {taskName:'task_name2', taskState: 'toDo', taskPrio: false },
      {taskName:'task_name3', taskState: 'toDo', taskPrio: false },
      {taskName:'task_name4', taskState: 'toDo', taskPrio: false },
    ]
}
    ]
  }

  listSelectHandler = (id) => {
    this.props.history.push({pathname:'lists'+ id});
  }

  render () {

    let lists = this.state.lists.map((list) => {
      return (
        <List
          key={list.id}
          title={list.name}
          clicked={() => this.listSelectHandler(list.id)} />
      )
    });
    return(
      <div className={styles.Lists}>
        {lists}
      </div>
    );
  }
};

export default Lists;