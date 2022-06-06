import React from 'react'

import { StackProps } from '@chakra-ui/react'
import { useLayout } from '@labx-ui/core'

import { NavItems } from './NavItems'

function NavMainComponent({ ...rest }: StackProps) {
  const { menu } = useLayout()

  return <NavItems menu={menu} flex={1} {...rest} />
}

export const NavMain = React.memo(NavMainComponent)
