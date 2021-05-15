import React from "react";
import { Link } from "react-router-dom";

const ShopItem = ({ item }) => {
  return (
    <div key={item.id} className="shop-item">
      <Link to={`/shop/${item.id}`}>{item.name}</Link>
      <img src={item.photo} alt={item.name} className="shop-image" />
    </div>
  );
};

export default ShopItem;
