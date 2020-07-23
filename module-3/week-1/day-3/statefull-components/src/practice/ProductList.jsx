import React, { Component } from "react";

import Product from "./Product";

export default class ProductList extends Component {
  state = {
    products: [
      {
        name: "foo",
        brand: "nike",
        price: 200,
      },
      {
        name: "foo",
        brand: "adidas",
        price: 100,
      },
      {
        name: "baz",
        brand: "reebok",
        price: 150,
      },
    ],
  };

  render() {
    return (
      <div>
        <h1 className="title">Product List</h1>
        <ul>
          {this.state.products.map((product, i) => (
            <Product name={product.name} price={product.price} brand={product.brand} />
          ))}
        </ul>
      </div>
    );
  }
}
