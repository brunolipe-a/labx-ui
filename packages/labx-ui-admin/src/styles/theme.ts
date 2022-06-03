import { extendTheme, theme as chakraTheme, Theme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

export const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    brand: chakraTheme.colors.teal,
  },
  styles: {
    global: (props: Dict) => ({
      body: {
        bg: mode('gray.50', 'gray.800')(props),
      },
      '::-webkit-scrollbar': {
        w: '0.4rem',
        h: ['0.3rem', '0.4rem', '0.6rem'],
      },
      '::-webkit-scrollbar-thumb': {
        bg: mode('gray.300', 'gray.600')(props),
        borderRadius: 'full',
      },
    }),
  },
  components: {
    Input: {
      sizes: {
        sm: {
          field: {
            borderRadius: 'base',
          },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            _readOnly: {
              boxShadow: 'none !important',
              userSelect: 'all',
              opacity: 0.4,
              cursor: 'not-allowed',
              pointerEvents: 'none',
              tabIndex: -1,
            },
          },
        },
      },
      sizes: {
        sm: {
          field: {
            borderRadius: 'base',
          },
        },
      },
    },
  },
}) as Theme
