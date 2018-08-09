import React, { Component } from 'react';
import styles from './Product.scss';
import ProductItem from './ProductItem/ProductItem'

class Product extends Component {
  state = {  }
  render() {
    return (
      <div>
	  	<ProductItem/>
      </div>
    );
  }
}

export default Product;
