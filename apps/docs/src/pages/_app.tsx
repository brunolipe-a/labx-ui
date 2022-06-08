import type { AppProps } from 'next/app'
import { LabxAuthProvider, LabxProvider } from '@labx-ui/core'

import { theme } from '@labx-ui/admin'

import { QueryClient, QueryClientProvider } from 'react-query'

import { Progress } from '../components/Progress'

import layout from '../config/layout'

import { auth } from '../services/auth'

const client = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LabxProvider
      theme={theme}
      layout={layout}
    >
    <QueryClientProvider client={client}>
      <LabxAuthProvider auth={auth}>
          <Progress />
          <Component {...pageProps} />
      </LabxAuthProvider>
      </QueryClientProvider>
    </LabxProvider>
  )
}
