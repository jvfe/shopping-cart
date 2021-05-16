import React from "react";
import {
  Flex,
  Box,
  Wrap,
  Center,
  Button,
  Heading,
  Link as CLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = ({ cart, changeValue, remove, minus, plus }) => {
  const subTotal = parseFloat(
    cart.reduce((acc, curr) => acc + curr.price * curr.count, 0).toFixed(2)
  );

  return (
    <Box
      d="flex"
      flexDir="column"
      color="white"
      bg="black"
      minH="100%"
      justifyContent="space-between"
    >
      <Center p={4} flexDir="column">
        <Heading color="white" mt={3}>
          — Shopping Cart —
        </Heading>
        {cart.length > 0 ? (
          <>
            <Wrap justify="center" maxW="80%" mt={6}>
              {cart.map((item) => {
                return (
                  <CartItem
                    item={item}
                    changeValue={changeValue}
                    remove={remove}
                    minus={minus}
                    plus={plus}
                  />
                );
              })}
            </Wrap>
          </>
        ) : (
          <Heading> Your cart is empty!</Heading>
        )}
      </Center>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={2}
        borderTop="1px solid darkgray"
        position="sticky"
        bottom="0"
        maxH="sm"
        w="100%"
        color="white"
        bgColor="blackAlpha.900"
      >
        <CLink
          as={Link}
          to="/shopping-cart/shop"
          fontSize={{ base: "sm", md: "lg" }}
        >
          ‹ Go Back
        </CLink>
        <Heading fontSize={{ base: "xl", md: "4xl" }}>
          Total: ${subTotal}
        </Heading>
        <Button
          bgColor="orange.700"
          fontSize={{ base: "sm", md: "lg" }}
          colorScheme="orange"
          px={2}
          py={1}
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  );
};

export default Cart;
