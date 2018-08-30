import React, { Component } from 'react';
import ProductItem from './ProductItem/ProductItem'
import { ProductListConsumer } from 'contexts/product_list';

class Product extends Component {
  state = {  }
  count = 0
  render() {
    return (
      <ProductListConsumer>
          {
            (products) => {
              var product_item_list = [];
              for (var i = 0; i < products.length; i++) {
                product_item_list.push(
                  <ProductItem
                    url = {products[i]['url']}
                    description = {products[i]['description']}
                    title = {products[i]['title']}
                    image = {products[i]['image']}
                    i = {i}/>
                  )
              }
              return product_item_list
            }
          }
      </ProductListConsumer>
    );
  }
}

export default Product;
