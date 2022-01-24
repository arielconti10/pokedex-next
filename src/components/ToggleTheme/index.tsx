import { x, SystemProps, useColorMode } from '@xstyled/styled-components'

import { FiMoon, FiSun } from 'react-icons/fi'

export const ToggleTheme = ({ ...props }: SystemProps) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <x.button
      appearance="none"
      color={{ _: 'currentColor', hover: 'primary-700' }}
      bg="transparent"
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
      {...props}
    >
      {colorMode === 'default' ? <FiMoon /> : <FiSun />}
    </x.button>
  )
}

export default ToggleTheme
