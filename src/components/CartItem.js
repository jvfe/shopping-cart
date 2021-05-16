import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Heading,
  CloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const CartItem = ({ item, remove, minus, plus }) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      borderRadius="lg"
      borderWidth="1px"
      maxW="xs"
      maxH="sm"
    >
      <Box w="100%" h="60%">
        <Image
          borderRadius="md"
          w="100%"
          h="100%"
          src={item.photo}
          alt={item.name}
          objectFit="cover"
        ></Image>
      </Box>
      <Flex
        p={3}
        justifyContent="center"
        alignItems="baseline"
        flexDir="column"
        w="100%"
      >
        <Flex w="100%">
          <Box>
            <Heading fontSize="2xl">{item.name}</Heading>
            <Heading p={2} fontSize="xl">
              Price: ${item.price}
            </Heading>
          </Box>
          <Spacer />
          <CloseButton onClick={() => remove(item)} />
        </Flex>
        <Spacer />
        <NumberInput defaultValue={item.count} min={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper onClick={() => plus(item)} />
            <NumberDecrementStepper onClick={() => minus(item)} />
          </NumberInputStepper>
        </NumberInput>
        <Heading mt={2} size="xs">
          Subtotal: ${item.price * item.count}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default CartItem;
