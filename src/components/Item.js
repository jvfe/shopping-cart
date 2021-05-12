import React from "react";

const Item = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
};

export default Item;
