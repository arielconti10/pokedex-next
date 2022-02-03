import { useQuery } from 'react-query'

import api from 'services/api'
import { PokemonSpecie } from 'types'

const getPokemonSpecie = async (id: string | undefined) => {
  const { data } = await api.get<PokemonSpecie>(`pokemon-species/${id}`)

  return data
}

export default function usePokemonSpecie(pokemonId: string | undefined) {
  return useQuery(['pokemonSpecie', pokemonId], () =>
    getPokemonSpecie(pokemonId)
  )
}
