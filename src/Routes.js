import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Item from "./components/Item";
import Nav from "./components/Nav";
import inventory from "./data/instruments.json";
import "./styles/index.css";

const Routes = () => {
  const [items] = useState(inventory);

  const getItem = (id) => {
    return items.find((item) => item.id === id);
  };

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop">
          <Shop items={items}></Shop>
        </Route>
        <Route
          exact
          path="/shop/:id"
          render={(params) => {
            return <Item item={getItem(params.match.params.id)} />;
          }}
        />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
