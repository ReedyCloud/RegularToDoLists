import React from 'react';

import styles from './NavigationItem.module.scss';

const navigationItem = (props) => {
  return(
    <div className={styles.NavigationItem}>
      {props.children}
    </div>
  );
};

export default navigationItem;