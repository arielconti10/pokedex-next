import { SystemProps, x } from '@xstyled/styled-components'
import Image from 'next/future/image'

export type HeaderProps = {
  children?: React.ReactNode
} & SystemProps

const Header = ({ children }: HeaderProps) => {
  return (
    <x.header
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      px={{ _: 2, md: 10 }}
      py={{ _: 1, md: 2 }}
      color="white"
      fontSize="lg"
      fontWeight="medium"
    >
      <x.h1>
        <x.a href="/">
          <Image
            src="/img/pokemon-logo.png"
            alt="logo"
            width="300"
            height="110"
            priority
          />
        </x.a>
      </x.h1>

      {children}
    </x.header>
  )
}

export default Header
