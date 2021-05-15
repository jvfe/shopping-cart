import React from "react";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import ShopItem from "./ShopItem";

const Shop = ({ items }) => {
  return (
    <div>
      <SimpleGrid columns={2} spacingX="2em" spacingY="2em" px={6} py={4}>
        {items.map((item) => {
          return <ShopItem item={item} />;
        })}
      </SimpleGrid>
    </div>
  );
};

export default Shop;
