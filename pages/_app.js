import '../styles/globals.scss'
import '../styles/nav.scss'
import '../styles/about.scss'
import '../styles/projects.scss'

// layout
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
