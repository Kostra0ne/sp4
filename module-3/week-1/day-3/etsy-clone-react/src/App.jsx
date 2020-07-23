import React from "react";
import "./styles/App.css";
import HeaderMain from "./components/layout/HeaderMain";

// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <main id="content-main">
        <Home />
      </main>
    </div>
  );
}

export default App;