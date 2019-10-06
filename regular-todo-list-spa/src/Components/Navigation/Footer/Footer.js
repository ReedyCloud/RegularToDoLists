import React from 'react';

import styles from './Footer.module.scss';

const footer = () => {
  return(
    <footer className={styles.Footer}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <h3>CREATORS</h3>
            <a href="https://github.com/ReedyCloud" target="_blank">Bartosz Ciach</a>
            <a href="https://github.com/AtHisF1nest" target="_blank">Marcin Siekierski</a>
          </div>
          <div className={styles.Column}>
            <h3>SITE</h3>
            <a href='#'>Feedback</a>
            <a href='#'>Report a bug</a>
          </div>
          <div className={styles.Column}>
            <h3>POLICY</h3>
            <a href='#'>Details</a>
            <a href='#'>Terms of Use</a>
            <a href='#'>Privacy & Cookie Policy</a>
          </div>
        </div>
        <div className={styles.LowerRow}>
        &copy; 2019 ToDo's, Inc.
        </div>
    </footer>
  );
};

export default footer;