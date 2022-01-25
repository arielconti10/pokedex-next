import { useEffect, useState } from 'react'
import { x } from '@xstyled/styled-components'

import usePokemon from 'hooks/pokemon/usePokemon'
import { useColorModeValue } from 'hooks/use-color-mode'
import Pokemon from 'types'
import Image from 'next/image'

export type PokemonCardProps = {
  pokemonId: number
  pokemonUrl: string
}

const PokemonCard = ({ pokemonUrl }: PokemonCardProps) => {
  const { data } = usePokemon(pokemonUrl)

  const [pokemonData, setPokemonData] = useState<Pokemon>({} as Pokemon)

  useEffect(() => {
    if (data) {
      setPokemonData(data)
    }
  }, [data])

  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      p="2"
      m="2"
      w="100%"
      maxWidth="350px"
      minHeight="300px"
      backgroundColor={{
        _: useColorModeValue('gray.100', 'gray.900'),
        hover: 'gray.100'
      }}
      cursor="pointer"
    >
      {pokemonData.id && (
        <>
          <x.h1>{pokemonData.name}</x.h1>
          <Image
            src={
              pokemonData.sprites.other?.['official-artwork']
                .front_default as string
            }
            alt={pokemonData.name}
            width="200px"
            height="200px"
          />
        </>
      )}
      {pokemonData.types &&
        pokemonData.types.map((poketype) => (
          <x.div key={poketype.type.name}>{poketype.type.name}</x.div>
        ))}
    </x.div>
  )
}

export default PokemonCard
