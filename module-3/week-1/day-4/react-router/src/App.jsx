import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";

import NavMain from "./components/NavMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />

      <Switch>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
