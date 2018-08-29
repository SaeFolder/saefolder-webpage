import React, { Component, createContext } from 'react';
import irene from 'assets/img/irene_4.png';
import seulgi from 'assets/img/seulgi_4.png';

const Context = createContext(); // Context 를 만듭니다.
const { Provider, Consumer: ProductListConsumer } = Context;

class ProductListProvider extends Component {
  state = {
    products: [
      {
        url:"/",
        title:"아이린  IRINE",
        description: "Bae Joo-hyun",
        image: irene
      }, {
        url:"/",
        title:"슬기  SEULGI",
        description: "Kang Seul-gi",
        image: seulgi
      }
    ]
  }

  render() {
    const products = this.state.products;
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
