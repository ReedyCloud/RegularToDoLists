import React from 'react';

import styles from './Header.module.scss';
import Logo from '../../../assets/images/logo/LogoWhite.png';

const Header = (props) => {
  return(
    <div className={styles.Header}>
      <img src={Logo} />
    </div>
  );
};

export default Header;