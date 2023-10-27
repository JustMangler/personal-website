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

interface FramerMagneticTypes {
  fontSize: string;
  color: string;
  as: IconType;
}

const FramerMagnetic = ({ fontSize, color, as }: FramerMagneticTypes) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <Box
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      as={motion.div}
      animate={{ x, y }}
    >
      <Icon
        fontSize={fontSize}
        _hover={{
          color: color,
        }}
        color={"black"}
        as={as}
      />
    </Box>
  );
};

const About = () => {
  // Reference to Typing Animation
  return (
    <Flex
      flexGrow="true"
      justify="start"
      align="center"
      h="calc(100vh - 108px)"
    >
      <Grid w="100vw" gridTemplateColumns={"2fr 1fr"} gap={6}>
        <GridItem w="100%" ml="70">
          <Heading>My name is</Heading>
          <Heading fontSize="8xl">William Zhou</Heading>
        </GridItem>
        <GridItem
          w="500px"
          flexDirection="row"
          justifyContent="center"
          alignContent="center"
        >
          <Heading ml="2" mb="5">
            Check out my socials!
          </Heading>
          <Flex maxW="100%" gap="8">
            <Link href="https://www.linkedin.com/in/wlmzhou/">
              <FramerMagnetic
                fontSize="8xl"
                color="#0077B5"
                as={AiFillLinkedin}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/wlmzhou/">
              <FramerMagnetic
                fontSize="8xl"
                color="#E15C39"
                as={AiFillGithub}
              />
            </Link>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default About;
