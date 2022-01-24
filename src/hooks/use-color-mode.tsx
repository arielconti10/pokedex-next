import { useColorMode } from '@xstyled/styled-components'

export function useColorModeValue<TLight = unknown, TDark = unknown>(
  light: TLight,
  dark: TDark
) {
  const [colorMode] = useColorMode()

  return colorMode === 'default' ? light : dark
}
