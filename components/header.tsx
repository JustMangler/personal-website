import React from "react";
import { Link } from "react-scroll";
import { Container, Box, Flex, Text, Heading, Image } from "@chakra-ui/react";

const Header = () => {
  // Reference to Typing Animation

  return (
    <Flex
      alignItems="center"
      width="full"
      align={{ base: "left", md: "center" }}
      position="fixed"
      top="0"
      zIndex="5"
    >
      <Flex align="center">
        <Heading
          ml="70"
          mr="4"
          mt="8"
          mb="8"
          fontWeight="bold"
          as="h1"
          size="xl"
        >
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "fixed",
              bottom: 1,
              left: 0,
            }}
          >
            Welcome!
          </Text>
        </Heading>
        <Image h="100%" src="cat.gif" alt="cat gif" />
      </Flex>
    </Flex>
  );
};

export default Header;
