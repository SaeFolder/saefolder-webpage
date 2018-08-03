import React, { Component } from 'react';
import Visual_wrap from './Visual_wrap/Visual_wrap'
import Introduce from './Introduce/Introduce'
import Crew from './Crew/Crew'
import Vision from './Vision/Vision'


class about extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Visual_wrap/>
        <Introduce/>
        <Crew/>
        <Vision/>
      </div>
    );
  }
}

export default about;