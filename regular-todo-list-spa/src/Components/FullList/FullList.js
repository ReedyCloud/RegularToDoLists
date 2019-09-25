import React from 'react';

import styles from './FullList.module.scss';

class FullList extends React.Component {
  
  state = {
    tasks: [
      {name:'odmow paciorek', state: 'toDo', content:'lorem ipsum dolor sit amet cnie'},
      {name:'zjedz sniadanko', state: 'toDo', content:'lorem ipsum dolor sit amet cnie'},
      {name:'kup sznur i krzeselko', state: 'workInProgress', content:'lorem ipsum dolor sit amet cnie'},
      {name:'napisz listy', state: 'done', content:'lorem ipsum dolor sit amet cnie'},
    ]
  }


  
  onDragStart = (ev, id) => {
    console.log('dragstart', id);
    ev.dataTransfer.setData('id', id);
  }
 
  onDragOver = (ev) => {
    ev.preventDefault();
  }
 
  onDrop = (ev, cat) => {
    console.log(cat);
    let id = ev.dataTransfer.getData('id');
 
    let tasks = this.state.tasks.filter((task) => {
      if(task.name == id) {
        task.state = cat;
      }
      return task;
    });
 
    this.setState({...this.state, tasks});
  }
 
  render() {
 
    let states = {
      toDo: [],
      workInProgress: [],
      done: []
    }
 
    this.state.tasks.forEach((task) => {
      states[task.state].push(
        <div key={task.name}
             onDragStart = {(e) => this.onDragStart(e, task.name)}
             draggable
             className="draggable"
             style={{textAlign: 'center'}}
        >
          <h4 style={{display: 'block'}}>{task.name}</h4>
          <p>{task.content}</p>
        </div>
      );
    });
 
    return (
     <div className={styles.FullList}>
       <div onDragOver={(e) =>this.onDragOver(e)}
       onDrop={(e) => {this.onDrop(e, 'toDo')}}
       >
         <span> TODO</span>
        {states.toDo}
       </div>
       <div onDragOver={(e) =>this.onDragOver(e)}
       onDrop={(e) => {this.onDrop(e, 'workInProgress')}}
       >
         <span> workInProgress</span>
        {states.workInProgress}
       </div>
       <div onDragOver={(e) =>this.onDragOver(e)}
       onDrop={(e) => {this.onDrop(e, 'done')}}
       >
         <span> done</span>
        {states.done}
       </div>
     </div>
    );
  }
}

export default FullList;