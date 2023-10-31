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
  chakra,
  shouldForwardProp,
  keyframes,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  isValidMotionProp,
  useScroll,
  useTransform,
  useInView,
  AnimationPlaybackControls,
  animate,
} from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IconType } from "react-icons";
import Typed from "typed.js";
import Header from "./header";
import Projects from "./projects";

interface FramerMagneticTypes {
  fontSize: string;
  color: string;
  as: IconType;
}

const animationKeyframes = keyframes`
  0% { transform: translate(0, 0); opacity: 1}
  100% { transform: translate(10rem, 0); opacity: 1}
`;

const animation = `${animationKeyframes} 4s ease-in-out forwards`;

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

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
    <ChakraBox
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      // @ts-ignore
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Icon
        fontSize={fontSize}
        _hover={{
          color: color,
        }}
        color={"black"}
        as={as}
      />
    </ChakraBox>
  );
};

const Hero = () => {
  // Reference to Typing Animation
  const [text, setText] = useState("socials");
  const [color, setColor] = useState("black");
  const el = useRef(null);
  const startref = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref);

  let { scrollYProgress } = useScroll({
    target: startref,
    offset: ["start start", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Backend Engineer",
        "Ambitious Thinker",
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

  const animControls = useRef<AnimationPlaybackControls>();
  useScroll().scrollYProgress.on("change", (yProgress) => {
    if (!animControls.current) return;

    animControls.current.time = yProgress * animControls.current.duration * 2;
  });

  useEffect(() => {
    animControls.current = animate([
      [".header", { opacity: 1 }, { duration: 0 }],
      [".headername", { opacity: 0 }, { duration: 0 }],
      [".name", { opacity: 1 }, { duration: 0 }],
      [".socials", { transform: "translate(0,0)" }, { duration: 0 }],
      [".name", { opacity: 0 }, { duration: 50, at: 0.01 }],
      [".headername", { opacity: 1 }, { duration: 50, at: 30.01 }],
      [".header", { opacity: 0 }, { duration: 50, at: 0.01 }],
      [
        ".socials",
        { transform: "translate(-55vw,0)" },
        { ease: "linear", duration: 50, at: 0.01 },
      ],
      [
        ".projects",
        { opacity: 1.1, transform: "translate(0,-100vh)" },
        { ease: "linear", duration: 50, at: 30 },
      ],
      [".rr", { top: 0 }, { duration: 80, at: 0 }],
      [".midrock", { top: -5 }, { duration: 80, at: 0 }],
      [".backmt", { top: -10 }, { duration: 80, at: 0 }],
      [".closerock", { top: 10 }, { duration: 80, at: 0 }],
    ]);
    animControls.current.pause();
  }, []);
  return (
    <Box>
      <Box height="100vh" userSelect="none">
        <Image
          w="100%"
          h="100vh"
          position="fixed"
          src="layer0.jpeg"
          alt="background layer"
          zIndex="-3"
          className="bg"
        ></Image>
        <Image
          w="100%"
          h="100vh"
          top="0"
          position="fixed"
          src="layer1.png"
          alt="back mountains"
          zIndex="-3"
          className="backmt"
        ></Image>
        <Image
          w="100%"
          h="100vh"
          top="0"
          position="fixed"
          src="middlerock.png"
          alt="middle rock"
          zIndex="-3"
          className="midrock"
        ></Image>
        <Image
          w="100%"
          h="100vh"
          top="3"
          position="fixed"
          src="layer2.png"
          alt="back right rock"
          zIndex="-3"
          className="rr"
        ></Image>
        <Image
          w="100%"
          h="100vh"
          position="fixed"
          src="layer3.png"
          alt="close rock"
          zIndex="-3"
          className="closerock"
        ></Image>
      </Box>
      <ChakraBox className="header" ref={ref} zIndex="5">
        <Header />
      </ChakraBox>

      <Flex
        alignItems="center"
        width="full"
        align={{ base: "left", md: "center" }}
        position="fixed"
        top="0"
        className="headername"
        zIndex="-1"
      >
        <Flex align="center" zIndex="-3">
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
                position: "absolute",
                bottom: 1,
                left: 0,
              }}
            >
              William Zhou
            </Text>
          </Heading>
          <Image h="100%" src="cat.gif" alt="cat gif" />
        </Flex>
      </Flex>

      <Box
        className="header"
        position="fixed"
        bottom="10"
        w="100vw"
        alignContent="center"
        justifyContent="center"
      >
        <Flex
          align="center"
          justify="center"
          fontSize="20"
          flexDirection="column"
        >
          <Text userSelect="none">Scroll down to learn more</Text>
          <Icon userSelect="none" as={BsChevronDown} />
        </Flex>
      </Box>

      <Box
        position="fixed"
        top="90vh"
        right="8vw"
        zIndex="3"
        opacity="0"
        className="projects"
      >
        <Projects />
      </Box>

      <Flex
        flexGrow="true"
        justify="start"
        align="center"
        h="600vh"
        ref={startref}
      >
        <Grid
          w="100vw"
          gridTemplateColumns={"1.3fr 0.7fr 1fr"}
          gap={6}
          position="fixed"
          bottom="40vh"
        >
          <GridItem
            ml="70"
            className="name"
            p="6"
            rounded="3xl"
            backdropFilter="blur(10px)"
          >
            <Box w="100%">
              <Heading>My name is</Heading>
              <Heading fontSize="8xl">William Zhou</Heading>
              <Heading>
                <Text as="span" ref={el}></Text>
              </Heading>
            </Box>
          </GridItem>
          <GridItem></GridItem>
          <GridItem
            w="500px"
            mt="5"
            flexDirection="row"
            justifyContent="center"
            alignContent="center"
            className="socials"
            p="6"
            backdropFilter="blur(10px)"
            rounded="3xl"
          >
            <Flex justify="center">
              <Heading ml="2" mb="5">
                Check out my&nbsp;
                <Text color={color} as="span">
                  {text}
                </Text>
                !
              </Heading>
            </Flex>

            <Flex maxW="100%" gap="8" justify="center">
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
                <Link href="mailto:william.zhou@duke.edu">
                  <FramerMagnetic fontSize="8xl" color="red" as={FiMail} />
                </Link>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Hero;
