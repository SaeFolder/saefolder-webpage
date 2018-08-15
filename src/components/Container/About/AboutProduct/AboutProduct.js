import React, { Component } from 'react';
import styles from './AboutProduct.scss';
import semicircle_right from '../../../../assets/img/semicircle_right.png';

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
        contents
        </div>
      </div>
    );
  }
}

export default AboutProduct;
