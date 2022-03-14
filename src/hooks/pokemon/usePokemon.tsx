import { useQuery } from 'react-query'

import api from 'services/api'
import Pokemon from 'types'

const getPokemon = async (url: string) => {
  url = url.replace('https://pokeapi.co/api/v2/pokemon/', '')
  if (url) {
    const { data } = await api.get<Pokemon>(`pokemon/${url}`)

    return data
  }
}

export default function usePokemon(pokemonUrl: string) {
  return useQuery(['pokemon', pokemonUrl], () => getPokemon(pokemonUrl))
}
