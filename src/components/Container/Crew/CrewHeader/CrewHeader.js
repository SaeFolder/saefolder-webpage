import React, { Component } from 'react';
import styles from './CrewHeader.scss';
import logo from 'assets/img/saefolder_logo.png'

class CrewHeader extends Component {
  state = {  }
  render() {
    return (
      <div className = {styles.header}>
        <div className = {styles.container}>
          <div className = {styles.goaltxt}>목표</div>
          <hr className={styles.vertical_line}/>
          <div className = {styles.txtlist}>
            <div className = {styles.txt}>
              히아신스  Hyacinth<br/><br/><br/><br/>

              측백나무  Arborvitae<br/><br/><br/><br/>

              수선화  Narcissus<br/><br/><br/><br/>

              시클라멘  Cyclamen
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
