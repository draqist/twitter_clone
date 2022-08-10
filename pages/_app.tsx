// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import Theme from '../theme'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <RecoilRoot>
      <ChakraProvider theme={Theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp