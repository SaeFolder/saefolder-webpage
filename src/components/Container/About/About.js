import React from 'react';
import VisualWrap from './VisualWrap/VisualWrap'
import Introduce from './Introduce/Introduce'
import Crew from './Crew/Crew'
import Vision from './Vision/Vision'


// class about extends Component {
//   state = {  }
//   render() {
//     return (
//       <div>
//         <VisualWrap/>
//         <Introduce/>
//         <Crew/>
//         <Vision/>
//       </div>
//     );
//   }
// }

const About=() => {
  return(
    <div>
      <VisualWrap/>
      <Introduce/>
      <Crew/>
      <Vision/>
    </div>
  );
};

export default About;