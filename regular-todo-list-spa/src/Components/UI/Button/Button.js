import React from 'react';

import styles from './Button.module.scss';

const button = (props) => {
  return(
    <button className={styles[props.btnType]}>
      {props.children}
    </button>
  );
};

export default button;