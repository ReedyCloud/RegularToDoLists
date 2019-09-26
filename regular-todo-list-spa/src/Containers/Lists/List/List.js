import React from 'react';
import Button from '../../../Components/UI/Button/Button';

import styles from './List.module.scss';

class List extends React.Component {


  
  render () {
    return(
      <div className={styles.List}>
        <Button btnType={'btnDelete'}> Delete </Button>
        <h2>{this.props.title}</h2>
        <p>Zadania x/x</p>
        <div>
        <Button btnType={'btnOpen'} clicked={this.props.clicked}> Open </Button>
        </div>
      </div>
    );
  }
};

export default List;