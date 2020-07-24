import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import NotFound from "./components/page/NotFound";

import NavMain from "./components/nav/NavMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />

      <Switch>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        {/* Pattern observateur : Les ROute ci-dessous sont des observateurs : elles observent les changement d'URL */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
