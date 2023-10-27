import { Heading, Box, Button } from "@chakra-ui/react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Cat from "../components/cat";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
