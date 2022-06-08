import React from 'react'

import { Box, BoxProps, Flex } from '@chakra-ui/react'

import Head from 'next/head'

import { useLayout } from '@labx-ui/core'

import { Header } from '../components/MainLayout/Header'
import { SideBar } from '../components/MainLayout/SideBar'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { LoadingOverlay } from '../components'
import { useAuthLoading } from '../hooks/useLoading'

interface MainLayoutProps extends BoxProps {
  children: React.ReactNode
  pageTitle?: string
}

export function MainLayout({ children, pageTitle, ...rest }: MainLayoutProps) {
  const { title, titleSeparator } = useLayout()
  const { loginUrl } = useLayout()

  const shouldShowLoading = useAuthLoading({ redirectURL: loginUrl })

  if (shouldShowLoading) {
    return <LoadingOverlay />
  }

  return (
    <SidebarDrawerProvider>
      <Head>
        <title>
          {title}
          {pageTitle && titleSeparator}
          {pageTitle}
        </title>
      </Head>
      <Flex
        h="100vh"
        w="100vw"
        overflow="hidden"
        pos="relative"
        direction="row-reverse"
      >
        <Flex flex={1} overflowX="auto" direction="column">
          <Header />
          <Box flex={1} px={[4, 6]} pb={[4, 6]} overflowY="auto" {...rest}>
            {children}
          </Box>
        </Flex>
        <SideBar />
      </Flex>
    </SidebarDrawerProvider>
  )
}
