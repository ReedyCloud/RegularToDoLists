import React from 'react';
import {connect} from 'react-redux'
import styles from './NewList.module.scss';

import * as actions from '../../../store/actions/index';
import Button from '../Button/Button';

const newList = (props) => {
  return(
    <div className={styles.NewList}>
      <h2>New List</h2>
      <Button btnType='btnNewList' clicked={props.onListCreate}>
        Create
      </Button>

    </div>
  );
};

const mapDistpatchToProps = dispatch => {
  return {
    onListCreate: () => dispatch(actions.createList()),
  };
};

export default connect(null,mapDistpatchToProps)(newList);