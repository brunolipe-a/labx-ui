import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from 'react'

import { useToast, UseToastOptions } from '@chakra-ui/react'

import Router from 'next/router'

import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { AuthUser } from '../types/auth'

// import { setInterceptor } from '../utils/auth'

import { useAbility } from './AbilityContext'
import { useLayout } from './LayoutContext'

export interface AuthProps {
  authenticatorCallback: (data: SignInProps) => Promise<{ token: string }>
  getUserCallback: () => Promise<AuthUser>
  TOKEN_KEY: string
}

interface AuthProviderProps {
  children: React.ReactNode
  auth: AuthProps
}

type AuthContextData = {
  isAuthenticated: boolean
  isAuthLoading: boolean
  user: AuthUser
  signIn: (props: SignInProps) => Promise<void>
  signOut(): Promise<void>
}

type SignInProps = {
  email: string
  password: string
}

const AuthContext = createContext({} as AuthContextData)

export function LabxAuthProvider({ children, auth }: AuthProviderProps) {
  const toast = useToast()
  const ability = useAbility()
  const { loginUrl } = useLayout()

  const [user, setUser] = useState({} as AuthUser)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  const {
    TOKEN_KEY = '@labx:token',
    authenticatorCallback,
    getUserCallback,
  } = auth

  const signOut = useCallback(
    async (toastOptions?: UseToastOptions) => {
      setIsAuthenticated(false)
      setIsAuthLoading(false)

      setUser({} as AuthUser)

      Router.push(loginUrl)

      destroyCookie(undefined, TOKEN_KEY)

      toast({
        title: 'Deslogado',
        description: 'Você foi deslogado com sucesso.',
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
        ...toastOptions,
      })
    },
    [loginUrl, toast, TOKEN_KEY]
  )

  const getUserData = useCallback(async () => {
    try {
      const data = await getUserCallback()

      setUser(data)
      ability.update(data.permissions)
      setIsAuthenticated(true)
    } catch (err) {
      signOut({
        title: 'Não foi possível logar',
        description: 'Contate um administrador para mais informações.',
        status: 'warning',
      })
    }
  }, [signOut, ability, getUserCallback])

  async function signIn(credentials: SignInProps) {
    try {
      const { token } = await authenticatorCallback(credentials)

      setCookie(undefined, TOKEN_KEY, token, {
        maxAge: 60 * 60 * 24, // 1 day,
        path: '/',
        sameSite: true
      })

      await getUserData()
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    // setInterceptor({ onLogout: () => setIsAuthenticated(false) })

    async function initiateAuth() {
      const token = parseCookies()[TOKEN_KEY]

      if (token) {
        await getUserData()
      }

      setTimeout(() => {
        setIsAuthLoading(false)
      }, 500)
    }

    initiateAuth()
  }, [TOKEN_KEY, getUserData])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthLoading,
        isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
