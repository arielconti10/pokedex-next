import { useEffect, useState } from 'react'
import { x } from '@xstyled/styled-components'

import usePokemon from 'hooks/pokemon/usePokemon'

import Pokemon, { PokemonTypeColors, Type } from 'types'
import Image from 'next/image'
import { useRouter } from 'next/router'
import IconComponent from 'components/TypeIcon'

export type PokemonCardProps = {
  pokemonId: number
  pokemonUrl: string
}

const PokemonCard = ({ pokemonUrl }: PokemonCardProps) => {
  const { data } = usePokemon(pokemonUrl)
  const router = useRouter()

  const [pokemonData, setPokemonData] = useState<Pokemon>({} as Pokemon)
  const [backgroundColor, setBackgroundColor] = useState<string>('')

  useEffect(() => {
    if (data) {
      setPokemonData(data)
      const backgroundColor = getBackgroundColor(data.types[0])
      setBackgroundColor(backgroundColor[1].light)
    }
  }, [data])

  function getBackgroundColor(type: Type) {
    const [backgroundColor] = Object.entries(PokemonTypeColors).filter(
      ([key]) => key === type.type.name
    )
    return backgroundColor
  }

  const leftPad = (number: number, targetLength: number): string => {
    let output = Math.abs(number).toString()
    while (output.length < Math.abs(targetLength)) {
      output = '0' + output
    }
    return output
  }

  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius="lg"
      p="2"
      m="2"
      w="100%"
      maxWidth="350px"
      minHeight="320px"
      backgroundColor={{
        _: backgroundColor
      }}
      boxShadow={`0 0 10px 1px ${backgroundColor}`}
      cursor="pointer"
      position="relative"
      transition="all 0.3s ease-in-out"
      onClick={() => router.push(`/pokemon/${pokemonData.id}`)}
    >
      {pokemonData.id && (
        <>
          <x.p
            fontSize="6xl"
            fontWeight="semibold"
            opacity={0.8}
            position="absolute"
            top="0"
            pointerEvents="none"
            className="text-6xl font-semibold text-black text-opacity-25 absolute tracking-xl top-1/8 pointer-events-none"
          >
            # {leftPad(pokemonData.id, 3)}
          </x.p>
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
      <x.h1 textTransform="capitalize" fontSize="2xl" fontWeight="semibold">
        {pokemonData.name}
      </x.h1>
      <x.div display="flex" flexDirection="row" gap={2}>
        {pokemonData.types &&
          pokemonData.types.map((poketype) => (
            <x.div
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
              p={2}
              my={2}
              borderRadius="lg"
              fontSize="sm"
              key={poketype.type.name}
              background={{
                _: getBackgroundColor(poketype)[1].medium
              }}
            >
              <IconComponent name={poketype.type.name} />
              <x.p>{poketype.type.name}</x.p>
            </x.div>
          ))}
      </x.div>
    </x.div>
  )
}

export default PokemonCard
