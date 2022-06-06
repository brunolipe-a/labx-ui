import { ChangeEventHandler, forwardRef, ForwardRefRenderFunction } from 'react'
import { Controller, FieldError, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputProps,
  FormErrorMessage,
  FormHelperText,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export type InputNumberProps = NumberInputProps & {
  label?: string
  isRequired?: boolean
  disabled?: boolean
  defaultPlaceholder?: boolean
  helperText?: string
  error?: FieldError
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputNumberProps
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
    name,
    ...rest
  },
  ref
) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name || ''}
      render={({ field: { name: controlName, ...controlRest } }) => (
        <FormControl
          isRequired={isRequired}
          isInvalid={!!error}
          display={display}
        >
          {!!label && <FormLabel fontSize={size}>{label}</FormLabel>}
          <NumberInput
            allowMouseWheel
            size={size}
            disabled={disabled}
            {...rest}
            {...controlRest}
            ref={ref}
          >
            <NumberInputField
              name={controlName}
              placeholder={defaultPlaceholder ? label : rest.placeholder}
            />
            <NumberInputStepper fontSize={size}>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {!error && !!helperText && (
            <FormHelperText>{helperText}</FormHelperText>
          )}
          {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  )
}

export const InputNumber = forwardRef(InputBase)
