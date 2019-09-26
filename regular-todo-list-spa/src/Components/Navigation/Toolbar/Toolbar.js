import React from 'react';

import Logo from '../../../assets/images/logo/Logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Toolbar.module.scss';

const Toolbar = (props) => {
  return(
    <div className={styles.Toolbar}>
      <img className={styles.Logo} src={Logo} alt="" />
      <NavigationItems />
    </div>
  );
};

export default Toolbar;