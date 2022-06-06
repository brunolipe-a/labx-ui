import React from 'react'

import { Stack, StackProps } from '@chakra-ui/react'
import { Can, NavGroupItems } from '@labx-ui/core'

import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'

interface NavItemsProps extends StackProps {
  menu?: NavGroupItems[]
}

function NavItemsComponent({ menu, ...rest }: NavItemsProps) {
  return (
    <Stack spacing={8} {...rest}>
      {menu?.map(({ items, title }, index) => (
        <NavGroup key={index} title={title}>
          {items.map(({ icon: Icon, text, url, can }) => (
            <Can
              key={url}
              passThrough={!can}
              I={can?.action || ''}
              an={can?.subject || ''}
            >
              <NavLink to={url} icon={<Icon />}>
                {text}
              </NavLink>
            </Can>
          ))}
        </NavGroup>
      ))}
    </Stack>
  )
}

export const NavItems = React.memo(NavItemsComponent)
