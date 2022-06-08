import React from 'react'

import { Text, HStack, Select } from '@chakra-ui/react'

type SelectPageSizeProps = {
  setPageSize(_pageSize: number): void
  actualPageSize: number
  pageSizes: number[]
}

export function SelectPageSize({
  actualPageSize,
  pageSizes,
  setPageSize,
}: SelectPageSizeProps) {
  return (
    <HStack spacing={2}>
      <Select
        size="sm"
        width={20}
        value={actualPageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {pageSizes.map(pageSize => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </Select>
      <Text display={{ base: 'none', md: 'block' }}>resultados por página</Text>
    </HStack>
  )
}
