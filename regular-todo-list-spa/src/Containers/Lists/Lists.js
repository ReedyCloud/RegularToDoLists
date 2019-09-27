import React from 'react';

import NewList from '../../Components/UI/NewList/NewList';
import List from './List/List';
import Spinner from '../../Components/UI/Spinner/Spinner';
import styles from './Lists.module.scss';
import axios from '../../axios';
import ListCreator from '../ListCreator/ListCreator';

class Lists extends React.Component {

  state = {
    lists: [],
    creatingList: false,
    loading: true
  }

  componentDidMount () {
    axios.get('GetTodoLists').then((response) =>{
      let fetchedLists = [];
      fetchedLists = (response.data.map(res => {
        return {id: res.id, title: res.title, status:res.status}
      }));
      this.setState({lists: fetchedLists, loading: false});
    });
}
  componentDidUpdate =  () => {
    
      if(this.state.loading){
        axios.get('GetTodoLists').then((response) =>{
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
    axios.delete('/DeleteTodoList?todoListId=' + id).then(res =>{
      console.log('del', res)
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

    let lists = null;
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
            listDelete={() => this.listDeleteHandler(list.id)} />
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

    return(
      <div className={styles.Lists}>
        {lists}
        <NewList clicked={this.createNewListHandler} />
        {creator}
      </div>
    );
  }
};

export default Lists;