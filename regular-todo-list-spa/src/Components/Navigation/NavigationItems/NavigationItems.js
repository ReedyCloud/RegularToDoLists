import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.scss';

const navigationItems = (props) => {
  return(
    <nav className={styles.NavigationItems}>
      <NavigationItem link="/lists" >Lists</NavigationItem>
      <NavigationItem link="/settings">Setting</NavigationItem>
      <NavigationItem link="/XD" >Logout</NavigationItem>
    </nav>
  );
};

export default navigationItems;