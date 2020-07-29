import React from "react";
import "./App.css";

import ClapsSoluce from "./ClapsSoluce";

function App() {
  return (
    <div className="App">
      <h1 className="ttile">React practice 5</h1>
      <h2 className="title">Claps</h2>
      <ClapsSoluce />
      <ClapsSoluce />
      <ClapsSoluce />
      <hr/>
      <pre>
        {`
            <ClapsSoluce />
            <ClapsSoluce />
            `}
      </pre>
    </div>
  );
}

export default App;
