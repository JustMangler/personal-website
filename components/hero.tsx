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
  Text,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IconType } from "react-icons";
import Typed from "typed.js";

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

const Hero = () => {
  // Reference to Typing Animation
  const [text, setText] = useState("socials");
  const [color, setColor] = useState("black");
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Dev Ops Engineer",
        "Backend Engineer",
        "Curious Student",
      ],
      typeSpeed: 80,
      backDelay: 1300,
      backSpeed: 60,
      smartBackspace: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
    };
  }, []);

  const showText = (t: string, color: string) => {
    setText(t);
    setColor(color);
  };
  const hideText = () => {
    setText("socials");
    setColor("black");
  };

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
          <Heading>
            <Text as="span" ref={el}></Text>
          </Heading>
        </GridItem>
        <GridItem
          w="500px"
          flexDirection="row"
          justifyContent="center"
          alignContent="center"
        >
          <Heading ml="2" mb="5">
            Check out my{" "}
            <Text color={color} as="span">
              {text}
            </Text>
            !
          </Heading>
          <Flex maxW="100%" gap="8">
            <Box
              onMouseEnter={() => showText("LinkedIn", "#0077B5")}
              onMouseLeave={() => hideText()}
            >
              <Link href="https://www.linkedin.com/in/wlmzhou/">
                <FramerMagnetic
                  fontSize="8xl"
                  color="#0077B5"
                  as={AiFillLinkedin}
                />
              </Link>
            </Box>
            <Box
              onMouseEnter={() => showText("Github", "#E15C39")}
              onMouseLeave={() => hideText()}
            >
              <Link href="https://github.com/JustMangler">
                <FramerMagnetic
                  fontSize="8xl"
                  color="#E15C39"
                  as={AiFillGithub}
                />
              </Link>
            </Box>
            <Box
              onMouseEnter={() => showText("Email", "red")}
              onMouseLeave={() => hideText()}
            >
              <Link href="https://github.com/JustMangler">
                <FramerMagnetic fontSize="8xl" color="red" as={FiMail} />
              </Link>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
