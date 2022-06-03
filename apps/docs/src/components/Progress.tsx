import { useTheme } from '@chakra-ui/react'
import NextNProgress from 'nextjs-progressbar'

export function Progress() {
  const { colors } = useTheme()

  return (
    <NextNProgress
      color={colors.brand?.[500] ?? colors.purple[500]}
      height={3}
      options={{ showSpinner: false }}
    />
  )
}
