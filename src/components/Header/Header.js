import React, { Component } from 'react';
import styles from './Header.scss';
import logo from '../../assets/img/saefolder_logo.png'

class Header extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.Header}>
        <a href="about">
          <img src={logo} className={styles.logo} alt="logo" />
        </a>
        <div className={styles.menu}>
          <a className={styles.link_1} href="Crew">Crew</a>
          <a className={styles.link_2} href="Product">Product</a>
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