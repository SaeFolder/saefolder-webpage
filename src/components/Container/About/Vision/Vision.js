import React, { Component } from 'react';
import styles from './Vision.scss';
import semicircle_left from '../../../../../src/assets/img/semicircle_left.png';
import figure_1 from '../../../../../src/assets/img/icon1.png';
import figure_2 from '../../../../../src/assets/img/icon2.png';
import figure_3 from '../../../../../src/assets/img/icon3.png';
import circles from '../../../../assets/img/circles.png';

class Vision extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.Vision}>

        {/* VISION */}
        <div className={styles.title}>
          <img src={semicircle_left} className={styles.semicircle_left} alt="semicircle_left"/>
          <div className={styles.text_title}>
            VISION
          </div>
          <hr className={styles.vertical_line}/>
          <div className={styles.text_subtitle}>
            새폴더가 지향하는 바는 더 많은 사람들에게… 어쩌구저쩌구 <br/>
            내일 전국 곳곳 최대 100㎜ 소나기…폭염 꺾기엔 역부족
          </div>
        </div>
        <img src={circles} className={styles.circles} alt="circles" />

        {/* 내용 */}
        <div className={styles.contents}>

          <div className={styles.figure_1}>
            <img src={figure_1} className={styles.img_figure_1} alt="img"/>
            <hr className={styles.horizontal_line}/>
            <p className={styles.name}>돈</p>
          </div>

          <div className={styles.figure_2}>
            <img src={figure_2} className={styles.img_figure_2} alt="img"/>
            <hr className={styles.horizontal_line}/>
            <p className={styles.name}>경험</p>
          </div>

          <div className={styles.figure_3}>
            <img src={figure_3} className={styles.img_figure_3} alt="img"/>
            <hr className={styles.horizontal_line}/>
            <p className={styles.name}>인맥</p>
          </div>

        </div>

      </div>
    );
  }
}

export default Vision;
