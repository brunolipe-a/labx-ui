import React, { useEffect, useContext, createContext } from 'react'

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

interface SidebarDrawerProps {
  children: React.ReactNode
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

export function SidebarDrawerProvider({ children }: SidebarDrawerProps) {
  const disclosure = useDisclosure()

  useEffect(() => {
    disclosure.onClose()
  }, [disclosure])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
