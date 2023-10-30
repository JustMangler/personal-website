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
    ]);
    animControls.current.pause();
  }, []);
  return (
    <Box>
      <ChakraBox className="header" ref={ref}>
        <Header />
      </ChakraBox>

      <Flex
        alignItems="center"
        width="full"
        align={{ base: "left", md: "center" }}
        position="fixed"
        top="0"
        className="headername"
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
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
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
          <Text>Scroll down to learn more</Text>
          <Icon as={BsChevronDown} />
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
        h="1000vh"
        ref={startref}
      >
        <Grid
          w="100vw"
          gridTemplateColumns={"2fr 1fr"}
          gap={6}
          position="fixed"
          bottom="40vh"
        >
          <GridItem w="100%" ml="70" className="name">
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
            className="socials"
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
