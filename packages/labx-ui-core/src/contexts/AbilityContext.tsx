import React, { createContext } from 'react'

import { Ability } from '@casl/ability'
import { createContextualCan, useAbility as useCaslAbility } from '@casl/react'

type AbilityProviderProps = {
  children: React.ReactNode
}

const ability = new Ability()

const AbilityContext = createContext(ability)

export function AbilityProvider({ children }: AbilityProviderProps) {
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  )
}

export const useAbility = () => useCaslAbility(AbilityContext)

export const Can = createContextualCan(AbilityContext.Consumer)
