import React from "react";

const ShopItem = ({ item, addCart }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <button onClick={() => addCart(item)}>Add to cart</button>
    </div>
  );
};

export default ShopItem;
