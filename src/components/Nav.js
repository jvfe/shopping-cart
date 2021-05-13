import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ cartSize }) => {
  return (
    <nav>
      <h1>Nav</h1>
      <p>{cartSize}</p>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Nav;
