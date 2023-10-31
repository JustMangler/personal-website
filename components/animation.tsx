import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  keyframes,
  chakra,
  shouldForwardProp,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import Typed from "typed.js";
import { words } from "./data";

const animationKeyframes = keyframes`
  0% { transform: translate(0,0); opacity: 0}
  30% { transform: translate(0,0); opacity: 1}
  90% { transform: translate(0, -90rem); opacity: 1}
  100% { transform: translate(0, -90rem); opacity: 0}
`;

const animation = `${animationKeyframes} 4s ease-in-out forwards`;

const animationKeyframes1 = keyframes`
0% { transform: translate(0,0) } 
20% { transform: translate(-10rem,0) }
90% { transform: translate(-10rem,0); opacity: 1}
100% { transform: translate(-10rem,0); opacity: 0 }
`;

const animation1 = `${animationKeyframes1} 5s ease-in-out forwards`;

const animationKeyframes2 = keyframes`
0% { transform: translate(0,0) } 
20% { transform: translate(5rem,0)}
  90% { transform: translate(5rem,0); opacity: 1}
  100% { transform: translate(5rem,0); opacity: 0 }
`;

const animation2 = `${animationKeyframes2} 5s ease-in-out forwards`;

const animationKeyframes3 = keyframes`
0% { transform: translate(0,0); opacity: 0} 
20% { transform: translate(0,0); opacity: 1}
  90% { transform: translate(0,0); opacity: 1}
  100% { transform: translate(0,0); opacity: 0 }
`;

const animation3 = `${animationKeyframes3} 5s ease-in-out forwards`;

interface StartProps {
  time: number;
}

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const StartAnimation = ({ time }: StartProps) => {
  // Reference to Typing Animation
  const imageList = ["layer0.jpeg", "layer1.png", "layer2.png", "layer3.png"];

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["William Zhou "],
      typeSpeed: 80,
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
    <Box
      position="fixed"
      w="100vw"
      h="100vh"
      userSelect="none"
      zIndex="5"
      bgColor="white"
    >
      <Image
        position="fixed"
        src="layer0.jpeg"
        alt="background layer"
        zIndex="-3"
        loading="eager"
        opacity="0"
      ></Image>
      <Image
        position="fixed"
        src="layer1.png"
        alt="back mountains"
        zIndex="-3"
        loading="eager"
        opacity="0"
      ></Image>
      <Image
        position="fixed"
        src="middlerock.png"
        alt="middle rock"
        zIndex="-3"
        loading="eager"
        opacity="0"
      ></Image>
      <Image
        position="fixed"
        src="layer2.png"
        alt="back right rock"
        zIndex="-3"
        loading="eager"
        opacity="0"
      ></Image>
      <Image
        position="fixed"
        src="layer3.png"
        alt="close rock"
        zIndex="-3"
        loading="eager"
        opacity="0"
      ></Image>
      {time <= 2 && (
        <Flex align="center" justify="center" h="100vh">
          <Flex align="center" justify="center">
            <Heading fontWeight="bold" as="h1" size="4xl" pointerEvents="none">
              <span ref={el}> </span>
            </Heading>
          </Flex>
        </Flex>
      )}
      {time > 2 && (
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

          <Flex
            position="absolute"
            bottom="20vh"
            align="center"
            justify="center"
            zIndex="3"
            as={motion.div}
            animation={animation3}
          >
            <Box flexDirection="column" zIndex="3">
              <Text>Click anywhere to continue</Text>
            </Box>
          </Flex>
        </Flex>
      )}
      {time > 3 && (
        <Flex
          h="100vh"
          w="100%"
          position="fixed"
          overflow="hidden"
          inset="0"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            className="loader"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            bgColor="white"
            overflow="hidden"
            zIndex="2"
          >
            <Box
              className="loader_words"
              position="relative"
              overflow="hidden"
              height="21rem"
            >
              <Box
                className="loader_overlay"
                position="absolute"
                zIndex="2"
                height="100%"
                inset="0"
                background="linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0.9) calc(50% - 1rem),
              transparent,
              transparent calc(50% - 0.5rem),
              transparent,
              transparent calc(50% + 0.5rem),
              rgba(255, 255, 255, 0.9) calc(50% + 1rem),
              rgba(255, 255, 255, 0.9)
            );"
              />
              <Box
                className="loader_wordsgroup"
                justifyContent="center"
                alignItems="center"
                as={motion.div}
                animation={animation}
              >
                {words.map((word, index) => {
                  return (
                    <Text
                      as="span"
                      key={index}
                      display="block"
                      fontSize="1.5rem"
                    >
                      {word}
                    </Text>
                  );
                })}
              </Box>
            </Box>
          </Flex>
        </Flex>
      )}
    </Box>
    //loader_wrapper
  );
};

export default StartAnimation;
