import React from "react";
import { Flex, Box, Wrap, Center, Button, Heading } from "@chakra-ui/react";
import CartItem from "./CartItem";

const Cart = ({ cart, remove, minus, plus }) => {
  const subTotal = parseFloat(
    cart.reduce((acc, curr) => acc + curr.price * curr.count, 0).toFixed(2)
  );

  return (
    <Box
      d="flex"
      flexDir="column"
      bg="black"
      minH="100%"
      justifyContent="space-between"
    >
      <Center color="white" p={4} flexDir="column">
        <Heading color="white" mt={3}>
          — Shopping Cart —
        </Heading>
        <Wrap justify="center" maxW="80%" mt={6}>
          {cart.map((item) => {
            return (
              <CartItem item={item} remove={remove} minus={minus} plus={plus} />
            );
          })}
        </Wrap>
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
        bgColor="blackAlpha.800"
      >
        <Heading fontSize={{ base: "sm", md: "lg" }}>Go Back</Heading>
        <Heading fontSize={{ base: "xl", md: "4xl" }}>
          Total: ${subTotal}
        </Heading>
        <Button fontSize={{ base: "sm", md: "lg" }} colorScheme="orange" p={1}>
          Checkout
        </Button>
      </Flex>
    </Box>
  );
};

export default Cart;
