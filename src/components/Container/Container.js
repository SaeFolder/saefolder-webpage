import React, { Component } from 'react';
import About from "./About/About";
import Crew from "./Crew/Crew";
import Product from "./Product/Product";

class Container extends Component {
  state = {  }
  render() {
    return (
      <div>
        <About/>
        <Crew/>
        <Product/>
      </div>
    );
  }
}

export default Container;
