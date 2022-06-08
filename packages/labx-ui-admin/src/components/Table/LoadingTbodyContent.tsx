import React from 'react'

import { Td, Tr, SkeletonText } from '@chakra-ui/react'

type LoadingTBodyContentProps = {
  numOfRows?: number
  numOfColumns: number
}

export function LoadingTbodyContent({
  numOfColumns,
  numOfRows = 10,
}: LoadingTBodyContentProps) {
  return (
    <>
      {[...Array(numOfRows)].map((_v, i) => (
        <Tr key={i}>
          {[...Array(numOfColumns)].map((_v, index) => (
            <Td key={index} textAlign="center">
              <SkeletonText noOfLines={2} h={5} />
            </Td>
          ))}
        </Tr>
      ))}
    </>
  )
}
