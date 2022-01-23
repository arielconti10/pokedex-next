import { useColorMode, x } from '@xstyled/styled-components'

import BaseLayout from 'layouts/Base'

// import Button from 'components/Button'
import Header from 'components/Header'
import Navigation from 'components/Navigation'
import PokemonCard from 'components/PokemonCard'
import Pokemon from 'types'

const poke1: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  description:
    'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
  types: [
    {
      name: 'Grass',
      url: 'https://pokeapi.co/api/v2/type/12/'
    }
  ]
}

const poke2: Pokemon = {
  id: 2,
  name: 'Ivysaur',
  description:
    'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
  types: [
    {
      name: 'Grass',
      url: 'https://pokeapi.co/api/v2/type/12/'
    }
  ]
}

const poke3: Pokemon = {
  id: 3,
  name: 'Venusaur',
  description:
    'The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
  types: [
    {
      name: 'Grass',
      url: 'https://pokeapi.co/api/v2/type/12/'
    }
  ]
}

const HomeLayout = () => {
  const [colorMode] = useColorMode()

  return (
    <BaseLayout flexDirection="column">
      <Header>
        <Navigation />
      </Header>

      <x.div m={2} p={2} justifyContent="center" alignContent="center">
        <x.input
          type="text"
          placeholder="Search"
          borderBottom="1px solid"
          borderColor={colorMode === 'default' ? 'gray.200' : 'white'}
          p="2"
          m="2"
          w="930px"
          backgroundColor="transparent"
        />
      </x.div>

      <x.div
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <PokemonCard pokemon={poke1} />
        <PokemonCard pokemon={poke2} />
        <PokemonCard pokemon={poke3} />
      </x.div>
    </BaseLayout>
  )
}

export default HomeLayout
