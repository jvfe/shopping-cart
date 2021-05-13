import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.count}</p>
            <button>Minus</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
