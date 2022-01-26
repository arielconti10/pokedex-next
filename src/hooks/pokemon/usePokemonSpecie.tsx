import { useQuery } from 'react-query'

import api from 'services/api'
import Pokemon from 'types'

const getPokemonSpecie = async (id: string | undefined) => {
  const { data } = await api.get<Pokemon>(`pokemon-species/${id}`)

  return data
}

export default function usePokemonSpecie(pokemonId: string | undefined) {
  return useQuery(['pokemon', pokemonId], () => getPokemonSpecie(pokemonId))
}
