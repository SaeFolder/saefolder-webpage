import React, { Component, createContext } from 'react';

const Context = createContext(); // Context 를 만듭니다.
const { Provider, Consumer: ProductListConsumer } = Context;

class ProductListProvider extends Component {
  state = {
    products: [
      {
        url:"url1",
        description: "description1",
        image: "image1"
      }, {
        url:"url2",
        description: "description2",
        image: "image2"
      }
    ]
  }

  render() {
    const products = this.state;
    return (
      <Provider value={ products }>
        {this.props.children}
      </Provider>
    )
  }
}

// 내보내줍니다.
export {
  ProductListProvider,
  ProductListConsumer,
};
