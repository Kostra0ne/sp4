import React from "react";
import "./App.css";

import ButtonToggle from "./ButtonToggle";
import Pokemons from "./Pokemons";

function App() {
  return (
    <div className="App">
      <h1 className="title">React practice 4</h1>
      <h2 className="title">Toggle button</h2>
      
      <ButtonToggle text="signup" />
      <ButtonToggle text="signin" />
      <ButtonToggle text="signout" />

      <pre>
        {`
    <ButtonToggle text="signup" />
    <ButtonToggle text="signin" />
    <ButtonToggle text="signout" />
    `}
      </pre>
      <hr />

      <h2 className="title">Catch'em all</h2>

      <Pokemons />

      <pre>
        {`
    <Pokemons />
      `}
      </pre>
    </div>
  );
}

export default App;
