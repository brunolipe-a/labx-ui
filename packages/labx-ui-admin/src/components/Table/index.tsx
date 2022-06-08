import React from 'react'

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  HStack,
  ButtonGroup,
  useColorModeValue as mode,
  Text,
} from '@chakra-ui/react'

import { TableInstance } from '@tanstack/react-table'

import { LoadingTbodyContent } from './LoadingTbodyContent'
import { PaginationButton } from './PaginationButton'
import { SelectPageSize } from './SelectPageSize'

interface TableProps {
  instance: TableInstance<any>
  isLoading?: boolean
}

export function Table({ instance, isLoading }: TableProps) {
  return (
    <>
      <Box
        overflowX="auto"
        maxH="lg"
        borderWidth="1px"
        borderRadius="base"
        mb={4}
        borderColor={mode('gray.200', 'whiteAlpha.300')}
      >
        <ChakraTable minW="2xl" fontSize={['sm', 'md']}>
          <Thead>
            {instance.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    userSelect="none"
                    bg={mode('gray.50', 'gray.800')}
                    position="sticky"
                    zIndex={1}
                    top={0}
                    px={[4, 5]}
                    py={[2, 3]}
                  >
                    {header.isPlaceholder ? null : header.renderHeader()}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {instance.getRowModel().rows.map(row => (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td
                    key={cell.id}
                    px={[4, 5]}
                    py={[2, 3]}
                    borderColor="inherit"
                    borderBottom={'0'}
                  >
                    {cell.renderCell()}
                  </Td>
                ))}
              </Tr>
            ))}
            {instance.getRowModel().rows.length === 0 &&
              (isLoading ? (
                <LoadingTbodyContent
                  numOfColumns={instance.getAllColumns().length}
                  numOfRows={instance.getState().pagination.pageSize}
                />
              ) : (
                <Tr>
                  <Td
                    colSpan={instance.getAllColumns().length}
                    textAlign="center"
                  >
                    Sem dados...
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </ChakraTable>
      </Box>

      <Flex justify="space-between" align="center">
        <SelectPageSize
          setPageSize={instance.setPageSize}
          actualPageSize={instance.getState().pagination.pageSize}
          pageSizes={[10, 25, 50, 100]}
        />
        <HStack spacing={4}>
          <Text color={mode('gray.600', 'whiteAlpha.700')} fontSize="xs">
            Página {instance.getState().pagination.pageIndex + 1} de{' '}
            {instance.getPageCount()}
          </Text>
          <ButtonGroup variant="outline" size="sm">
            <PaginationButton
              onClick={instance.previousPage}
              disabled={!instance.getCanPreviousPage()}
            />
            <PaginationButton
              onClick={instance.nextPage}
              disabled={!instance.getCanNextPage()}
              isNext
            />
          </ButtonGroup>
        </HStack>
      </Flex>
    </>
  )
}
