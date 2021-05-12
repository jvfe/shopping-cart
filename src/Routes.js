import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import App from "./components/App";
import Cart from "./components/Cart";
import Item from "./components/Item";
import Nav from "./components/Nav";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={App} />
        <Route exact path="/shop/:id" component={Item} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
