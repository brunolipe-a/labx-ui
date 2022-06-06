import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react'

import { UserMenu } from '../UserMenu'

import { NavFooter } from './NavFooter'
import { NavMain } from './NavMain'
import { useLayout } from '@labx-ui/core'
import { useSidebarDrawer } from '../../../context/SidebarDrawerContext'

function SideBarComponent() {
  const { Logo } = useLayout()
  const isDrawerSideBar = useBreakpointValue({ base: true, lg: false })
  const { isOpen, onClose } = useSidebarDrawer()

  return (
    <>
      <Flex
        display={isDrawerSideBar ? 'none' : 'flex'}
        as="aside"
        direction="column"
        p={4}
        w={64}
        bg={mode('white', 'gray.900')}
        fontSize="sm"
        overflow="auto"
        color={mode('gray.700', 'whiteAlpha.900')}
        borderRightWidth={mode('1px', 0)}
      >
        <Logo />
        <NavMain pt={8} />
        <NavFooter mt={8} />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            bg={mode('white', 'gray.900')}
            color={mode('gray.700', 'whiteAlpha.900')}
          >
            <DrawerHeader
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              Navegação
              <DrawerCloseButton position="unset" />
            </DrawerHeader>
            <DrawerBody as={Flex} direction="column" p={6}>
              <UserMenu reverseDir />
              <NavMain pt={6} />
              <NavFooter mt={6} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export const SideBar = React.memo(SideBarComponent)
