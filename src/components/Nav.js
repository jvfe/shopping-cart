import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Circle,
  Heading,
  Text,
  Icon,
  Link as CLink,
} from "@chakra-ui/react";
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
      bgColor="blackAlpha.900"
      color="white"
      borderBottom="1px solid slategray"
      position="sticky"
      top="0"
    >
      <CLink pl={2} as={Link} to="/">
        <Heading size="md">Arpeggio</Heading>
      </CLink>
      <Box
        d="flex"
        justifyContent="space-between"
        w={{ base: "40%", lg: "15%" }}
      >
        <CLink as={Link} to="/shop">
          Shop
        </CLink>
        <CLink as={Link} to="/cart">
          <Box d="flex" alignItems="center">
            <Icon title="Cart" boxSize={6} as={MdShoppingCart} />
            <Circle bg="white" color="black" size="1em">
              <Text fontSize="xs" fontWeight="bold" pt={1}>
                {cartSize}
              </Text>
            </Circle>
          </Box>
        </CLink>
      </Box>
    </Box>
  );
};

export default Nav;
