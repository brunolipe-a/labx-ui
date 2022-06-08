import React from 'react'

import { BiChevronRight } from 'react-icons/bi'

import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  BreadcrumbLinkProps,
  Wrap,
  WrapItem,
  useColorModeValue as mode,
} from '@chakra-ui/react'

export type LinkBreadcrumb = {
  text: string
  url: string
}

import { Link } from '../Link'

type HeaderPageProps = {
  title: string
  links?: LinkBreadcrumb[]
}

function MyBreadcrumbLink({ children, ...rest }: BreadcrumbLinkProps) {
  return (
    <BreadcrumbLink
      as={Link}
      color={mode('brand.500', 'brand.300')}
      userSelect="none"
      _hover={{ color: mode('brand.700', 'brand.500'), textDecor: 'none' }}
      {...rest}
    >
      {children}
    </BreadcrumbLink>
  )
}

export function HeaderPage({ title, links = [] }: HeaderPageProps) {
  return (
    <Wrap
      justify="space-between"
      align="baseline"
      spacing={{ base: 2, lg: 0 }}
      px={[1, 2]}
      py={[4, 6]}
    >
      <WrapItem>
        <Heading
          as="h1"
          size="md"
          fontWeight="semibold"
          color={mode('gray.500', 'gray.300')}
        >
          {title}
        </Heading>
      </WrapItem>
      <WrapItem display={{ base: 'none', sm: 'list-item' }}>
        <Breadcrumb
          separator={
            <Icon as={BiChevronRight} color={mode('gray.400', 'gray.500')} />
          }
          fontSize="sm"
        >
          {links.map(({ text, url }, index) => (
            <BreadcrumbItem key={index}>
              <MyBreadcrumbLink href={url || '#'}>{text}</MyBreadcrumbLink>
            </BreadcrumbItem>
          ))}

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              _hover={{ cursor: 'not-allowed' }}
              color={mode('gray.400', 'gray.500')}
              userSelect="none"
              href="#"
            >
              {title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </WrapItem>
    </Wrap>
  )
}
