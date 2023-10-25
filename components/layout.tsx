import { Box } from "@chakra-ui/react";
import { ReactNode, useState, useEffect } from "react";
import Header from "../components/header";
import StartAnimation from "../components/animation";
import Cat from "../components/cat";

interface LayoutProps {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: LayoutProps) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer <= 11) {
        setTimer(timer + 1);
        console.log(timer);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    const onClick = () => {
      if (timer > 4 && timer < 11) {
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
        {timer < 11 ? (
          <Box>
            <StartAnimation time={timer} />
            <Cat />
          </Box>
        ) : (
          <Box>
            <Header />
            <Box as="main">{children}</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
