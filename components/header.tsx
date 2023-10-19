import React from "react";
import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  keyframes,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { opacity: 0}
  100% { opacity: 1d}
`;

const animation = `${animationKeyframes} 2s ease-in-out`;

const Header = () => {
  // Reference to Typing Animation

  return (
    <Flex
      alignItems="center"
      width="full"
      align={{ base: "left", md: "center" }}
      as={motion.div}
      animation={animation}
    >
      <Flex align="center">
        <Heading
          ml="12"
          mr="4"
          mt="8"
          mb="8"
          fontWeight="bold"
          as="h1"
          size="xl"
        >
          William Zhou
        </Heading>
        <Image h="100%" src="cat.gif" alt="cat gif" />
      </Flex>

      <Box m="12" mt="8" mb="8" marginLeft="auto">
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <Box
            display="inline-block"
            marginRight={{ base: "0.5em", lg: "1em" }}
            as="a"
            href="/"
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
