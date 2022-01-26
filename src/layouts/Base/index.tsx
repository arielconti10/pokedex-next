import { x, SystemProps } from '@xstyled/styled-components'
import Header from 'components/Header'
import Navigation from 'components/Navigation'

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
      flexDirection="column"
      {...props}
    >
      <Header>
        <Navigation />
      </Header>
      {children}
    </x.main>
  )
}

export default BaseLayout
