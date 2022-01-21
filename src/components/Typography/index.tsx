/**
 * create a typography component using xstyled and check if the theme is dark or light to choose the color of the text
 * the typography component should have different sizes, font-weights and alignments
 */
import { SystemProps, useColorMode, x } from '@xstyled/styled-components'

export type TypographyProps = {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
} & SystemProps

const Typography = ({ children, ...props }: TypographyProps) => {
  const [colorMode] = useColorMode()

  return (
    <x.div
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      px={10}
      py={2}
      color={colorMode === 'dark' ? 'white' : 'black'}
      fontSize={props.size}
      fontWeight={props.size === 'lg' ? 'medium' : 'normal'}
      textAlign={props.align}
      {...props}
    >
      {children}
    </x.div>
  )
}

export default Typography
