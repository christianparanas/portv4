import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"

import { Layout } from "../components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
    <Head>
        <title>Christian Paranas | Web Developer</title>
        <meta name="description" content="Hi, I am Christian Paranas a web development enthusiast that is armed with experience, learning, and passion." />
        <meta name='thumbnail' content='https://christianparanas.vercel.app/me.png' />
        <meta property='og:title' content='Christian Paranas | Web Developer' />
        <meta property='og:site_name' content='Christian Paranas' />
        <meta name='keywords' content='Web developer, Frontend developer, Backend developer' />
        <meta name='thumbnail' content='https://christianparanas.vercel.app/me.png' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content='Hi, I am Christian Paranas a web development enthusiast that is armed with experience, learning, and passion.' />
        <meta property='og:image' content='https://christianparanas.vercel.app/me.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Christian Paranas | Web Developer' />
        <meta name='twitter:description' content='Hi, I am Christian Paranas a web development enthusiast that is armed with experience, learning, and passion.' />
        <meta name='twitter:image' content='https://christianparanas.vercel.app/me.png' />
        <meta name='twitter:site' content='https://christianparanas.vercel.app' />
        <meta name='twitter:creator' content='@christianparams' />
        <meta name='author' content='Christian R. Paranas' />
        <meta name='robots' content='index,follow' />
        <link rel='canonical' href='https://christianparanas.vercel.app/' />
      </Head>

    <ThemeProvider defaultTheme="dark">
      <SessionProvider session={session}>
          <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
    </>
  );
}

export default MyApp;
