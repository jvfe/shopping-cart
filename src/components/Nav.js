import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

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
        <Link to="/cart">Cart</Link>
        <p>{cartSize}</p>
      </Box>
    </Box>
  );
};

export default Nav;
