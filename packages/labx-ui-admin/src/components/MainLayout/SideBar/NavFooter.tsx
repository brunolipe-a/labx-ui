import React from 'react'

import { StackProps } from '@chakra-ui/react'
import { useLayout } from '@labx-ui/core'

import { NavItems } from './NavItems'

function NavFooterComponent({ ...rest }: StackProps) {
  const { menuFooter } = useLayout()

  return <NavItems menu={menuFooter} {...rest} />
}

export const NavFooter = React.memo(NavFooterComponent)
