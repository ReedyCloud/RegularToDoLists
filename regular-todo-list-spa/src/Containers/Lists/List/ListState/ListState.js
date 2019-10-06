import React from 'react';

import styles from './ListState.module.scss';

const listState = (props) => {
  return(
    <div className={styles.ListState} 
    onDragOver={props.onDragOver}
    onDrop={props.onDrop} >
      <div>
       <h3 className={styles.TaskStatus}> {props.status}</h3>
        {props.children}
        {props.tasks}
      </div>
    </div>
  );
};

export default listState;