import { ThemeProvider } from 'next-themes'

import { Layout } from "../components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
  );
}

export default MyApp;
