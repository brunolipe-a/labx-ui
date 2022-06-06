import { InferType, object, string } from 'yup'

export const loginSchema = object({
  email: string()
    .email()
    .required(),
  password: string()
    .min(8)
    .required(),
})

export type LoginSchema = InferType<typeof loginSchema>
