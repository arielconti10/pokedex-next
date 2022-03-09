import { x, useColorMode } from '@xstyled/styled-components'
import { useInfiniteQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroll-component'

import { PokemonResult } from 'hooks/pokemon/usePokemons'
import BaseLayout from 'layouts/Base'
import PokemonCard from 'components/PokemonCard'
import api from 'services/api'

const HomeLayout = () => {
  const [colorMode] = useColorMode()
  const getPokemons = async ({ pageParam = 0 }) => {
    const { data } = await api.get<PokemonResult>(
      `pokemon?limit=21&offset=${pageParam}`
    )
    return data
  }

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'pokemons',
    getPokemons,
    {
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
          color="gray.700"
          fontSize="lg"
          fontWeight="bold"
          height="40px"
          placeholder="Search"
          w="800px"
          m={4}
          p={2}
          type="text"
          onChange={(e) => {
            console.log(e.target.value)
          }}
        />
      </x.div>

      <InfiniteScroll
        dataLength={
          status === 'success' && data ? (data.pages.length as number) * 20 : 0
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
        {status === 'success' &&
          data &&
          data.pages.map((page, key) => (
            <x.div
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              w="100%"
              key={key}
            >
              {page.results.map((pokemon, index) => {
                return (
                  <PokemonCard
                    key={index}
                    pokemonId={index + 1}
                    pokemonUrl={pokemon.url}
                  />
                )
              })}
            </x.div>
          ))}
      </InfiniteScroll>
    </BaseLayout>
  )
}

export default HomeLayout
