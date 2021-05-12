import React, { useState } from "react";
import { Link } from "react-router-dom";
import inventory from "../data/instruments.json";
import "../styles/index.css";
const App = () => {
  const [items] = useState(inventory);

  return (
    <div>
      <h1>Hello from App</h1>
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

export default App;
