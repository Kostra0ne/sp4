// todo: Utiliser axios pour afficher ici la liste des pokemons retournés par l'API.
// https://pokeapi.co/api/v2/pokemon/

import React, { Component } from "react";
import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/";

export default class Pokemons extends Component {
  state = {
    pokemons: [],
  };

  async componentDidMount() {
    const apiRes = await axios.get(URL);
    this.setState({ pokemons: apiRes.data.results });
  }

  render() {
    return (
      <ul id="pokemons-list" className="list">
        {this.state.pokemons.length === 0 ? (
          <li>...loading</li>
        ) : (
          this.state.pokemons.map((eachPokemon, i) => {
            //   key est une sorte d'identifiant, demandé par React pour améliorer ses performances
            // la valeur de chaque key, doit être unique !!! ici i (l'index) est unique
            return <li key={i}>{eachPokemon.name}</li>
          })
        )}
      </ul>
    );
  }
}
