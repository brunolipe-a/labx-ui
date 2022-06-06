import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export interface TextareaProps extends ChakraTextareaProps {
  label?: string
  isRequired?: boolean
  disabled?: boolean
  defaultPlaceholder?: boolean
  helperText?: string
  error?: FieldError
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
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
      <ChakraTextarea
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

export const Textarea = forwardRef(TextareaBase)
