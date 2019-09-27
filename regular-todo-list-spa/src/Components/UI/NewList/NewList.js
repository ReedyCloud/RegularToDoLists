import React from 'react';
import styles from './NewList.module.scss';

import Button from '../Button/Button';

const newList = (props) => {
  return(
    <div className={styles.NewList}>
      <h2>New List</h2>
      <Button btnType='btnNewList' clicked={props.clicked}>
        Create
      </Button>

    </div>
  );
};

export default newList;