import { x, SystemProps } from '@xstyled/styled-components'
import Header from 'components/Header'
import Navigation from 'components/Navigation'
import { memo } from 'react'

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
      position="relative"
      {...props}
    >
      <Header>
        <Navigation />
      </Header>
      {children}
      <x.footer position="absolute" bottom="5" fontWeight="medium">
        Made with ❤️ by{' '}
        <x.a
          href="https://github.com/arielconti10"
          target="_blank"
          color="link"
          rel="norefer noopener"
          textDecoration={{ hover: 'underline' }}
        >
          Ariel Conti
        </x.a>
      </x.footer>
    </x.main>
  )
}

export default memo(BaseLayout)
