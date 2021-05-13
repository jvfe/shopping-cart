import React from "react";

const Item = ({ item, addCart }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <button onClick={() => addCart(item)}>Add to cart</button>
    </div>
  );
};

export default Item;
