import React from "react";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
const Shop = ({ items }) => {
  return (
    <div>
      <SimpleGrid columns={2} spacingX="2em" spacingY="2em" px={6} py={4}>
        {items.map((item) => {
          return (
            <div key={item.id} className="shop-item">
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
              <img src={item.photo} alt={item.name} className="shop-image" />
            </div>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Shop;
