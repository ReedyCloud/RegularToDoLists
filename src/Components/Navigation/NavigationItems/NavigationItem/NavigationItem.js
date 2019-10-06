import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

const navigationItem = (props) => {
  return(
    <div className={styles.NavigationItem}>
      <NavLink to={props.link} activeClassName={styles.active} exact={props.exact}>
        {props.children}
      </NavLink>
    </div>
  );
};

export default navigationItem;