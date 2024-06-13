// pages/_app.js

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>William Zhou</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
