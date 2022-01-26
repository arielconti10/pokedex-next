import { useEffect, useState } from 'react'
import { x } from '@xstyled/styled-components'
import Pokemon from 'types'
import usePokemonSpecie from 'hooks/pokemon/usePokemonSpecie'
import { useRouter } from 'next/router'

const PokemonLayout = () => {
  const router = useRouter()
  const { id } = router.query

  const [pokemonData, setPokemonData] = useState<Pokemon>({} as Pokemon)

  const { data } = usePokemonSpecie(id as string)

  useEffect(() => {
    if (data) {
      setPokemonData(data)
    }
  }, [data])

  return (
    <x.div>
      <x.h1>Pokemon Layout</x.h1>
      <x.div>
        <x.h2>{pokemonData.name}</x.h2>
      </x.div>
    </x.div>
  )
}

export default PokemonLayout
