import { x, useColorMode } from '@xstyled/styled-components'
import Pokemon, { PokemonTypeColors, Type } from 'types'

interface PokemonStatsProps {
  pokemonInfoData: Pokemon | undefined
}

export const PokemonStats = ({ pokemonInfoData }: PokemonStatsProps) => {
  const [colorMode] = useColorMode()

  const backgroundColors =
    pokemonInfoData &&
    pokemonInfoData.types &&
    pokemonInfoData.types.map(({ type }: Type) => {
      const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
        ([key]) => key === type.name
      )

      return backgroundColor
    })

  const selectedBackgroundColor = backgroundColors && backgroundColors[0]
  return (
    <x.div w={{ _: '100%', md: '380px' }} margin="0 auto">
      {pokemonInfoData &&
        pokemonInfoData.stats &&
        pokemonInfoData.stats.map((st, key) => (
          <x.div
            key={key}
            display="flex"
            my={5}
            w={{ _: '100%', md: '380px' }}
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ _: 'column', md: 'row' }}
          >
            <x.div
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              w={{ _: '100%', md: '180px' }}
            >
              <x.span textTransform="capitalize" color="gray-600">
                {st.stat.name === 'Special-Attack' ? 'Sp Atk' : st.stat.name}
              </x.span>
              <x.span textTransform="capitalize" color="gray-600">
                {st.base_stat}
              </x.span>
            </x.div>

            <x.div
              w={{ _: '100%', md: '250px' }}
              backgroundColor="gray-200"
              borderRadius="8px"
              maxHeight="10px"
              marginLeft={{ _: 0, md: '20px' }}
              marginTop={{ _: '10px', md: 0 }}
            >
              <x.div
                maxHeight="10px"
                w={`${st.base_stat}%`}
                backgroundColor={
                  selectedBackgroundColor ? selectedBackgroundColor.light : ''
                }
                boxShadow={`2px 2px 10px 2px ${
                  selectedBackgroundColor
                    ? selectedBackgroundColor.light
                    : 'rgba(0, 0, 0, 0.1)'
                }`}
                borderRadius="8px"
                paddingLeft={2}
                color={colorMode === 'default' ? 'gray-800' : 'gray-200'}
              >
                &nbsp;
              </x.div>
            </x.div>
          </x.div>
        ))}
    </x.div>
  )
}
