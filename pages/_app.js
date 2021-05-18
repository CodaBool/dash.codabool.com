import Head from 'next/head'
import Container from 'react-bootstrap/Container'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NUMBER_OF_IMAGES = 23

export default function App({ Component, pageProps }) {
  return (
    <div className="page-background" style={{
      backgroundColor: 'grey', 
      backgroundImage: `url(/image/${Math.floor(Math.random() * Math.floor(NUMBER_OF_IMAGES)) + 1}.jpg)`
    }}>
      <Head>
        <title>CodaDash</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Dashboard for codabool" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" href="/image/favicon-32x32.gif" />
        <link rel="icon" href="/image/favicon-32x32.gif" />
      </Head>
      <main>
        <Container fill="md">
          <Component {...pageProps} />
        </Container>
      </main>
    </div>
  )
}