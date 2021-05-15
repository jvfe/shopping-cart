import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, remove, minus, plus }) => {
  const subTotal = parseFloat(
    cart.reduce((acc, curr) => acc + curr.price * curr.count, 0).toFixed(2)
  );

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        return (
          <CartItem item={item} remove={remove} minus={minus} plus={plus} />
        );
      })}
      <p>{subTotal}</p>
    </div>
  );
};

export default Cart;
