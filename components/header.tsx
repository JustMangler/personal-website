import React from "react";
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

      <Box m="12" mt="8" mb="8" marginLeft="auto">
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <Box
            display="inline-block"
            marginRight={{ base: "0.5em", lg: "1em" }}
            as="a"
            href="/#"
            pl="1"
            pr="1"
            borderRadius={8}
            _hover={{
              background: "gray.200",
            }}
          >
            <Heading
              padding={2}
              rounded="md"
              fontWeight="500"
              as="h2"
              size="md"
            >
              Home
            </Heading>
          </Box>
          <Box
            display="inline-block"
            marginRight={{ base: "0.5em", lg: "1em" }}
            as="a"
            href="/#projects"
            pl="1"
            pr="1"
            borderRadius={8}
            _hover={{
              background: "gray.200",
            }}
          >
            <Heading
              padding={2}
              rounded="md"
              fontWeight="500"
              as="h2"
              size="md"
            >
              Projects
            </Heading>
          </Box>
          <Box
            display="inline-block"
            marginRight={{ base: "0.5em", lg: "1em" }}
            as="a"
            href="/#about"
            pl="1"
            pr="1"
            borderRadius={8}
            _hover={{
              background: "gray.200",
            }}
          >
            <Heading
              padding={2}
              rounded="md"
              fontWeight="500"
              as="h2"
              size="md"
            >
              About
            </Heading>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
