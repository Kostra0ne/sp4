import React, { Component } from "react";

import { APIHandler } from "./../../api/handler";

const handler = new APIHandler("/api/products");

export default class Product extends Component {
  state = {
    product: null,
  };
  // definir un state et y placer une clé product
  // au mount du component, utiliser le handler d'api pour .. 
  // récupérer (get) un produit par son id ....
  // id produit est dispo dans l'URL (donc il faut l'extraire)
  // quand l'api a répondu, setState va re-render le component
  async componentDidMount() {
    console.log(this.props); // le component Product a été servi par une <Route /> : donc les infos utiles de l'URL sont accessibles dans this.props, automatiquement
    const apiRes = await handler.getById(this.props.match.params.id); // this.props.match.id est l'id du produit présent dans l'URL
    this.setState({ product: apiRes.data }); // setState est async (elle accepte un second param optionnel (un callback...))
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1 className="title">Product details</h1>
        {Boolean(this.state.product) === false ? (
          <div>loading ...</div>
        ) : (
          <div className="product-infos">
            <h2 className="title">
              <span title={product.ref}>{product.name}</span> (created by {product.creator})
            </h2>
            <p>
              Cost {product.price} euros - in stock : {product.stock.toString()}{" "}
            </p>
            <img src={product.image} alt={`image du produit ${product.ref}`} />
          </div>
        )}
      </div>
    );
  }
}
