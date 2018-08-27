import React, { Component } from 'react';
import CrewHeader from './CrewHeader/CrewHeader'
import CrewGoal from './CrewGoal/CrewGoal'

class Crew extends Component {
  state = {  }
  render() {
    return (
      <div>
	  	<CrewHeader/>
		<CrewGoal/>
      </div>
    );
  }
}

export default Crew;
