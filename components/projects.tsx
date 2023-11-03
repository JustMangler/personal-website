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
        <Box
          boxShadow="lg"
          w="100%"
          backgroundColor="rgb(232,236,240)"
          _hover={{ backgroundColor: "gray.300" }}
          rounded="3xl"
        >
          <Flex
            as="a"
            href="https://github.com/AniMatcher"
            justify="start"
            m="30px"
            align="center"
            flexWrap="wrap"
            gap="5"
          >
            <Heading p="2" pb="0">
              Full Stack Dating Web App
            </Heading>
            <Box flexBasis="100%" p="2" pt="0">
              Developed a full stack dating web app called Animatcher. Features
              a front end built in Next.js and backend built on FastAPI.
              Utilizes Supabase to store and fetch user data, and is hosted on
              Vercel.
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Next.js
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              React
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Typescript
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Chakra UI
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              FastAPI
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Python
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Railway
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Vercel
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Supabase
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              PostgreSQL
            </Box>
          </Flex>
        </Box>
        <Box
          boxShadow="lg"
          w="100%"
          backgroundColor="rgb(232,236,240)"
          _hover={{ backgroundColor: "gray.300" }}
          rounded="3xl"
          as="a"
          href="https://github.com/JustMangler/RedditTTSPublic"
        >
          <Flex justify="start" m="30px" align="center" flexWrap="wrap" gap="5">
            <Heading p="2" pb="0">
              Automatic Reddit TTS Poster
            </Heading>
            <Box flexBasis="100%" p="2" pt="0">
              Python script enabling a user to automatically create, edit, and
              post videos on Tiktok, Instagram Reels, and YouTube with just the
              link. Scrapes Reddit posts to create a script and uses Amazon
              Polly to transcribe text and FFmpeg and PIL to create a video
              based on a given background.
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Python
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              AWS
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Python
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              FFmpeg
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              PIL
            </Box>
          </Flex>
        </Box>
        <Box
          boxShadow="lg"
          w="100%"
          backgroundColor="rgb(232,236,240)"
          _hover={{ backgroundColor: "gray.300" }}
          rounded="3xl"
        >
          <Flex
            as="a"
            href="https://github.com/AniMatcher"
            justify="start"
            m="30px"
            align="center"
            flexWrap="wrap"
            gap="5"
          >
            <Heading p="2" pb="0">
              Full Stack Dating Web App
            </Heading>
            <Box flexBasis="100%" p="2" pt="0">
              Developed a full stack dating web app called Animatcher. Features
              a front end built in Next.js and backend built on FastAPI.
              Utilizes Supabase to store and fetch user data, and is hosted on
              Vercel.
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Next.js
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              React
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Typescript
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Chakra UI
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              FastAPI
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Python
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Railway
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Vercel
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              Supabase
            </Box>
            <Box boxShadow="xs" p="2" rounded="md" bg="grey.100">
              PostgreSQL
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Projects;
