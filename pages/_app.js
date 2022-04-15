import React from "react";
import Head from 'next/head'
// import Headers from "./pages"
import '../styles.css'


// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
//   }



function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
      />
      {/* <link rel="stylesheet" href="/static/css/styles.css" /> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-0FD3WEHDCR"></script>
      {/* <script dangerouslySetInnerHTML={this.setGoogleTags()} /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp


// const App = () => {

//     return (
//         <>
//         {/* <Headers /> */}
//         </>
//     )
// }

// export default App
