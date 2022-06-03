import React, { useState, useContext, createContext } from 'react'

import { LayoutConfig } from '../types/layout'

interface LayoutProps {
  children: React.ReactNode
  config: LayoutConfig
}

const LayoutContext = createContext({} as LayoutConfig)

export function LayoutProvider({ children, config }: LayoutProps) {
  const [layout] = useState(config)

  return (
    <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext)
