import React, { Component } from 'react';
import styles from './Introduce.scss';
import ellipse_1 from '../../../../assets/img/Ellipse1.png'
import bg from '../../../../assets/img/saefolder_bg.png'

class Introduce extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.introduce}>
        <div className={styles.text}>
          <img src={ellipse_1} className={styles.ellipse_1} alt="ellipse_1" />

          <div className={styles.text_1}>
            새폴더
          </div>

          <div className={styles.text_2}>
          기상청이 앞으로 열흘 뒤까지 구체적인 날씨 정보를 제공하는 중기예보를 <br/>
          보면 두 가지 사실을 알 수 있다. 열흘 뒤까지 낮 최고기온 35도 안팎의 불볕더위가 <br/>
          계속된다는 점과 8월 첫날 나타난 기록적인 폭염이 재현될 가능성은 크지 않다는 것이다.
          </div>

        </div>
        <img src={bg} className={styles.bg} alt="saefolder_bg" />
      </div>
    );
  }
}

export default Introduce;