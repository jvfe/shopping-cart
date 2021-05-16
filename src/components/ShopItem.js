import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

const ShopItem = ({ item }) => {
  return (
    <Box
      maxW={{ lg: "sm", md: "40%", sm: "30%" }}
      maxH="sm"
      color="white"
      borderRadius="lg"
      borderWidth="1px"
      overflow="hidden"
      as={Link}
      to={`/shopping-cart/shop/${item.id}`}
    >
      <Image
        h="80%"
        w="100%"
        objectFit="cover"
        src={item.photo}
        alt={item.name}
      />
      <Box px={3} py={3}>
        <Heading
          borderBottom="1px"
          lineHeight={1}
          fontSize={{ sm: "lg", md: "3xl" }}
        >
          {item.name}
        </Heading>
        <Text mt={1} fontSize="lg">{`$${item.price}`}</Text>
      </Box>
    </Box>
  );
};

export default ShopItem;
