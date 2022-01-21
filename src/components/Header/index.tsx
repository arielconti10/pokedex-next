import { x } from '@xstyled/styled-components'

const Header = () => {
  return (
    <x.header
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      px={10}
      py={2}
      color="white"
      fontSize="lg"
      fontWeight="medium"
    >
      <x.h1>
        <x.a href="/">
          <x.img src="/img/pokemon-logo.png" alt="logo" width="300" />
        </x.a>
      </x.h1>
    </x.header>
  )
}

export default Header
