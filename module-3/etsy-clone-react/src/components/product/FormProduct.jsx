import React, { Component } from "react";

import "./../../styles/mod.form.css";

import { APIHandler } from "./../../api/handler";
const apiHandler = new APIHandler("/api/products");

export default class FormProduct extends Component {
  state = {};

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault(); // empêcher le navigateur d'effectuer l'action par défaut de soumission du form : c.a.d refresh la page
    const apiRes = await apiHandler.createOne(this.state);
    console.log(apiRes);
  };

  render() {
    return (
      <form
        className="form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <h1 className="title">Create new machine !</h1>

        <label htmlFor="name" className="label">name</label>
        <input id="name" name="name" type="text" className="input" />

        <label htmlFor="price" className="label">price</label>
        <input id="price" name="price" type="number" className="input" />

        <label htmlFor="creator" className="label">creator</label>
        <input id="creator" name="creator" type="text" className="input" />

        <label htmlFor="stock" className="label">stock</label>
        <input id="stock" name="stock" type="number" className="input" />

        <label htmlFor="ref" className="label">ref</label>
        <input id="ref" name="ref" type="text" className="input" />

        <button className="btn">create !!!</button>
      </form>
    );
  }
}
