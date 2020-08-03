import React, { Component } from "react";
import { APIHandler } from "./../../api/handler";
import "./../../styles/mod.table.css";
const handler = new APIHandler("/api/products");

export default class AdminProducts extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const apiRes = await handler.getAll();
    this.setState({ products: apiRes.data });
  }

  handleDelete = async (id) => {
    await handler.deleteOne(id);
    const apiRes2 = await handler.getAll();
    this.setState({ products: apiRes2.data });
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1 className="title">Admin Products</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="cell id">id</th>
              <th className="cell">name</th>
              <th className="cell">price</th>
              <th className="cell">creator</th>
              <th className="cell">delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i}>
                <td className="cell id">{product._id}</td>
                <td className="cell">{product.name}</td>
                <td className="cell">{product.price}</td>
                <td className="cell">{product.creator}</td>
                <td className="cell">
                  <button 
                    onClick={() => this.handleDelete(product._id)}>
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
