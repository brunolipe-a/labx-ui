import React from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'

type TableCountProps = {
  pageCount: number
  pageIndex: number
}

function getCount(max: number, value: number) {
  return value > max ? max : value
}
export function TableCount({ pageIndex, pageCount }: TableCountProps) {
  return (
    <Text
      color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      fontSize="xs"
      // display={{ base: 'none', md: 'block' }}
    >
      Página {pageIndex + 1} de {pageCount}
    </Text>
  )
}
