import React from 'react';
import Button from '../../../Components/UI/Button/Button';

import styles from './List.module.scss';

class List extends React.Component {

  componentDidMount = () => {
    this.props.updateTaskNumbers();
  }
  
  render () {
    return(
      <div className={styles.List}>
        <Button btnType={'btnDelete'} clicked={this.props.listDelete} > Delete </Button>
        <h2>{this.props.title}</h2>
        <p>Tasks: <strong>{this.props.tasks}</strong></p>
        <div>
        <Button btnType={'btnOpen'} clicked={this.props.clicked}> Open </Button>
        </div>
      </div>
    );
  }
};

export default List;