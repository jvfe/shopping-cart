import React from "react";
import { Flex, Image, Center, Text, Heading, Button } from "@chakra-ui/react";

const ShopItem = ({ item, addCart }) => {
  return (
    <Flex px={4} py={2} minH="100%" bg="black">
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Flex mr={{ base: 0, lg: 4 }} h="80%" w="100%">
          <Flex w="100%">
            <Image
              borderRadius="md"
              objectFit="cover"
              src={item.photo}
              alt={item.name}
            ></Image>
          </Flex>
        </Flex>
        <Center flexDir="column" justifyContent="space-between">
          <Heading p={2} color="white">
            {item.name}
          </Heading>
          <Text color="white" w="70%">
            Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então
            bota uma pinga aí cumpadi! Sapien in monti palavris qui num
            significa nadis i pareci latim. Aenean aliquam molestie leo, vitae
            iaculis nisl. Casamentiss faiz malandris se pirulitá.
          </Text>
          <Button
            colorScheme="orange"
            bgColor="orange.700"
            my={4}
            w="50%"
            onClick={() => addCart(item)}
          >
            Add to cart
          </Button>
        </Center>
      </Flex>
    </Flex>
  );
};

export default ShopItem;
