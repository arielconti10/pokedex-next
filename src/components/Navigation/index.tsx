import { x } from '@xstyled/styled-components'
import ToggleTheme from 'components/ToggleTheme'
import Link from 'next/link'
// import Typography from 'components/Typography'

const Navigation = () => (
  <x.nav
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    w="350px"
    p={2}
  >
    <x.ul
      display={{ _: 'none', md: 'flex' }}
      alignItems="center"
      color="text"
      gap={5}
    >
      <x.li>
        <Link href="/" passHref>
          <x.a color={{ _: 'currentColor', hover: 'primary-700' }} href="/">
            Home
          </x.a>
        </Link>
      </x.li>
      <x.li>
        <Link href="/" passHref>
          <x.a color={{ _: 'currentColor', hover: 'primary-700' }} href="/">
            About
          </x.a>
        </Link>
      </x.li>
      <x.li>
        <Link href="/" passHref>
          <x.a color={{ _: 'currentColor', hover: 'primary-700' }} href="/">
            Contact
          </x.a>
        </Link>
      </x.li>
      <x.li>
        <ToggleTheme />
      </x.li>
    </x.ul>
  </x.nav>
)

export default Navigation
