import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Item from "./components/Item";
import Nav from "./components/Nav";
import inventory from "./data/instruments.json";
import "./styles/index.css";

const Routes = () => {
  const [cart, setCart] = useState([]);

  const [cartSize, setCartSize] = useState(0);

  const addToCart = (product) => {
    const sameItem = cart.find((item) => product.id === item.id);
    if (sameItem) {
      setCart((prevCart) => {
        const newCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
        return newCart;
      });
    } else {
      setCart((prevCart) => {
        const toAdd = { ...product, count: 1 };
        return [...prevCart, toAdd];
      });
    }
  };

  const getItem = (id) => {
    return inventory.find((item) => item.id === id);
  };

  useEffect(() => {
    setCartSize(cart.reduce((acc, item) => acc + item.count, 0));
  }, [cart]);

  return (
    <Router>
      <Nav cartSize={cartSize} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop">
          <Shop items={inventory}></Shop>
        </Route>
        <Route
          exact
          path="/shop/:id"
          render={(params) => {
            return (
              <Item
                item={getItem(params.match.params.id)}
                addCart={addToCart}
              />
            );
          }}
        />
        <Route exact path="/cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
