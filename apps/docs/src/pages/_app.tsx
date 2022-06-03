import type { AppProps } from 'next/app'
import {
  AuthProps,
  LabxAuthProvider,
  LabxProvider,
  LayoutConfig,
} from '@labx-ui/core'

import { Logo, PageShell, theme } from '@labx-ui/admin'
import { Progress } from '../components/Progress'

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
      layout={
        { title: 'Admin Template', Logo: Logo } as unknown as LayoutConfig
      }
    >
      <Progress />
      <LabxAuthProvider auth={auth}>
        <PageShell>
          <Component {...pageProps} />
        </PageShell>
      </LabxAuthProvider>
    </LabxProvider>
  )
}
