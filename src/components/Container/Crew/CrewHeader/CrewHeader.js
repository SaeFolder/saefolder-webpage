import React, { Component } from 'react';
import styles from './CrewHeader.scss';
import logo from 'assets/img/saefolder_logo.png'

class CrewHeader extends Component {
  state = {  }
  render() {
    return (
      <div className = {styles.header}>
        <div className = {styles.container}>
          <div className = {styles.goaltxt}>가치관</div>
          <hr className={styles.vertical_line}/>
          <div className = {styles.txtlist}>
            <div className = {styles.txt}>
              열정 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Passion<br/><br/><br/><br/>

              수평성  &nbsp;&nbsp;&nbsp;&nbsp;Levelness<br/><br/><br/><br/>

              창조성 &nbsp;&nbsp;&nbsp;&nbsp;Creativity<br/><br/><br/><br/>

              도전정신 &nbsp;Challenge spirit
            </div>
          </div>
          <div className = {styles.squarebox}>
            <div className = {styles.square}>
              <img src = {logo} className = {styles.logo} alt="saefolder_logo"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CrewHeader;
