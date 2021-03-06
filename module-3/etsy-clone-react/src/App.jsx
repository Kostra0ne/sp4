import React from "react";
import "./styles/App.css";
import HeaderMain from "./components/layout/HeaderMain";
import FooterMain from "./components/layout/FooterMain";
// import des components Switch et Route
import { Switch, Route } from "react-router-dom";

// pages
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Product from "./components/page/Product";
import AdminProducts from "./components/page/AdminProducts";
import FormProduct from "./components/product/FormProduct";
import NotFound from "./components/page/NotFound";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <main id="content-main">
        <Switch>
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/product/:id" component={Product} />
          <Route path="/create-product" component={FormProduct} />
          <Route path="/admin/products" component={AdminProducts} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <FooterMain />
    </div>
  );
}

export default App;
