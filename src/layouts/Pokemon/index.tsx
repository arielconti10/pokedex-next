import { useEffect, useState } from 'react'
import { useColorMode, x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'

import BaseLayout from 'layouts/Base'

import usePokemonSpecie from 'hooks/pokemon/usePokemonSpecie'
import usePokemon from 'hooks/pokemon/usePokemon'
import Pokemon, { PokemonSpecie, PokemonTypeColors } from 'types'
import Image from 'next/image'

const PokemonLayout = () => {
  const router = useRouter()
  const { id } = router.query

  const [colorMode] = useColorMode()
  const [pokemonData, setPokemonData] = useState<PokemonSpecie>(
    {} as PokemonSpecie
  )

  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>({} as Pokemon)

  const { data } = usePokemonSpecie(id as string)
  const { data: pokemonInfoData } = usePokemon(id as string)

  useEffect(() => {
    if (data) {
      setPokemonData(data)
    }
  }, [data])

  useEffect(() => {
    if (pokemonInfoData) {
      setPokemonInfo(pokemonInfoData)
    }
  }, [pokemonInfoData])

  const leftPad = (number: number, targetLength: number): string => {
    let output = Math.abs(number).toString()
    while (output.length < Math.abs(targetLength)) {
      output = '0' + output
    }
    return output
  }

  const kanjiName =
    pokemonData.names &&
    pokemonData.names.find((name) => name.language.name === 'ja-Hrkt')

  const backgroundColors =
    pokemonInfo.types &&
    pokemonInfo.types.map(({ type }) => {
      console.log(type)
      const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
        ([key]) => key === type.name
      )

      return backgroundColor
    })

  const selectedBackgroundColor = backgroundColors && backgroundColors[0]

  return (
    <BaseLayout>
      <x.div
        w="70%"
        h="650px"
        borderRadius="lg"
        boxShadow="lg"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <x.div
          display="flex"
          flexDirection="column"
          w="50%"
          h="100%"
          mx="auto"
          borderRadius="lg 0 0 lg"
          boxShadow="lg"
          backgroundColor={
            selectedBackgroundColor ? selectedBackgroundColor.light : '#fff'
          }
        >
          <x.div px={{ _: 4, md: 8 }}>
            <x.p
              mt="4"
              fontSize={{ _: '2xl', md: '3xl' }}
              color="white"
              fontWeight="bold"
              className="text-md mt-4 text-white font-medium"
            >
              #{leftPad(pokemonData.id, 3)}
            </x.p>
            <x.h1
              fontSize={{ _: '2xl', md: '3xl', lg: '4xl' }}
              color="white"
              fontWeight="bold"
              pb="4"
              textTransform="capitalize"
            >
              {pokemonData.name}
            </x.h1>
          </x.div>
          <x.div
            position="relative"
            textAlign="center"
            my="auto"
            w="full"
            h={96}
          >
            <x.h1
              position="absolute"
              mt={2}
              fontSize="6xl"
              w="full"
              opacity="0.5"
              fontWeight="extraBold"
              overflow="hidden"
              top={0}
              left={0}
              zIndex={0}
            >
              {kanjiName && kanjiName.name}
            </x.h1>
            <x.figure mt={10}>
              {pokemonInfoData && pokemonInfoData.sprites && (
                <Image
                  src={
                    pokemonInfoData.sprites.other?.['official-artwork']
                      .front_default as string
                  }
                  width="325"
                  height="325"
                />
              )}
            </x.figure>
          </x.div>
        </x.div>
        <x.div
          borderRadius="0 lg lg 0"
          boxShadow="lg"
          w="50%"
          backgroundColor={colorMode === 'default' ? 'black' : 'white'}
        >
          <x.h2>Pokemon stats</x.h2>
        </x.div>
      </x.div>
    </BaseLayout>
  )
}

export default PokemonLayout
