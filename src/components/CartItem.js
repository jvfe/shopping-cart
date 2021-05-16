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

const CartItem = ({ item, changeValue, remove, minus, plus }) => {
  const subTotal = parseFloat((item.price * item.count).toFixed(2));
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
          <NumberInputField onChange={(e) => changeValue(e, item)} />
          <NumberInputStepper>
            <NumberIncrementStepper onClick={() => plus(item)} />
            <NumberDecrementStepper onClick={() => minus(item)} />
          </NumberInputStepper>
        </NumberInput>
        <Heading mt={2} size="xs">
          Subtotal: ${subTotal}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default CartItem;
