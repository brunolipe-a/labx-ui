import React from 'react'
import { FieldError } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export interface InputProps extends ChakraInputProps {
  label?: string
  isRequired?: boolean
  disabled?: boolean
  defaultPlaceholder?: boolean
  helperText?: string
  error?: FieldError
}

const InputBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
  {
    label,
    isRequired,
    disabled,
    defaultPlaceholder,
    error,
    helperText,
    size = 'sm',
    display,
    ...rest
  },
  ref
) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error} display={display}>
      {!!label && <FormLabel fontSize={size}>{label}</FormLabel>}
      <ChakraInput
        disabled={disabled}
        ref={ref}
        size={size}
        placeholder={defaultPlaceholder ? label : rest.placeholder}
        {...rest}
      />
      {!error && !!helperText && <FormHelperText>{helperText}</FormHelperText>}
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = React.forwardRef(InputBase)
