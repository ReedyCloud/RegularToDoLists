import React from 'react';

import NewList from '../../Components/UI/NewList/NewList';
import List from './List/List';
import Spinner from '../../Components/UI/Spinner/Spinner';
import styles from './Lists.module.scss';
import axios from '../../Axios/axios';
import ListCreator from '../ListCreator/ListCreator';
import {getJwt} from '../Auth/helpers/jwt';

class Lists extends React.Component {

  state = {
    lists: [],
    creatingList: false,
    loading: true,
  }

  componentDidMount () {
    const jwt = getJwt();
    axios.get('todo/GetTodoLists', {headers: {Authorization: `Bearer ${jwt}`}}).then((response) =>{
      let fetchedLists = [];
      fetchedLists = (response.data.map(res => {
        return {id: res.id, title: res.title, status:res.status}
      }));
      this.setState({lists: fetchedLists});
    })
}
  componentDidUpdate =  () => {
    const jwt = getJwt();
      if(this.state.loading){
        axios.get('todo/GetTodoLists', {headers: {Authorization: `Bearer ${jwt}`}}).then((response) =>{
          let fetchedLists= [];
          fetchedLists = (response.data.map(res => {
            return {id: res.id, title: res.title, status:res.status}
        }));
        this.setState({lists: fetchedLists, loading: false});
      });
    }
  }

  listsUpdateHandler = () => {
    this.setState({loading: true, creatingList: false});
  }

  listSelectHandler = (id, title) => {
    this.props.history.push({pathname:'lists/'+ id + '/' +title});
  }

  listDeleteHandler = (id) => {
    const jwt = getJwt();
    axios.delete('todo/DeleteTodoList?todoListId=' + id, {headers: {Authorization: `Bearer ${jwt}`}}).then(res =>{
      let updtadedLists = [...this.state.lists];
      updtadedLists = updtadedLists.filter(list => {
      return list.id !== id;
    });
    this.setState({lists: updtadedLists});
    });
  }

  createNewListHandler = () => {
    let prevState = this.state.creatingList;
    this.setState({creatingList: !prevState});
  }

  createNewListCancelledHandler = () => {
    this.setState({creatingList: false});
  }

  render () {

    let lists = 0;
    if(this.state.lists.length === 0){
     lists = <Spinner />
    }
    if(!this.state.loading){
      lists = this.state.lists.map(list =>{

        return (
          <List
            key={list.id}
            title={list.title}
            clicked={() =>this.listSelectHandler(list.id, list.title)}
            listDelete={() => this.listDeleteHandler(list.id)}
              />
        );
      });
    }

    let creator = null;
    if(this.state.creatingList) {
      creator = (
        <ListCreator
          listUpdate={this.listsUpdateHandler}
          createListCancelled={this.createNewListCancelledHandler} />);
    }

    let newList = null;
    if(!this.state.loading) {
      newList = <NewList clicked={this.createNewListHandler} />;
    }

    return(
      <div className={styles.Lists}>
        {lists}
        {newList}
        {creator}
      </div>
    );
  }
};

export default Lists;