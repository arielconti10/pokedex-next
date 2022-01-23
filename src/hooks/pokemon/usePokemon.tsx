import { useQuery } from 'react-query'

import api from 'services/api'

const getPokemons = async () => {
  const { data } = await api.get('pokemon')
  return data.results
}

export default function usePokemons() {
  return useQuery('pokemons', getPokemons)
}
