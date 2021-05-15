import React from "react";

const CartItem = ({ item, remove, minus, plus }) => {
  return (
    <div key={item.id}>
      <h1>{item.name}</h1>
      <p>{item.count}</p>
      <button onClick={() => remove(item)}>Remove</button>
      <button onClick={() => minus(item)}>Minus</button>
      <button onClick={() => plus(item)}>Plus</button>
    </div>
  );
};

export default CartItem;
