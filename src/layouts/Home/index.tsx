import { useEffect, useState } from 'react'
import { useColorMode, x } from '@xstyled/styled-components'

import BaseLayout from 'layouts/Base'

import usePokemons from 'hooks/pokemon/usePokemons'

import PokemonCard from 'components/PokemonCard'

const HomeLayout = () => {
  const [colorMode] = useColorMode()
  const [pokemons, setPokemons] = useState([{ name: '', url: '' }])

  const { data, isLoading } = usePokemons()

  useEffect(() => {
    if (data) {
      setPokemons(data)
    }
  }, [data])

  return (
    <BaseLayout>
      <x.div
        m={2}
        p={2}
        justifyContent="center"
        alignContent="center"
        flexGrow="grow"
      >
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
        {!isLoading &&
          pokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemonId={index + 1}
              pokemonUrl={pokemon.url}
            />
          ))}
      </x.div>
    </BaseLayout>
  )
}

export default HomeLayout
