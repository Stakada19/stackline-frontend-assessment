import React from 'react';
import logo from '../../assets/stackline_logo.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  )
};
export default Header;