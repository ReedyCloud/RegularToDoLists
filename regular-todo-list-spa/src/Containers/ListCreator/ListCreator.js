import React from 'react';

import axios from '../../Axios/axios';
import styles from './ListCreator.module.scss';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';
import Button from '../../Components/UI/Button/Button';
import {getJwt} from '../Auth/helpers/jwt';

class ListCreator extends React.Component {

  state = {
    title: ''
  }

  postListHandler = () => {
    const jwt = getJwt();
    const data = {
      title: this.state.title,
    };

    axios.post('todo/AddTodoList', data, {headers: {Authorization: `Bearer ${jwt}`}}).then(() => {
      this.props.listUpdate();
    });
  }
  
  render () {
    return(
      <>
      <Backdrop clicked={this.props.createListCancelled} />
      <div className={styles.ListCreator}>
        <h3>
          Name Me!  
        </h3> 
          <input type='text' placeholder='my name' value={this.state.title}
          onChange={(event)=> this.setState({title: event.target.value}) } required/>
          <Button clicked={this.postListHandler} btnType={'btnCreateList'}>
            Create
          </Button>
      </div>
      </>
    );
  }
};

export default ListCreator;