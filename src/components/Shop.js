import React from "react";
import { Flex, Wrap, Heading } from "@chakra-ui/react";
import ShopItem from "./ShopItem";

const Shop = ({ items }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgColor="black"
    >
      <Heading color="white" mt={2}>
        Our Products
      </Heading>
      <Wrap
        w={{ sm: "100%", lg: "90%" }}
        alignItems="center"
        justifyContent="center"
        mt={2}
        p={4}
      >
        {items.map((item) => {
          return <ShopItem key={item.id} item={item} />;
        })}
      </Wrap>
    </Flex>
  );
};

export default Shop;
