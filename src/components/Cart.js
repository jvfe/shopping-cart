import React from "react";

const Cart = ({ cart, remove, minus, plus }) => {
  const subTotal = parseFloat(
    cart.reduce((acc, curr) => acc + curr.price * curr.count, 0).toFixed(2)
  );

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.count}</p>
            <button onClick={() => remove(item)}>Remove</button>
            <button onClick={() => minus(item)}>Minus</button>
            <button onClick={() => plus(item)}>Plus</button>
          </div>
        );
      })}
      <p>{subTotal}</p>
    </div>
  );
};

export default Cart;
