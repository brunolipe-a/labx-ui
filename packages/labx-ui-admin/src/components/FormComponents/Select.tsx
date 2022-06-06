import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export type Option = {
  label: string | number
  value: string | number
}

export interface SelectProps extends ChakraSelectProps {
  label?: string
  isRequired?: boolean
  disabled?: boolean
  defaultPlaceholder?: boolean
  helperText?: string
  error?: FieldError
  options: Option[]
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  {
    options,
    label,
    isRequired,
    disabled,
    defaultPlaceholder,
    error,
    helperText,
    size = 'sm',
    placeholder = 'Selecione...',
    ...rest
  },
  ref
) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error}>
      {!!label && <FormLabel fontSize={size}>{label}</FormLabel>}
      <ChakraSelect
        disabled={disabled}
        ref={ref}
        size={size}
        tabIndex={rest.isReadOnly ? -1 : undefined}
        placeholder={defaultPlaceholder ? label : placeholder}
        {...rest}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </ChakraSelect>
      {!error && !!helperText && <FormHelperText>{helperText}</FormHelperText>}
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Select = forwardRef(SelectBase)
