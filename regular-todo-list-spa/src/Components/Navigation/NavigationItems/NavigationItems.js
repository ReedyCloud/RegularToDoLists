import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.scss';

const navigationItems = (props) => {
  return(
    <nav className={styles.NavigationItems}>
      <NavigationItem >Lists</NavigationItem>
      <NavigationItem>Setting</NavigationItem>
      <NavigationItem>Logout</NavigationItem>
    </nav>
  );
};

export default navigationItems;