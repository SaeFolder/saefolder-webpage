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

        {/* 기본 (About) */}

        <div className={styles.menu}>
          <div className={styles.menu_link_1}>
            <Link className={styles.link_1} to="/Crew">Crew</Link> 
          </div>

          <div className={styles.menu_link_2}>
            <Link className={styles.link_2} to="/Product">Product</Link>
          </div>
        </div>
        
        {/* Crew 버튼을 클릭했을 때 */}

        {/* <div className={styles.menu}>
          <div className={styles.menu_link_1_click_1}>
            <div className={styles.bg_tri_1_click_1}/>
            <Link className={styles.link_1_click_1} to="/Crew">Crew</Link> 
            <div className={styles.bg_tri_2_click_1} />
          </div>

          <div className={styles.menu_link_2_click_1}>
            <Link className={styles.link_2_click_1} to="/Product">Product</Link>
          </div>
        </div> */}

        {/* Product 버튼을 클릭했을 때 */}
        
        {/* <div className={styles.menu}>
          <div className={styles.menu_link_1_click_2}>
            <Link className={styles.link_1_click_2} to="/Crew">Crew</Link> 
          </div>

          <div className={styles.menu_link_2_click_2}>
            <div className={styles.bg_tri_1_click_2}/>
            <Link className={styles.link_2_click_2} to="/Product">Product</Link>
            <div className={styles.bg_tri_2_click_2}/>
          </div>
        </div> */}


      </div>

    );
  }
}

export default Header;

