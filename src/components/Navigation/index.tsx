import { x } from '@xstyled/styled-components'
import Typography from 'components/Typography'

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
      <Typography>Home</Typography>
    </x.a>
    <x.a href="/about" color="white">
      <Typography>About</Typography>
    </x.a>
    <x.a href="/contact" color="white">
      <Typography>Contact</Typography>
    </x.a>
  </x.nav>
)

export default Navigation
