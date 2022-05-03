import { 
  ChakraProvider,
  color,
  extendTheme,
} from '@chakra-ui/react'
import '../styles/globals.css'
import Head from 'next/head';

// import './theme.js'

function MyApp({ Component, pageProps }) {

  const theme = extendTheme({
    fonts: {
      Header: {
        baseStyle:{
          fontWeight:'bold',
          color: "#303030"
        }
      },
      body: 'Noto Sans KR, sans-serif',
      baseStyle:{
        letterSpacing: "-1px",
        fontWeight: 'light',
        color: "#303030"
      },
    },
  })
  
  return (

    <ChakraProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
        </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
