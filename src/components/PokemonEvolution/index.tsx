import { x } from '@xstyled/styled-components'
import usePokemon from 'hooks/pokemon/usePokemon'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

import { getBackgroundColor, leftPad } from 'utils'

const PokemonEvolution = ({
  pokemonInfo
}: {
  pokemonInfo: {
    name: string
    url: string
    evolvesLevel: number
  }
}) => {
  const { data } = usePokemon(pokemonInfo.name)
  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    if (data) {
      const bgColor = getBackgroundColor(data.types[0])
      setBackgroundColor(bgColor[1].light)
    }
  }, [data])

  if (!data) {
    return (
      <x.div alignItems="center" display="flex" justifyContent="center">
        <TailSpin color="#CCC" height={80} width={80} />
      </x.div>
    )
  }

  return (
    <Link href={`/pokemon/${data.id}`} passHref>
      <x.div
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        mt={2}
        bg={backgroundColor}
        borderRadius="10px"
        p={2}
        cursor="pointer"
        transition="all 0.2s ease-in-out"
        transform={{ hover: 'scale(1.05)' }}
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
        <x.p color="gray-900">
          {pokemonInfo.evolvesLevel > 0
            ? 'Min Level: ' + pokemonInfo.evolvesLevel
            : 'Initial'}
        </x.p>
      </x.div>
    </Link>
  )
}

export default PokemonEvolution
