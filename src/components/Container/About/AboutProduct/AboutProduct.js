import React, { Component } from 'react';
import styles from './AboutProduct.scss';
import semicircle_right from '../../../../assets/img/semicircle_right.png';
import parallelogram from '../../../../assets/img/parallelogram.png';
import arrow_1 from '../../../../assets/img/arrow_1.png';
import arrow_2 from '../../../../assets/img/arrow_2.png';
import img_products_1 from '../../../../assets/img/img_products_1.jpg';
import img_products_2 from '../../../../assets/img/img_products_2.jpg';

class AboutProduct extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.AboutProduct}>

        {/* Products */}
        <div className={styles.title}>
          <img src={semicircle_right} className={styles.semicircle_right} alt={semicircle_right} />
          <div className={styles.text_title}>
            PRODUCTS
          </div>
          <hr className={styles.vertical_line}/>
          <div className={styles.text_subtitle}>
            새폴더가 지향하는 바는 더 많은 사람들에게 <br/>
            내일 전국 곳곳 최대 100㎜ 소나기…폭염
          </div>
        </div>

        {/* Contents */}
        <div className={styles.contents}>

          <div className={styles.space_left}>
            <img src={parallelogram} className={styles.parallelogram_1} />
            <img src={arrow_2} className={styles.arrow_2} />
            <img src={arrow_1} className={styles.arrow_1} />
          </div>

          <div className={styles.products_1}>
            <img src={img_products_1} className={styles.img_products_1} />
          </div>

          <div className={styles.products_2}>
          </div>

          <div className={styles.space_right}>
          </div>

        </div>
      </div>
    );
  }
}

export default AboutProduct;
