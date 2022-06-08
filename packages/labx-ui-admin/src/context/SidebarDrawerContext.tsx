import React, { useEffect, useContext, createContext } from 'react'

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

interface SidebarDrawerProps {
  children: React.ReactNode
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

export function SidebarDrawerProvider({ children }: SidebarDrawerProps) {
  const { onClose, ...rest } = useDisclosure()

  useEffect(() => {
    onClose()
  }, [onClose])

  return (
    <SidebarDrawerContext.Provider value={{ onClose, ...rest }}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
