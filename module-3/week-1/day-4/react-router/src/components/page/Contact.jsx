import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    fullName: "",
    email: "",
    message: "",
  };

  updateMessage = (evt) => {
    console.log(evt.target.value);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form onChange={this.updateMessage}>
        <h1 className="title">Contact-us :)</h1>
        <label>full name</label>
        <input name="fullName" type="text" />
        <label>email</label>
        <input name="email" type="text" />
        <label>message</label>
        <textarea name="message" />
      </form>
    );
  }
}
