import React, { Component } from 'react';
import styles from './Header.scss';
import logo from '../../assets/img/saefolder_logo.png'

class Header extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.Header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.button}>
          <button className={styles.buttonc}>크루소개</button>
          <button className={styles.buttonp}>Product</button>
        </div>
      </div>
    );
  }
}

export default Header;

/* 메모장

크루소개 버튼 className : buttonc
Product 버튼 className : buttonp

*/