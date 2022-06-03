import React from 'react'

import {
  BoxProps,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { useLayout } from '@labx-ui/core'

interface MainLayoutProps extends BoxProps {
  pageTitle?: string
}

export function AuthLayout({ children, pageTitle, ...rest }: MainLayoutProps) {
  const { Logo } = useLayout()

  const bg = useColorModeValue('white', 'transparent')

  const copyrightColor = useColorModeValue('gray.400', 'gray.600')

  if (!Logo) {
    throw new Error('You must provide a Logo component in your layout')
  }

  return (
    <Flex
      as="main"
      minH="100vh"
      overflow="hidden"
      pos="relative"
      bg={bg}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Flex
        as="aside"
        overflowY="auto"
        flex="1"
        px={10}
        py={16}
        justify="center"
      >
        <Flex maxW="lg" w="full" direction="column" {...rest}>
          <Logo
            canRedirect={false}
            fontSize="2xl"
            mb={{ base: '10', md: '12' }}
            px={0}
          />
          <Heading size="xl" fontWeight="extrabold">
            {pageTitle}
          </Heading>
          {children}
          <Text
            fontWeight="semibold"
            fontSize="xs"
            mt="auto"
            color={copyrightColor}
          >
            © {new Date().getFullYear()} SagaTech Brasil Todos os Direitos
            Reservados
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
