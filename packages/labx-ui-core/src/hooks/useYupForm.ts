import { FieldValues, useForm, UseFormProps } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
// import { ptForm } from 'yup-locale-pt'

// Yup.setLocale(ptForm)

type UseYupForm<T extends FieldValues> = UseFormProps<T> & {
  schema: Yup.AnyObjectSchema
}

export function useYupForm<T extends FieldValues>({
  schema,
  ...rest
}: UseYupForm<T>) {
  return useForm<T>({
    resolver: yupResolver(schema),
    ...rest,
  })
}
