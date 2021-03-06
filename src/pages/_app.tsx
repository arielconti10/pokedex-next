import { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

import {
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'

import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Pokedéx</title>
        <link rel="shortcut icon" href="/img/pokedex-512.png" />
        <link rel="apple-touch-icon" href="/img/pokedex-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Pokedéx!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8515008560433715"
          crossOrigin="anonymous"
        />
      </Head>

      <DefaultSeo {...SEO} />

      <NextNProgress
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <Preflight />
            <GlobalStyles />

            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
