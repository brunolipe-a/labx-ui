import React from 'react'

import {
  BoxProps,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { useLayout } from '@labx-ui/core'
import Head from 'next/head'
import { LoadingOverlay } from '../components'
import { useGuestLoading } from '../hooks/useLoading'

interface AuthLayoutProps extends BoxProps {
  pageTitle?: string
  subtitle?: string
}

export function AuthLayout({
  children,
  pageTitle,
  subtitle,
  ...rest
}: AuthLayoutProps) {
  const { Logo, title, titleSeparator = '|', dashboardUrl } = useLayout()

  const bg = useColorModeValue('white', 'transparent')

  const copyrightColor = useColorModeValue('gray.400', 'gray.600')

  if (!Logo) {
    throw new Error('You must provide a Logo component in your layout')
  }

  const shouldShowLoading = useGuestLoading({ redirectURL: dashboardUrl })

  if (shouldShowLoading) {
    return <LoadingOverlay />
  }

  return (
    <>
      <Head>
        <title>
          {title} {pageTitle && titleSeparator} {pageTitle}
        </title>
      </Head>
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

            {subtitle && (
              <Text mt={5} color="gray.500" fontSize="lg">
                {subtitle}
              </Text>
            )}

            <Divider my={8} borderBottomWidth="2px" />
            {children}
            <Text
              fontWeight="semibold"
              fontSize="xs"
              mt="auto"
              color={copyrightColor}
            >
              © {new Date().getFullYear()} Todos os Direitos Reservados
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
