import React from 'react';
import AboutHeader from './AboutHeader/AboutHeader'
import Vision from './Vision/Vision'
import AboutProduct from './AboutProduct/AboutProduct'


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
      <AboutHeader/>
      <Vision/>
      <AboutProduct/>
    </div>
  );
};

export default About;
