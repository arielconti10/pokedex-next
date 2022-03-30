import { useCallback, useEffect, useState } from 'react'
import { x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import BaseLayout from 'layouts/Base'

import usePokemonSpecie from 'hooks/pokemon/usePokemonSpecie'
import usePokemon from 'hooks/pokemon/usePokemon'
import Pokemon, {
  ChainLink,
  EvolutionChain,
  PokemonSpecie,
  PokemonTypeColors
} from 'types'
import Image from 'next/image'

import { PokemonBio } from 'components/PokemonBio'
import { PokemonStats } from 'components/PokemonStats'
import api from 'services/api'
import PokemonEvolution from 'components/PokemonEvolution'
import { leftPad } from 'utils'

const PokemonLayout = () => {
  const router = useRouter()
  const { id } = router.query

  const [pokemonData, setPokemonData] = useState<PokemonSpecie>(
    {} as PokemonSpecie
  )

  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>({} as Pokemon)

  const [pokemonEvolutions, setPokemonEvolutions] = useState<EvolutionChain>()
  const [pokemonEvolutinsFormatted, setPokemonEvolutinsFormatted] = useState<
    {
      name: string
      url: string
    }[]
  >()

  const { data, isLoading, isSuccess } = usePokemonSpecie(id as string)
  const { data: pokemonInfoData } = usePokemon(id as string)

  // get pokemon evolutions
  const getPokemonEvolutions = useCallback(async () => {
    if (pokemonData && pokemonData.evolution_chain) {
      const { data } = await api.get<EvolutionChain>(
        `evolution-chain/${pokemonData.evolution_chain.url.split('/')[6]}`
      )

      setPokemonEvolutions(data)
    }
  }, [pokemonData])

  const getPokemonEvolutionsFormatted = useCallback(() => {
    if (pokemonEvolutions) {
      const pokemonFormatted = []

      pokemonFormatted.push({
        name: pokemonEvolutions.chain.species.name,
        url: pokemonEvolutions.chain.species.url
      })

      const recursive = (evolvesTo: ChainLink[]) => {
        if (evolvesTo.length > 0) {
          evolvesTo.forEach((evolve: ChainLink) => {
            pokemonFormatted.push({
              name: evolve.species.name,
              url: evolve.species.url
            })
            recursive(evolve.evolves_to)
          })
        }
      }

      recursive(pokemonEvolutions.chain.evolves_to)
      setPokemonEvolutinsFormatted(pokemonFormatted)
    }
  }, [pokemonEvolutions])

  useEffect(() => {
    if (isSuccess && data) {
      setPokemonData(data)
    }
  }, [data, isSuccess])

  useEffect(() => {
    if (pokemonInfoData) {
      setPokemonInfo(pokemonInfoData)
      getPokemonEvolutions()
    }
  }, [pokemonInfoData, getPokemonEvolutions])

  useEffect(() => {
    getPokemonEvolutionsFormatted()
  }, [pokemonEvolutions, getPokemonEvolutionsFormatted])

  const kanjiName =
    pokemonData.names &&
    pokemonData.names.find((name) => name.language.name === 'ja-Hrkt')

  const backgroundColors =
    pokemonInfo.types &&
    pokemonInfo.types.map(({ type }) => {
      const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
        ([key]) => key === type.name
      )

      return backgroundColor
    })

  const selectedBackgroundColor = backgroundColors && backgroundColors[0]

  return (
    <BaseLayout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <x.div
          w={{ xs: '90%', md: '75%' }}
          h={{ xs: '100%', md: '650px' }}
          borderRadius="lg"
          boxShadow="lg"
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          mb={10}
        >
          <x.div
            display="flex"
            flexDirection="column"
            w={{ xs: '100%', sm: '100%', md: '50%' }}
            h="100%"
            mx="auto"
            borderRadius="lg lg 0 0"
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
            borderRadius={{ _: '0', md: '0 lg lg 0' }}
            boxShadow="lg"
            w={{ xs: '100%', md: '50%' }}
            backgroundColor="white"
            py={6}
            px={10}
          >
            <Tabs>
              <TabList>
                <x.div
                  display="flex"
                  flexDirection="row"
                  gap="10px"
                  justifyContent="space-around"
                  mb="30px"
                >
                  <Tab>
                    <x.h3
                      color="gray-700"
                      paddingBottom="5px"
                      fontWeight="bold"
                      fontSize="18px"
                    >
                      Biography
                    </x.h3>
                  </Tab>
                  <Tab>
                    <x.h3
                      color="gray-700"
                      paddingBottom="5px"
                      fontWeight="bold"
                      fontSize="18px"
                    >
                      Stats
                    </x.h3>
                  </Tab>
                  <Tab>
                    <x.h3
                      color="gray-700"
                      paddingBottom="5px"
                      fontWeight="bold"
                      fontSize="18px"
                    >
                      Evolutions
                    </x.h3>
                  </Tab>
                </x.div>
              </TabList>

              <TabPanel>
                {pokemonData && pokemonInfo && (
                  <PokemonBio
                    pokemonData={pokemonData}
                    pokemonInfo={pokemonInfo}
                  />
                )}
              </TabPanel>

              <TabPanel>
                <PokemonStats pokemonInfoData={pokemonInfoData} />
              </TabPanel>

              <TabPanel>
                <x.div
                  display="flex"
                  flexDirection={{ _: 'column', md: 'row' }}
                  gap={{ _: '10px', md: '20px' }}
                  justifyContent="space-between"
                >
                  {pokemonEvolutinsFormatted &&
                    pokemonEvolutinsFormatted?.map(
                      (pokemonFormatted, index) => (
                        <x.div key={pokemonFormatted.name}>
                          <PokemonEvolution pokemonInfo={pokemonFormatted} />
                          {index !== pokemonEvolutinsFormatted.length - 1 && (
                            <Image
                              src="/assets/caretRight.svg"
                              width="20px"
                              height="20px"
                            />
                          )}
                        </x.div>
                      )
                    )}
                </x.div>
              </TabPanel>
            </Tabs>
          </x.div>
        </x.div>
      )}
    </BaseLayout>
  )
}

export default PokemonLayout
