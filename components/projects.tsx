import React, { MutableRefObject } from "react";
import {
  Flex,
  Box,
  Heading,
  Grid,
  GridItem,
  Image,
  Icon,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  // Reference to Typing Animation
  return (
    <Flex justify="center" align="start" w="40vw" h="100vh" zIndex="3">
      <Flex
        justify="start"
        w="100%"
        m="30px"
        align="center"
        flexDirection="column"
        gap="6"
      >
        <Heading>Projects</Heading>
        <Box boxShadow="lg" w="100%" outline="3" outlineColor="black">
          <Flex justify="start" m="30px" align="center" flexWrap="wrap" gap="5">
            <Box flexBasis="100%" p="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Next.js
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              React
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              HTML
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              CSS
            </Box>
          </Flex>
        </Box>
        <Box boxShadow="lg" w="100%" outline="3" outlineColor="black">
          <Flex justify="start" m="30px" align="center" flexWrap="wrap" gap="5">
            <Box flexBasis="100%" p="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Next.js
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              React
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              HTML
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              CSS
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Projects;
