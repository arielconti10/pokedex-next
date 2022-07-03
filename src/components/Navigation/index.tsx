import { x, useColorMode } from '@xstyled/styled-components'
import ToggleTheme from 'components/ToggleTheme'
import Image from 'next/future/image'
import Link from 'next/link'

const Navigation = () => {
  const [colorMode] = useColorMode()

  return (
    <x.nav
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
      w={{ _: '100%', md: '350px' }}
      p={2}
    >
      <x.ul
        display={{ _: 'flex', md: 'flex' }}
        alignItems="center"
        color="text"
        gap={5}
      >
        <x.li>
          <ToggleTheme />
        </x.li>
        <x.li>
          <Link href="https://github.com/arielconti10/pokedex-next" passHref>
            <Image
              src={
                colorMode === 'default'
                  ? '/img/github.png'
                  : '/img/githubLight.png'
              }
              width="30px"
              height="30px"
              alt="Github repo"
            />
          </Link>
        </x.li>
      </x.ul>
    </x.nav>
  )
}

export default Navigation
