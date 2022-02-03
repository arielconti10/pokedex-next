export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: Species[]
  game_indices: GameIndex[]
  height: number
  // held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  // past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface Ability {
  ability: Species
  is_hidden: boolean
  slot: number
}

export interface Species {
  name: string
  url: string
}

export interface GameIndex {
  game_index: number
  version: Species
}

export interface Move {
  move: Species
  version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: Species
  version_group: Species
}

export interface GenerationV {
  'black-white': Sprites
}

export interface GenerationIv {
  'diamond-pearl': Sprites
  'heartgold-soulsilver': Sprites
  platinum: Sprites
}

export interface Versions {
  'generation-i': GenerationI
  'generation-ii': GenerationIi
  'generation-iii': GenerationIii
  'generation-iv': GenerationIv
  'generation-v': GenerationV
  'generation-vi': { [key: string]: Home }
  'generation-vii': GenerationVii
  'generation-viii': GenerationViii
}

export interface Sprites {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
  other?: Other
  versions?: Versions
  animated?: Sprites
}

export interface GenerationI {
  'red-blue': RedBlue
  yellow: RedBlue
}

export interface RedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Gold
}

export interface Crystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

export interface Gold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent?: string
}

export interface GenerationIii {
  emerald: Emerald
  'firered-leafgreen': Gold
  'ruby-sapphire': Gold
}

export interface Emerald {
  front_default: string
  front_shiny: string
}

export interface Home {
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

export interface GenerationVii {
  icons: DreamWorld
  'ultra-sun-ultra-moon': Home
}

export interface DreamWorld {
  front_default: string
  front_female: null
}

export interface GenerationViii {
  icons: DreamWorld
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
}

export interface OfficialArtwork {
  front_default: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type EggGroup = {
  name: string
  url: string
}

export const PokemonTypeColors = {
  normal: {
    light: '#CDCDB9',
    medium: '#C4C4A4'
  },
  fire: {
    light: '#F4934D',
    medium: '#F08030'
  },
  fighting: {
    light: '#BA5852',
    medium: '#C03028'
  },
  water: {
    light: '#85A5F0',
    medium: '#6890F0'
  },
  flying: {
    light: '#B8A5F2',
    medium: '#A890F0'
  },
  grass: {
    light: '#99D07D',
    medium: '#78C850'
  },
  poison: {
    light: '#A768A7',
    medium: '#A040A0'
  },
  electric: {
    light: '#F9DF78',
    medium: '#F8D030'
  },
  ground: {
    light: '#EDD081',
    medium: '#E0C068'
  },
  psychic: {
    light: '#F47DA1',
    medium: '#F85888'
  },
  rock: {
    light: '#C5B059',
    medium: '#B8A038'
  },
  ice: {
    light: '#B3E1E1',
    medium: '#98D8D8'
  },
  bug: {
    light: '#B5C534',
    medium: '#A8B820'
  },
  dragon: {
    light: '#8656FA',
    medium: '#7038F8'
  },
  ghost: {
    light: '#7D6B9B',
    medium: '#705898'
  },
  dark: {
    light: '#756459',
    medium: '#705848'
  },
  steel: {
    light: '#C1C1D1',
    medium: '#B8B8D0'
  },
  fairy: {
    light: '#EFA7B7',
    medium: '#EE99AC'
  }
}

export interface PokemonSpecie {
  base_happiness: number
  capture_rate: number
  color: Color
  egg_groups: Color[]
  evolution_chain: EvolutionChain
  evolves_from_species: null
  flavor_text_entries: FlavorTextEntry[]
  // form_descriptions: any[]
  forms_switchable: boolean
  gender_rate: number
  genera: Genus[]
  generation: Color
  growth_rate: Color
  habitat: Color
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  names: Name[]
  order: number
  pal_park_encounters: PalParkEncounter[]
  pokedex_numbers: PokedexNumber[]
  shape: Color
  varieties: Variety[]
}

export interface Color {
  name: string
  url: string
}

export interface EvolutionChain {
  url: string
}

export interface FlavorTextEntry {
  flavor_text: string
  language: Color
  version: Color
}

export interface Genus {
  genus: string
  language: Color
}

export interface Name {
  language: Color
  name: string
}

export interface PalParkEncounter {
  area: Color
  base_score: number
  rate: number
}

export interface PokedexNumber {
  entry_number: number
  pokedex: Color
}

export interface Variety {
  is_default: boolean
  pokemon: Color
}

export default Pokemon
