import React from "react";
import { Box, Image, keyframes, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: translate(0,0); opacity: 1}
  70% { transform: translate(79vw, 0); opacity: 1}
  100% { transform: translate(97vw, 0); opacity: 0}
`;

const animation = `${animationKeyframes} 10s ease-in-out forwards`;

const CatSprite = ({ gif }: { gif: string }) => {
  return <Image src={gif} alt="Cat Sprite" />;
};

const Cat = () => {
  // Reference to Typing Animation
  return (
    <Flex w="100vw" position="absolute" left="0" bottom="0" zIndex="21">
      <Box as={motion.div} animation={animation} w="3vw">
        <CatSprite gif="catrunning.gif" />
      </Box>
    </Flex>
  );
};

export default Cat;
