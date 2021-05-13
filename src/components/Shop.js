import React from "react";
import { Link } from "react-router-dom";
const Shop = ({ items }) => {
  return (
    <div>
      <h1>Hello from Shop</h1>
      <div className="item-grid">
        {items.map((item) => {
          return (
            <div key={item.id} className="shop-item">
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
              <img src={item.photo} alt={item.name} className="shop-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
