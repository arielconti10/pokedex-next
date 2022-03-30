import { x } from '@xstyled/styled-components'
import usePokemon from 'hooks/pokemon/usePokemon'
import Image from 'next/image'
import { NamedAPIResource } from 'types'
import { leftPad } from 'utils'

const PokemonEvolution = ({
  pokemonInfo
}: {
  pokemonInfo: NamedAPIResource
}) => {
  const { data } = usePokemon(pokemonInfo.name)

  return (
    <>
      {data && (
        <x.div
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          mt={2}
        >
          <x.div>
            <x.p
              fontSize="xl"
              fontWeight="semibold"
              color="gray-900"
              opacity={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <x.span marginBottom="5px">#{leftPad(data.id, 3)}</x.span>
              <x.span fontSize="2xl" textTransform="capitalize">
                {data.name}
              </x.span>
            </x.p>
          </x.div>
          <x.figure>
            <Image
              alt={data.name}
              src={
                data.sprites.other?.['official-artwork'].front_default as string
              }
              width="120px"
              height="120px"
            />
          </x.figure>
        </x.div>
      )}
    </>
  )
}

export default PokemonEvolution
