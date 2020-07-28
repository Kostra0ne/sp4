import React from 'react';
import './App.css';

import ButtonToggle from "./ButtonToggleSoluce";
import PokemonsSoluce from "./PokemonsSoluce";

function App() {
  return (
    <div className="App">
      <ButtonToggle text="signup" />
      <ButtonToggle text="signin" />
      <ButtonToggle text="signout" />
      <hr />
      <PokemonsSoluce />
    </div>
  );
}

export default App;
