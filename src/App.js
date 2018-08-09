import React, { Component } from 'react';
import './App.css';
import Container from "./components/Container/Container";
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import About from './components/Container/About/About';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <Container/> */}
        <Route exact path="/" component={About}/>
        <Route path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
