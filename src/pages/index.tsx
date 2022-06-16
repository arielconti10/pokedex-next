import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import HomeLayout from 'layouts/Home'
import { PokemonResult } from 'hooks/pokemon/usePokemons'
import api from 'services/api'

interface HomePageProps {
  pokemons: PokemonResult
}

const HomePage = ({ pokemons }: HomePageProps) => {
  return (
    <>
      <NextSeo title="Home" />
      <HomeLayout initialData={pokemons} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getPokemons = async ({ pageParam = 0 }) => {
    const { data } = await api.get<PokemonResult>(
      `pokemon?limit=21&offset=${pageParam}`
    )
    return data
  }

  const pokemons = await getPokemons({ pageParam: 0 })

  return { props: { pokemons } }
}

export default HomePage
