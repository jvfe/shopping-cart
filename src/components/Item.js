import React from "react";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
};

export default Item;
