import React, { Component } from 'react';
import styles from './ProductItem.scss';
import line_img from '../../../../../src/assets/img/line_img.png';
import irene from '../../../../../src/assets/img/irene_4.png';
import seulgi from '../../../../../src/assets/img/seulgi_4.png';

class ProductItem extends Component {
  state = {  }
  render() {
    return (
      <div>
        {/* 아이린, 슬기 */}
        <div className={styles.intro}>

          {/* 아이린 */}
          <div className={styles.intro1}>
            <img src={line_img} className={styles.intro1_top_ln} alt="img"/>
            <img src={line_img} className={styles.intro1_bottom_ln} alt="img"/>
            <div className={styles.intro1_contents}>
              <img src={irene} className={styles.irene} alt="img"/>
              <div className={styles.irene_info}>
                <p className={styles.irene_name}>
                  아이린&nbsp;&nbsp;IRINE
                </p>
                <p className={styles.irene_prev}>
                  Bae Joo-hyun, known professionally as Irene, <br/>
                  is a South Korean singer, actress and television host. <br/>
                  She is a member and leader of the South Korean girl group <br/>
                  Red Velvet.
                </p>
              </div>
            </div>
          </div>

          {/* 슬기 */}
          <div className={styles.intro2}>
            <img src={line_img} className={styles.intro2_top_ln} alt="img"/>
            <img src={line_img} className={styles.intro2_bottom_ln} alt="img"/>
            <div className={styles.intro2_contents}>
              <img src={seulgi} className={styles.seulgi} alt="img"/>
              <div className={styles.seulgi_info}>
                <p className={styles.seulgi_name}>
                  슬기&nbsp;&nbsp;SEULGI
                </p>
                <p className={styles.seulgi_prev}>
                  Kang Seul-gi, referred to as Seulgi, is a South Korean singer. <br />
                  She is a member of South Korean girl group Red Velvet. <br />
                  Kang Seul-gi, referred to as Seulgi, is a South Korean singer. <br />
                  She is a member of South Korean girl group Red Velvet.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default ProductItem;
