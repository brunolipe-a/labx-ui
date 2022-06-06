import React from 'react'

import { Center, useColorModeValue, Spinner } from '@chakra-ui/react'
import { useLayout } from '@labx-ui/core'

export function LoadingOverlay() {
  const { Logo } = useLayout()

  return (
    <Center
      position="fixed"
      w="full"
      h="full"
      bg={useColorModeValue('gray.50', 'gray.900')}
      zIndex="overlay"
    >
      <Logo canRedirect={false} />
      <Spinner color="brand.500" />
    </Center>
  )
}
