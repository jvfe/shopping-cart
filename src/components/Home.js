import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Button, SlideFade } from "@chakra-ui/react";
import background from "../assets/background.jpg";

const Home = () => {
  return (
    <Box
      bg={`url(${background})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      height="100%"
      d="flex"
      alignItems="center"
      justifyContent="start"
    >
      <SlideFade transition={{ enter: { duration: 1, delay: 0.1 } }} in={true}>
        <Box d="flex" flexDirection="column" py={5} mx="3em">
          <Box color="white">
            <Heading size="4xl">Arpeggio</Heading>
            <Heading
              fontStyle="italic"
              textAlign="right"
              fontFamily="monospace"
            >
              Music Shop
            </Heading>
          </Box>
          <Button
            as={Link}
            to="/shopping-cart/shop"
            fontFamily="monospace"
            textTransform="uppercase"
            letterSpacing="0.1em"
            borderRadius={0}
            mt={4}
            colorScheme="yellow"
            bgColor="rgba(230, 191, 131, 0.7)"
            color="#140A0A"
            _hover={{
              background: "rgba(230, 191, 131, 0.8)",
              transform: "translate3d(-2px, -2px, 0)",
            }}
            size="lg"
          >
            View our catalogue
          </Button>
        </Box>
      </SlideFade>
    </Box>
  );
};

export default Home;
