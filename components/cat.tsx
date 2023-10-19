import React from "react";
import { Box, Image, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: translate(0,0) }
  100% { transform: translate(100vw, 0) }
`;

const animation = `${animationKeyframes} 7s ease-in-out forwards`;

const CatSprite = ({ gif }: { gif: string }) => {
  return <Image src={gif} alt="Cat Sprite" />;
};

const Cat = () => {
  // Reference to Typing Animation
  return (
    <Box
      as={motion.div}
      animation={animation}
      position="sticky"
      zIndex={21}
      left="0"
      bottom="0"
    >
      <CatSprite gif="catrunning.gif" />
    </Box>
  );
};

export default Cat;
