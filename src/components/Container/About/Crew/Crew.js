import React, { Component } from 'react';
import styles from './Crew.scss';
import Ellipse2 from '../../../../../src/assets/img/Ellipse2.png';
import line_img from '../../../../../src/assets/img/line_img.png';
import irene from '../../../../../src/assets/img/irene_4.png';
import seulgi from '../../../../../src/assets/img/seulgi_4.png';

class Crew extends Component {
  state = {  }
  render() {
    return (
      <div>

        {/* 크루소개 및 반원 */}
        <div className={styles.header}>
          <img src={Ellipse2} className={styles.title_img}/>
          <h1 className={styles.title}>크루소개</h1>
        </div>

        {/* 아이린, 슬기 */}
        <div className={styles.intro}>

          {/* 아이린 */}
          <div className={styles.intro1}>
            <img src={line_img} className={styles.intro1_top_ln}/>
            <div className={styles.intro1_contents}>
              <img src={irene} className={styles.irene}/>
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
            <img src={line_img} className={styles.intro1_bottom_ln}/>
          </div>

          {/* 슬기 */}
          <div className={styles.intro2}>
            <img src={line_img} className={styles.intro2_top_ln}/>
            <div className={styles.intro2_contents}>
              <img src={seulgi} className={styles.seulgi}/>
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
            <img src={line_img} className={styles.intro2_bottom_ln}/>
          </div>

        </div>

      </div>


    );
  }
}

export default Crew;
