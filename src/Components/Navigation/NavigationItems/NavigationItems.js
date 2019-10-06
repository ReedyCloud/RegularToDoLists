import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.scss';

const navigationItems = () => {
  return(
    <nav className={styles.NavigationItems}>
      <NavigationItem link="/logged/lists" exact >Lists</NavigationItem>
      <NavigationItem link="/logged/settings">Setting</NavigationItem>
      <NavigationItem link="/logged/logout" >Logout</NavigationItem>
    </nav>
  );
};

export default navigationItems;