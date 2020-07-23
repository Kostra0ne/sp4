import React, { Component } from "react";

export default class ViewTextInput extends Component {
  state = {
    currentText: null,
  };

  handleChange = (evt) => {
    this.setState({ currentText: evt.target.value });
  };

  render() {
    const { currentText } = this.state;
    return (
      // en JS, on peut écouter/gérer un event plus haut dans l'arbre DOM
      // on appelle cela "event deleguation"
      // c'est possible car JS utilise un system du bubbling d'event
      // ... à check sur mdn si ça vous tente :)
      <div onChange={this.handleChange}> 
        <input type="text" placeholder="type a value"/>
        <hr />
        {currentText}
      </div>
    );
  }
}
