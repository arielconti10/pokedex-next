import { x } from '@xstyled/styled-components'

const Header = () => {
  return (
    <x.header
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={3}
      py={2}
      bg="gray-900"
      color="white"
      fontSize="lg"
      fontWeight="medium"
      borderBottom="1px solid"
      borderColor="gray-800"
    >
      <x.h1>
        <x.a href="/">
          <x.img src="/img/pokemon-logo.svg" alt="logo" />
        </x.a>
      </x.h1>
      <x.nav>
        <x.a href="/">Home</x.a>
        <x.a href="/about">About</x.a>
        <x.a href="/contact">Contact</x.a>
      </x.nav>
    </x.header>
  )
}

export default Header
