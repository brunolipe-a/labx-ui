import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
// import { FilterValue, useAsyncDebounce } from 'react-table'

import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputGroupProps,
} from '@chakra-ui/react'

type SearchInputProps = {
  initialValue: string
  setGlobalFilter: (_filterValue: any) => void
} & InputGroupProps

export function SearchInput({
  initialValue,
  setGlobalFilter,
  ...rest
}: SearchInputProps) {
  const [value, setValue] = useState(initialValue)

  // const onChange = useAsyncDebounce((value: string) => {
  //   setGlobalFilter(value || undefined)
  // }, 400)

  return (
    <InputGroup size="sm" {...rest}>
      <InputLeftElement pointerEvents="none">
        <Icon as={FiSearch} color="gray.300" />
      </InputLeftElement>
      <Input
        placeholder="Pesquisar por..."
        value={value || ''}
        borderRadius="base"
        // onChange={({ target: { value } }) => {
        //   setValue(value)
        //   onChange(value)
        // }}
      />
    </InputGroup>
  )
}
