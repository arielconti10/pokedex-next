import { x } from '@xstyled/styled-components'

const Navigation = () => (
  <x.nav
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    w="350px"
    p={2}
  >
    <x.a href="/" color="white">
      Home
    </x.a>
    <x.a href="/about" color="white">
      About
    </x.a>
    <x.a href="/contact" color="white">
      Contact
    </x.a>
  </x.nav>
)

export default Navigation
