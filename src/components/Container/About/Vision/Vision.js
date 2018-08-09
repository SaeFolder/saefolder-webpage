import React, { Component } from 'react';
import styles from './Vision.scss';
import Ellipse1 from '../../../../../src/assets/img/Ellipse1.png';
import wendy from '../../../../../src/assets/img/icon1.png';
import joy from '../../../../../src/assets/img/icon2.png';
import yeri from '../../../../../src/assets/img/icon3.png';

class Vision extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.vision}>

        {/* VISION */}
        <div className={styles.header}>
          <img src={Ellipse1} className={styles.title_img}  alt="img"/>
          <h1 className={styles.title}>VISION</h1>
        </div>

        {/* 내용 */}
        <div className={styles.main}>

          <div className={styles.wendy}>
            <img src={wendy} className={styles.img_wendy}  alt="img"/>
            <hr className={styles.line}/>
            <p className={styles.name}>wendy</p>
          </div>

          <div className={styles.joy}>
            <img src={joy} className={styles.img_joy}  alt="img"/>
            <hr className={styles.line}/>
            <p className={styles.name}>joy</p>
          </div>

          <div className={styles.yeri}>
            <img src={yeri} className={styles.img_yeri}  alt="img"/>
            <hr className={styles.line}/>
            <p className={styles.name}>yeri</p>
          </div>

        </div>

      </div>
    );
  }
}

export default Vision;
