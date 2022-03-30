import { x } from '@xstyled/styled-components'

import Typography from 'components/Typography'
import Pokemon, { PokemonSpecie } from 'types'
import PokemonInformation from 'components/PokemonInfo'

export interface PokemonBioProps {
  pokemonData: PokemonSpecie
  pokemonInfo: Pokemon
}

export const PokemonBio = ({ pokemonData, pokemonInfo }: PokemonBioProps) => {
  const genderPercentage =
    pokemonData.gender_rate !== -1 ? (pokemonData.gender_rate / 8) * 100 : -1

  return (
    <x.div w={{ _: '100%', md: '380px' }} margin="0 auto">
      <x.h3 color="gray-600" fontSize="lg" fontWeight="bold">
        Pokemon Data
      </x.h3>

      <Typography color="gray-600" my={4} p={0}>
        {pokemonData.flavor_text_entries &&
          pokemonData.flavor_text_entries[0].flavor_text}
      </Typography>

      <x.ul mt={5}>
        <PokemonInformation title="Weight" content={pokemonInfo.weight} />
        <PokemonInformation title="Height" content={pokemonInfo.height} />

        <PokemonInformation
          title="Abilities"
          content={
            pokemonInfo.abilities &&
            pokemonInfo.abilities.map((ability, index) => (
              <x.li
                key={`ability=${ability.ability.name}`}
                color="gray-600"
                marginBottom="10px"
              >
                {index + 1}. {ability.ability.name}{' '}
                {ability.isHidden && '(Hidden Ability)'}
              </x.li>
            ))
          }
        />

        <PokemonInformation
          title="Gender"
          content={
            <x.div display="flex" flexDirection="row">
              <x.div display="flex" alignItems="items-center" mr={3}>
                <x.span marginLeft={2} className="ml-2">
                  {100 - genderPercentage}%
                </x.span>
              </x.div>
              <x.div display="flex" alignItems="center">
                <x.span marginLeft={2} className="ml-2">
                  {genderPercentage}%
                </x.span>
              </x.div>
            </x.div>
          }
        />

        <x.div marginTop="30px">
          <x.h3
            color="gray-600"
            fontSize="lg"
            fontWeight="bold"
            marginBottom="20px"
          >
            Training
          </x.h3>
          <PokemonInformation
            title="Base exp"
            content={pokemonInfo.base_experience}
          />
          <PokemonInformation
            title="Base hapiness"
            content={pokemonData.base_happiness}
          />
          <PokemonInformation
            title="Catch rate"
            content={pokemonData.capture_rate}
          />
          <PokemonInformation
            title="Growth rate"
            content={pokemonData.growth_rate && pokemonData.growth_rate.name}
          />
        </x.div>
      </x.ul>
    </x.div>
  )
}
