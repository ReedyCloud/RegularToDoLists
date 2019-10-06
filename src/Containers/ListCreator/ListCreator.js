import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import styles from './ListCreator.module.scss';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';
import Button from '../../Components/UI/Button/Button';

class ListCreator extends React.Component {
  
  render () {
    return(
      <>
      <Backdrop clicked={this.props.onListCreateCancel} />
      <div className={styles.ListCreator}>
        <h3>
          Name Me!  
        </h3> 
          <input type='text' placeholder='my name' value={this.props.title}
          onChange={(e)=> this.props.onSetListTitle(e.target.value) } required/>
          <Button  clicked={() => this.props.onListCreated(this.props.title)} btnType={'btnCreateList'}>
            Create
          </Button>
      </div>
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    title: state.lists.title,
    creating: state.lists.creating
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSetListTitle: (title) => dispatch(actions.setListTitle(title)),
    onListCreateCancel: () => dispatch(actions.createListCancel()),
    onListCreated: (title) => dispatch(actions.listCreated(title))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreator);