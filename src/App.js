import React, { Component } from 'react';
import './App.css';
import Container from "./components/Container/Container";
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container/>
      </div>
    );
  }
}

export default App;
