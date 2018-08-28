import React, { Component } from 'react';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import About from './components/Container/About/About';
import Crew from './components/Container/Crew/Crew';
import Product from './components/Container/Product/Product';
import { ProductListProvider } from 'contexts/product_list';

class App extends Component {
  render() {
    return (
      <ProductListProvider>
        <div>
          <Header/>
          {/* <Container/> */}
          <Route exact path="/" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/crew" component={Crew}/>
          <Route path="/product" component={Product}/>
        </div>
      </ProductListProvider>
    );
  }
}

export default App;
