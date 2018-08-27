import React, { Component } from 'react';
import styles from './Header.scss';
import logo from 'assets/img/saefolder_logo.png'
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.Header}>

        <Link className={styles.logobox} to="/about">
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>

        <div className={styles.menu}>
          <Link className={styles.link_1} to="/Crew">Crew</Link>
          <Link className={styles.link_2} to="/Product">Product</Link>
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
