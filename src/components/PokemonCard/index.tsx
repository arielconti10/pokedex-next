import { x } from '@xstyled/styled-components'
import Pokemon from 'types'

export type PokemonCardProps = {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      p="2"
      m="2"
      w="100%"
      maxWidth="300px"
    >
      <x.h1>{pokemon.name}</x.h1>
      <x.p>{pokemon.description}</x.p>
      {pokemon.types.map((type) => (
        <x.p key={type.url}>{type.name}</x.p>
      ))}
    </x.div>
  )
}

export default PokemonCard
