import { useEffect, useState } from 'react'
import { useColorMode, x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import BaseLayout from 'layouts/Base'

import usePokemonSpecie from 'hooks/pokemon/usePokemonSpecie'
import usePokemon from 'hooks/pokemon/usePokemon'
import Pokemon, { PokemonSpecie, PokemonTypeColors } from 'types'
import Image from 'next/image'
import Typography from 'components/Typography'

const PokemonLayout = () => {
  const router = useRouter()
  const { id } = router.query

  const [colorMode] = useColorMode()
  const [pokemonData, setPokemonData] = useState<PokemonSpecie>(
    {} as PokemonSpecie
  )

  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>({} as Pokemon)

  const { data, isLoading, isSuccess } = usePokemonSpecie(id as string)
  const { data: pokemonInfoData } = usePokemon(id as string)

  useEffect(() => {
    if (isSuccess && data) {
      setPokemonData(data)
    }
  }, [data, isSuccess])

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
          w="75%"
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
            backgroundColor="white"
            py={6}
            px={10}
          >
            <Tabs>
              <TabList>
                <x.div display="flex" flexDirection="row" gap="10px">
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
                <x.div>
                  <x.h3 color="gray-600" fontSize="lg" fontWeight="bold">
                    Pokemon Data
                  </x.h3>
                  <Typography color="gray-600" my={4} p={0}>
                    {pokemonData.flavor_text_entries &&
                      pokemonData.flavor_text_entries[0].flavor_text}
                  </Typography>
                </x.div>
                <x.div>
                  {pokemonInfoData &&
                    pokemonInfoData.stats &&
                    pokemonInfoData.stats.map((st, key) => (
                      <x.div
                        key={key}
                        display="flex"
                        my={5}
                        w="450px"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <x.div
                          display="flex"
                          flexDirection="row"
                          justifyContent="space-between"
                          w="180px"
                        >
                          <x.span textTransform="capitalize" color="gray-600">
                            {st.stat.name === 'Special-Attack'
                              ? 'Sp Atk'
                              : st.stat.name}
                          </x.span>
                          <x.span textTransform="capitalize" color="gray-600">
                            {st.base_stat}
                          </x.span>
                        </x.div>

                        <x.div
                          w="250px"
                          backgroundColor="gray-200"
                          borderRadius="8px"
                          maxHeight="10px"
                        >
                          <x.div
                            maxHeight="10px"
                            w={`${st.base_stat}%`}
                            backgroundColor={
                              selectedBackgroundColor
                                ? selectedBackgroundColor.light
                                : ''
                            }
                            boxShadow={`2px 2px 10px 2px ${
                              selectedBackgroundColor
                                ? selectedBackgroundColor.light
                                : 'rgba(0, 0, 0, 0.1)'
                            }`}
                            borderRadius="8px"
                            paddingLeft={2}
                            color={
                              colorMode === 'default' ? 'gray-800' : 'gray-200'
                            }
                          >
                            &nbsp;
                          </x.div>
                        </x.div>
                      </x.div>
                    ))}
                </x.div>
              </TabPanel>
              <TabPanel>
                <h2>Stats</h2>
              </TabPanel>
              <TabPanel>
                <h2>Evolutions</h2>
              </TabPanel>
            </Tabs>
          </x.div>
        </x.div>
      )}
    </BaseLayout>
  )
}

export default PokemonLayout
