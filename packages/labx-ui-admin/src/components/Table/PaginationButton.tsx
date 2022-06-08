import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {
  Button,
  ButtonProps,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'

type PaginationButtonProps = ButtonProps & {
  isNext?: boolean
}

export function PaginationButton({
  isNext = false,
  ...rest
}: PaginationButtonProps) {
  const isSm = useBreakpointValue({ base: true, md: false })

  if (isSm) {
    return (
      <IconButton
        userSelect="none"
        _focus={{ outline: 'none' }}
        aria-label={isNext ? 'Próxima página' : 'Página anterior'}
        icon={isNext ? <FiChevronRight /> : <FiChevronLeft />}
        {...rest}
      />
    )
  }

  return (
    <Button userSelect="none" _focus={{ outline: 'none' }} {...rest}>
      {isNext ? 'Próximo' : 'Anterior'}
    </Button>
  )
}
