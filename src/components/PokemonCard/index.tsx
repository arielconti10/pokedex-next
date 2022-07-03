import { useEffect, useState } from 'react'
import { x } from '@xstyled/styled-components'
import Image from 'next/future/image'
import Link from 'next/link'

import usePokemon from 'hooks/pokemon/usePokemon'
import IconComponent from 'components/TypeIcon'
import Pokemon from 'types'
import { leftPad, getBackgroundColor } from 'utils'

export type PokemonCardProps = {
  pokemonId: number
  pokemonUrl: string
}

const PokemonCard = ({ pokemonUrl }: PokemonCardProps) => {
  const { data } = usePokemon(pokemonUrl)

  const [pokemonData, setPokemonData] = useState<Pokemon>({} as Pokemon)
  const [backgroundColor, setBackgroundColor] = useState<string>('')

  useEffect(() => {
    if (data) {
      setPokemonData(data)
      const backgroundColor = getBackgroundColor(data.types[0])
      setBackgroundColor(backgroundColor[1].light)
    }
  }, [data])

  return (
    <Link href={`/pokemon/${pokemonData.id}`} passHref>
      <x.div
        backgroundColor={backgroundColor}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        margin={{ _: '10px 20px 5px 20px', md: '20px' }}
        padding="25px"
        position="relative"
        w={{ xs: '100%', md: '28%', lg: '28%', xl: '20%' }}
        cursor="pointer"
        transition="all 0.3s ease-in-out"
        transform={{ hover: 'scale(1.05)' }}
        zIndex="10"
      >
        {pokemonData.id ? (
          <>
            <x.p
              fontSize={{ _: '6xl' }}
              fontWeight="semibold"
              opacity={1}
              position="absolute"
              top="0"
              pointerEvents="none"
              zIndex={2}
              textShadow="0 2px 2px black"
            >
              # {leftPad(pokemonData.id, 3)}
            </x.p>
            <x.div zIndex={5}>
              <Image
                loading="lazy"
                src={
                  pokemonData.sprites.other?.['official-artwork']
                    .front_default as string
                }
                alt={pokemonData.name || 'Pokemon name'}
                width={180}
                height={180}
              />
            </x.div>
          </>
        ) : null}

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
                zIndex={1}
              >
                <IconComponent name={poketype.type.name} />
                <x.p>{poketype.type.name}</x.p>
              </x.div>
            ))}
        </x.div>
        <x.h1
          textTransform="capitalize"
          fontSize="2xl"
          fontWeight="semibold"
          borderRadius="10px"
          backgroundColor="gray-100"
          color="gray-700"
          padding="10px"
        >
          {pokemonData.name}
        </x.h1>
      </x.div>
    </Link>
  )
}

export default PokemonCard
