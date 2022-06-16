import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { x, useColorMode } from '@xstyled/styled-components'
import { InfiniteData, useInfiniteQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import BaseLayout from 'layouts/Base'
import Container from 'components/Container'

const PokemonCard = dynamic(() => import('components/PokemonCard'), {
  loading: () => <p>Loading...</p>
})

import { PokemonResult } from 'hooks/pokemon/usePokemons'
import useDebounce from 'hooks/useDebounce'
import api from 'services/api'

interface HomeLayoutProps {
  initialData: PokemonResult
}

const HomeLayout = ({ initialData }: HomeLayoutProps) => {
  const [colorMode] = useColorMode()
  const [search, setSearch] = useState<string>('')
  const [searchedPokemons, setSearchedPokemons] = useState<
    {
      name: string
      url: string
    }[]
  >()
  const debouncedValue = useDebounce<string>(search, 500)

  const getPokemons = async ({ pageParam = 0 }) => {
    const { data } = await api.get<PokemonResult>(
      `pokemon?limit=20&offset=${pageParam}`
    )
    return data
  }

  const getAllPokemons = async () => {
    const { data } = await api.get<PokemonResult>(`pokemon?limit=898`)
    return data
  }

  useEffect(() => {
    if (debouncedValue) {
      const pokemons = getAllPokemons()
      pokemons.then((data) => {
        const filteredPokemons = data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(debouncedValue.toLowerCase())
        )
        setSearchedPokemons(filteredPokemons)
      })
    }

    if (!debouncedValue) {
      setSearchedPokemons([])
    }
  }, [debouncedValue])

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'pokemons',
    getPokemons,
    {
      initialData: { pages: [initialData] } as InfiniteData<PokemonResult>,
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const offset = lastPage.next.split('offset=')[1].split('&')[0]
          return offset
        }
      }
    }
  )

  return (
    <BaseLayout>
      <x.div
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <x.input
          background="transparent"
          border="1px solid"
          borderRadius="10px"
          borderColor={colorMode === 'dark' ? 'cool-gray-500' : 'gray'}
          color={colorMode === 'dark' ? 'gray-300' : 'gray-900'}
          fontSize="lg"
          fontWeight="bold"
          height="40px"
          placeholder="Search"
          w="800px"
          m={4}
          p={2}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </x.div>

      {searchedPokemons && searchedPokemons.length > 0 ? (
        <x.div
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          w="100%"
        >
          {searchedPokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemonId={index + 1}
              pokemonUrl={pokemon.url}
            />
          ))}
        </x.div>
      ) : (
        <InfiniteScroll
          dataLength={
            status === 'success' && data && data.pages
              ? (data.pages.length as number) * 20
              : 0
          }
          next={fetchNextPage}
          hasMore={hasNextPage as boolean}
          loader={<h4>Loading...</h4>}
          scrollThreshold={1}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {data?.pages.map((page, key) => (
            <Container key={key}>
              {page.results.map((pokemon, index) => {
                return (
                  <PokemonCard
                    key={index}
                    pokemonId={index + 1}
                    pokemonUrl={pokemon.url}
                  />
                )
              })}
            </Container>
          ))}
        </InfiniteScroll>
      )}
    </BaseLayout>
  )
}

export default HomeLayout
