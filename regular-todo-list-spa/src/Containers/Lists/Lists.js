import React from 'react';

import List from './List/List';
import styles from './Lists.module.scss';

class Lists extends React.Component {

  render () {
    return(
      <div className={styles.Lists}>
        <List />
        <List />
        <List />
      </div>
    );
  }
};

export default Lists;