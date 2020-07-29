import React from "react";
import "./App.css";

import Claps from "./ClapsSoluce";

function App() {
  return (
    <div className="App">
      <h1 className="ttile">React practice 5</h1>
      <h2 className="title">Claps</h2>
      <Claps />
      <Claps />
      <Claps />
      <hr/>
      <pre>
        {`
            <Claps />
            <Claps />
            <Claps />
            `}
      </pre>
    </div>
  );
}

export default App;
