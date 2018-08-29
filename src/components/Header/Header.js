import React, { Component } from 'react';
import styles from './Header.scss';
import logo from 'assets/img/saefolder_logo.png'
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {  }
  render() {
    const currentPage = window.location.pathname;
    return (
      <div className={styles.Header}>

        <Link className={styles.logobox} to="/about">
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        {
          (function() {
            if (currentPage === "/about" || currentPage === "/") return (
              <div className={styles.menu}>
                <div className={styles.menu_link_1}>
                  <Link className={styles.link_1} to="/crew">Crew</Link>
                </div>

                <div className={styles.menu_link_2}>
                  <Link className={styles.link_2} to="/product">Product</Link>
                </div>
              </div>
            )
            if (currentPage === "/crew") {
              return (
                <div className={styles.menu}>
                  <div className={styles.menu_link_1_click_1}>
                    <div className={styles.bg_tri_1_click_1}/>
                    <Link className={styles.link_1_click_1} to="/crew">Crew</Link>
                    <div className={styles.bg_tri_2_click_1} />
                  </div>

                  <div className={styles.menu_link_2_click_1}>
                    <Link className={styles.link_2_click_1} to="/product">Product</Link>
                  </div>
                </div>
              )
            }
            if (currentPage === "/product") {
              return (
                <div className={styles.menu}>
                  <div className={styles.menu_link_1_click_2}>
                    <Link className={styles.link_1_click_2} to="/crew">Crew</Link>
                  </div>

                  <div className={styles.menu_link_2_click_2}>
                    <div className={styles.bg_tri_1_click_2}/>
                    <Link className={styles.link_2_click_2} to="/product">Product</Link>
                    <div className={styles.bg_tri_2_click_2}/>
                  </div>
                </div>
              )
            }
          })()
        }
      </div>

    );
  }
}

export default Header;
