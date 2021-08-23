import '../styles/globals.scss'
import '../styles/nav.scss'
import '../styles/about.scss'
import '../styles/projects.scss'

import Head from "next/head";

// layout
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#230958" />
        <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@bf7775b/css/all.css" rel="stylesheet" type="text/css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
