import React, { memo } from 'react'

import { Text, Box, BoxProps } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useLayout } from '@labx-ui/core'

interface LogoProps extends BoxProps {
  canRedirect?: boolean
}

function LogoComponent({ canRedirect = true, fontSize, ...rest }: LogoProps) {
  const { push } = useRouter()
  const { dashboardUrl, title } = useLayout()

  function handleRedirect() {
    if (canRedirect) {
      push(dashboardUrl)
    }
  }

  return (
    <Box
      cursor="pointer"
      onClick={handleRedirect}
      px={2}
      userSelect="none"
      {...rest}
    >
      <Text
        fontSize={fontSize || ['2xl', '3xl', '4xl']}
        fontWeight="bold"
        letterSpacing="tight"
      >
        {title}
        <Text as="span" ml={1} color="brand.500">
          .
        </Text>
      </Text>
    </Box>
  )
}

export const Logo = memo(LogoComponent)
