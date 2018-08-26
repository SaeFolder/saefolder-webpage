import React, { Component } from 'react';
import Container from "./components/Container/Container";
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import About from './components/Container/About/About';
import Crew from './components/Container/Crew/Crew';
import Product from './components/Container/Product/Product';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <Container/> */}
        <Route exact path="/" component={About}/>
        <Route path="/about" component={About}/>
        <Route path="/crew" component={Crew}/>
        <Route path="/product" component={Product}/>
      </div>
    );
  }
}

export default App;
