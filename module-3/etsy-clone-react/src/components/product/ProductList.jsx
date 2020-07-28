import React, { Component } from "react";
import { Link } from "react-router-dom";
import { APIHandler } from "./../../api/handler";
import ProductCardMini from "./ProductCardMini";
import "./../../styles/mod.products-list.css";


// const productHandler = APIhandler("/api/products"); ///  typeof APIHandler === "function"

const productHandler = new APIHandler("/api/products")

export default class ProductList extends Component {
  state = {
    products: [],
  };

  async componentDidMount() { // si besoin d'intéragir avec des data du server-back, au chargement du component, on utilisera TOUJOURS le lifecycle componentDidMount
    console.log("component mounted ! > ProductList a été 'accroché' au DOM de React");
    // en bref : fait l'appel AJAX pour get tous les produits seulement une fois que le component ProductList a été accroché au DOM virtuel de React
    const apiRes = await productHandler.getAll(); // return une Promise
    this.setState({ products: apiRes.data });
  }

  render() {
    console.log("render !!!");
    const { products } = this.state;
    return (
      <div className="product-displayer">
        <h2 className="title">Product List</h2>
        <ul className="list products">
          {products.map((product, i) => (
            <Link key={i} to={`/product/${product._id}`}>
              <ProductCardMini key={i} infos={product} />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
