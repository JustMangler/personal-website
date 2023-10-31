"use client";

import Image from "canvas";
import { Box, keyframes } from "@chakra-ui/react";
import { ReactNode, useState, useEffect } from "react";
import Header from "../components/header";
import StartAnimation from "../components/animation";
import Cat from "../components/cat";
import { motion } from "framer-motion";

interface LayoutProps {
  children?: ReactNode;
  // any props that come into the component
}

const animationKeyframes = keyframes`
  0% { opacity: 0}
  100% { opacity: 1d}
`;

const animation = `${animationKeyframes} 1s ease-in-out`;

export default function Layout({ children }: LayoutProps) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer <= 8) {
        setTimer(timer + 1);
        console.log(timer);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    const onClick = () => {
      if (timer > 2 && timer < 8) {
        console.log(timer);
        setTimer(11);
      }
      console.log("window clicked");
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [timer]);

  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Box>
        {timer < 8 ? (
          <Box>
            <StartAnimation time={timer} />
            <Cat />
          </Box>
        ) : (
          <Box as={motion.div} animation={animation}>
            <Box as="main">{children}</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
