import React, { Component } from 'react';
import AboutHeader from './AboutHeader/AboutHeader'
import Vision from './Vision/Vision'
import AboutProduct from './AboutProduct/AboutProduct'


class About extends Component {
  state = {  }
  render() {
    return (
      <div>
        <AboutHeader/>
        <Vision/>
        <AboutProduct/>
      </div>
    );
  }
}

export default About;
