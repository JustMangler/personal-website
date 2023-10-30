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
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IconType } from "react-icons";

const About = () => {
  // Reference to Typing Animation
  const [text, setText] = useState("socials");

  const showText = (t: string) => {
    setText(t);
  };
  const hideText = () => {
    setText("socials");
  };
  return (
    <Flex justify="center" align="center" h="100vh">
      <Flex justify="center" align="center" bgColor="green"></Flex>
    </Flex>
  );
};

export default About;
