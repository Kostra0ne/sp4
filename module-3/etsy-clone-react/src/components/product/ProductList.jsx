import React, { Component } from "react";
import axios from "axios";
import { APIhandler } from "./../../api/handler";
import ProductCardMini from "./ProductCardMini";
import "./../../styles/mod.products-list.css";


const productHandler = APIhandler("/api/products");

export default class ProductList extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    console.log("mounted !!!");
    const apiRes = await productHandler.getAll();
    this.setState({ products: apiRes.data });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="product-displayer">
        <h2 className="title">Product List</h2>
        <ul className="list products">
          {products.map((product, i) => (
            <ProductCardMini key={i} infos={product} />
          ))}
        </ul>
      </div>
    );
  }
}
