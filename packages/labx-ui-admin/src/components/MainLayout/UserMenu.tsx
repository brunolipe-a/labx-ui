import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FiUser, FiSun, FiMoon } from 'react-icons/fi'

import {
  Avatar,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuProps,
  Stack,
  Text,
  useColorMode,
  useColorModeValue as mode,
} from '@chakra-ui/react'

import { Link } from '../Link'
import { useAuth } from '@labx-ui/core'

type UserMenuProps = {
  reverseDir?: boolean
} & MenuProps

function UserMenuComponent({
  reverseDir = false,
  ...rest
}: Omit<UserMenuProps, 'children'>) {
  const { signOut, user } = useAuth()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Menu placement={reverseDir ? 'bottom-start' : 'bottom-end'} {...rest}>
      <MenuButton
        fontSize="sm"
        cursor="pointer"
        color={mode('gray.700', 'whiteAlpha.900')}
        display="flex"
      >
        <Stack
          align="center"
          direction={reverseDir ? 'row-reverse' : 'row'}
          justify={reverseDir ? 'flex-end' : 'flex-start'}
          maxW="100%"
          fontWeight="semibold"
        >
          <Text lineHeight="base" noOfLines={1}>
            {user.name}
          </Text>
          <Avatar bg="brand.500" color="white" name={user.name} size="sm" />
        </Stack>
      </MenuButton>
      <MenuList zIndex="docked" color={mode('gray.600', 'whiteAlpha.900')}>
        <Link href="/profile" textDecoration="none">
          <MenuItem icon={<FiUser size={16} />}>Seu perfil</MenuItem>
        </Link>
        <MenuItem
          icon={
            colorMode === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />
          }
          closeOnSelect={false}
          onClick={toggleColorMode}
        >
          Tema {colorMode === 'light' ? 'escuro' : 'claro'}
        </MenuItem>
        <MenuItem icon={<BiLogOut size={16} />} onClick={signOut}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export const UserMenu = React.memo(UserMenuComponent)
