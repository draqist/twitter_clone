// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Theme from '../theme'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp