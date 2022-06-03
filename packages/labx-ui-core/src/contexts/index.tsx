import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { Dict } from '@chakra-ui/utils'

import { AbilityProvider } from './AbilityContext'
// import { AuthProvider } from './AuthContext'
import { LayoutProvider } from './LayoutContext'

import { LayoutConfig } from '../types/layout'

interface LabxProviderProps {
  children: React.ReactNode
  theme: Dict
  layout: LayoutConfig
}

export function LabxProvider({ children, layout, theme }: LabxProviderProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AbilityProvider>
        <LayoutProvider config={layout}>{children}</LayoutProvider>
      </AbilityProvider>
    </ChakraProvider>
  )
}
