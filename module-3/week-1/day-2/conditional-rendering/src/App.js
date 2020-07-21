import React from "react";
import ConditionalGuard from "./ConditionalGuard";
import ConditionalIfElse from "./ConditionalIfElse";
import ConditionalTernary from "./ConditionalTernary";
import "./App.css";

// https://reactjs.org/docs/conditional-rendering.html

function App() {
  return (
    <div className="App">
      <h1 className="title">Conditional and Keys</h1>
      <hr />
      <ConditionalGuard score={5} />
      <hr />
      <ConditionalGuard score={10} />
      <hr />
      <ConditionalIfElse value="woot" />
      <hr />
      <ConditionalIfElse value={[]} />
      <hr />
      <ConditionalTernary text="yo" />
      <hr />
      <ConditionalTernary text="super react c'est cool" />
      <hr />
    </div>
  );
}

export default App;
