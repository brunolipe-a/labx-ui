import { AuthProps } from '@labx-ui/core'

export const auth: AuthProps = {
  TOKEN_KEY: '@admin-labx:token',
  authenticatorCallback: async data => {
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
