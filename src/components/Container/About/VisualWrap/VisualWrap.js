import React, { Component } from 'react';
import styles from './VisualWrap.scss';
import mainimg from '../../../../assets/img/main_image.png'

class VisualWrap extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.text}>
          <div className={styles.text_1}>
            our&nbsp;&nbsp;new
          </div>
          <div className={styles.text_2}>
            새&nbsp;로&nbsp;운&nbsp;시&nbsp;작
          </div>
          <div className={styles.text_3}>
            주말 북태평양 고기압 일본 쪽으로 남하... 서울 36~37, 대구 39도<br/><br/>
            내주 서울 35도 예보
          </div>
        </div>
      </div>
    );
  }
}

export default VisualWrap;