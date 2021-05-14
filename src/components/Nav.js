import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";

const Nav = ({ cartSize }) => {
  return (
    <Box
      as="nav"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      py={2}
      px={4}
      w="100%"
      height="3em"
      bg="black"
      color="white"
      position="sticky"
      top="0"
    >
      <Heading size="md">Arpeggio</Heading>
      <Box d="flex" justifyContent="space-between" w="25%">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Box d="flex" alignItems="center">
          <Link to="/cart">
            <Icon title="Cart" boxSize={6} as={MdShoppingCart} />
          </Link>
          <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            bg="white"
            color="black"
            width="1em"
            height="1em"
            borderRadius="50%"
          >
            <Text fontSize="xs" fontWeight="bold" pt={1}>
              {cartSize}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
