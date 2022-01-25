import { x, SystemProps } from '@xstyled/styled-components'

type BaseLayoutProps = {
  children?: React.ReactNode
} & SystemProps

const BaseLayout = ({ children, ...props }: BaseLayoutProps) => {
  return (
    <x.main
      display="flex"
      minH="100vh"
      h="fit-content"
      justifyContent="flex-start"
      alignItems="center"
      {...props}
    >
      {children}
    </x.main>
  )
}

export default BaseLayout
