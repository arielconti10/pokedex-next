import { useQuery } from 'react-query'

import api from 'services/api'
import Pokemon from 'types'

const getPokemon = async (url: string) => {
  if (url) {
    url = url.replace('https://pokeapi.co/api/v2/pokemon/', '')
    const { data } = await api.get<Pokemon>(`pokemon/${url}`)
    return data
  }
}

export default function usePokemon(pokemonUrl: string) {
  return useQuery(['pokemon', pokemonUrl], () => getPokemon(pokemonUrl))
}
