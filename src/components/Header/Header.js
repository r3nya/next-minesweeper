import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <header className="container grid">
      <h1 className="cell -3of12">
        Hello{' '}
        <span role="img" aria-label="star">
          🌟
        </span>
      </h1>
    </header>
    <hr />
  </div>
);

export default Header;
