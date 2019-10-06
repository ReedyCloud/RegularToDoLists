import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import NewList from '../../Components/UI/NewList/NewList';
import List from './List/List';
import Spinner from '../../Components/UI/Spinner/Spinner';
import styles from './Lists.module.scss';
import ListCreator from '../ListCreator/ListCreator';

class Lists extends React.Component {

  componentDidMount () {
    if(!localStorage.getItem('jwt')){
      this.props.history.push('/');
    }

    this.props.onGetLists();
}
  componentDidUpdate = () => {
      if(this.props.loading){
        this.props.onGetLists();
    }
  }

  listSelectHandler = (id, title) => {
    this.props.history.push({pathname:'lists/'+ id + '/' + title});
  }

  render () {

    let lists = null;
    if(this.props.lists.length === 0){
     lists = <Spinner />
    }
    if(!this.props.loading){
      lists = this.props.lists.map(list =>{

        return (
          <List
            key={list.id}
            title={list.title}
            clicked={() =>this.listSelectHandler(list.id, list.title)}
            listDelete={() => this.props.onListDelete(list.id)}
              />
        );
      });
    }

    let creator = null;
    if(this.props.creating) {
      creator = <ListCreator />;
    }

    let newList = null;
    if(!this.props.loading) {
      newList = <NewList />;
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

const mapStateToProps = state => {
  return {
    lists: state.lists.lists,
    creating: state.lists.creating,
    loading: state.lists.loading,
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    onGetLists: () => dispatch(actions.getLists()),
    onListDelete: (id) => dispatch(actions.listDeleted(id))
  };
};

export default connect(mapStateToProps, mapDistpatchToProps )(Lists);