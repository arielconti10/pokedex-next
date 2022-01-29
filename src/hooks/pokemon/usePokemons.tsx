import { useQuery } from 'react-query'

import api from 'services/api'

export interface PokemonResult {
  count: number
  next: string
  previous: string
  results: [
    {
      name: string
      url: string
    }
  ]
}

const getPokemons = async () => {
  const { data } = await api.get<PokemonResult>(`pokemon?limit=1118`)
  return data
}

export default function usePokemons() {
  return useQuery('pokemons', getPokemons)
}
