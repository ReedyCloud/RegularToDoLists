import React from 'react';
import Button from '../../../Components/UI/Button/Button';
import X from '../../../Components/UI/X/X';
import styles from './List.module.scss';

class List extends React.Component {

  render () {
    return(
      <div className={styles.List}>
        <div onClick={this.props.listDelete} className={styles.DeleteListButton} > <X /> </div>
        <h2>{this.props.title}</h2>
        <div>
        <button className={styles.Button} onClick={this.props.clicked}> Open </button>
        </div>
      </div>
    );
  }
};

export default List;