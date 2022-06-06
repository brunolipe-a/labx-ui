import React from 'react'

import { BoxProps, Box, useColorModeValue as mode } from '@chakra-ui/react'

export function Card({ children, ...rest }: BoxProps) {
  return (
    <Box
      bg={mode('white', 'transparent')}
      shadow={mode('base', 'none')}
      borderRadius="md"
      p={mode([3, 5], [1, 2])}
      {...rest}
    >
      {children}
    </Box>
  )
}
