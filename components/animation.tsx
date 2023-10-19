import React from "react";
import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  keyframes,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const animationKeyframes1 = keyframes`
  0% { transform: translate(0,0) } 
  100% { transform: translate(-150vw,0) }
`;

const animation1 = `${animationKeyframes1} 3s ease-in`;

const animationKeyframes2 = keyframes`
0% { transform: translate(0,0) } 
100% { transform: translate(150vw,0) }
`;

const animation2 = `${animationKeyframes2} 3s ease-in`;

interface StartProps {
  time: number;
}

const StartAnimation = ({ time }: StartProps) => {
  // Reference to Typing Animation
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["William Zhou "],
      typeSpeed: 100,
      onComplete: (self: Typed) => {
        self.cursor.remove();
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <Box>
      {time <= 4 && (
        <Flex align="center" justify="center" h="100vh">
          <Flex align="center" justify="center">
            <Heading fontWeight="bold" as="h1" size="4xl">
              <span ref={el}> </span>
            </Heading>
          </Flex>
        </Flex>
      )}
      {time > 4 && time < 7 && (
        <Flex align="center" justify="center" h="100vh">
          <Flex align="center" justify="center">
            <Box as={motion.div} animation={animation1}>
              <Heading fontWeight="bold" as="h1" size="4xl">
                William&nbsp;
              </Heading>
            </Box>
            <Box as={motion.div} animation={animation2}>
              <Heading fontWeight="bold" as="h1" size="4xl">
                Zhou
              </Heading>
            </Box>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default StartAnimation;
