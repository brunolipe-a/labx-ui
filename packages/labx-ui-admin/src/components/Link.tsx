import React from 'react'

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = NextLinkProps & ChakraLinkProps

export function Link({ children, href, locale, prefetch, ...rest }: LinkProps) {
  return (
    <NextLink passHref href={href} locale={locale} prefetch={prefetch}>
      <ChakraLink _hover={{ textDecor: 'none' }} {...rest}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}
