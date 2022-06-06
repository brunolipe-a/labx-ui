import { Button, Checkbox, Stack } from '@chakra-ui/react'

import { useAuth, useYupForm } from '@labx-ui/core'
import {
  AuthLayout,
  Input,
  loginSchema,
  LoginSchema,
  PasswordInput,
} from '@labx-ui/admin'

import { useFormState } from 'react-hook-form'

export default function Login() {
  const { signIn } = useAuth()

  const { register, handleSubmit, control } = useYupForm<LoginSchema>({
    schema: loginSchema,
  })

  const { isSubmitting, errors } = useFormState({ control })

  return (
    <AuthLayout pageTitle="Login" subtitle="Gestão de repositórios Github">
      <Stack as="form" onSubmit={handleSubmit(signIn)} spacing={8}>
        <Input
          label="Email"
          isRequired
          size="lg"
          error={errors.email}
          {...register('email')}
        />
        <Stack spacing={4}>
          <PasswordInput
            label="Senha"
            isRequired
            size="lg"
            error={errors.password}
            {...register('password')}
          />

          <Checkbox defaultChecked colorScheme="brand">
            Lembrar de mim
          </Checkbox>
        </Stack>

        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="brand"
          size="lg"
        >
          Login
        </Button>
      </Stack>
    </AuthLayout>
  )
}
