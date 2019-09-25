import React from 'react';
import Button from '../../../Components/UI/Button/Button';

import styles from './List.module.scss';

class List extends React.Component {
  
  state = {
    id: 'id',
    name: 'list_name',
    tasks: [
      {}
    ]
  }

  render () {
    return(
      <div className={styles.List}>
        <Button btnType={'btnDelete'}> Delete </Button>
        <h2>{this.state.name}</h2>
        <p>Zadania x/x</p>
        <div>
        <Button btnType={'btnOpen'}> Open </Button>
        </div>
      </div>
    );
  }
};

export default List;