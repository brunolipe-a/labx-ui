import type { AppProps } from 'next/app'
import {
  AuthProps,
  LabxAuthProvider,
  LabxProvider,
  LayoutConfig,
} from '@labx-ui/core'

import { Logo, theme } from '@labx-ui/admin'
import { Progress } from '../components/Progress'
import layout from '../config/layout'

const auth: AuthProps = {
  TOKEN_KEY: '@admin-labx:token',
  authenticatorCallback: async (data) => {
    return {
      token: 'token',
    }
  },
  getUserCallback: async () => {
    return {
      email: 'johndoe@example.com',
      id: '1',
      name: 'John Doe',
      permissions: [],
    }
  },
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LabxProvider
      theme={theme}
      layout={layout}
    >
      <LabxAuthProvider auth={auth}>
          <Progress />
          <Component {...pageProps} />
      </LabxAuthProvider>
    </LabxProvider>
  )
}
