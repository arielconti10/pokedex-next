export type Type = {
  name: string
  url: string
}

export type Stat = {
  base_stat: number
  name: string
  url: string
}

export type Ability = {
  name: string
  url: string
}

export type EggGroup = {
  name: string
  url: string
}

export type Pokemon = {
  id: number
  name: string
  description: string
  types: Type[]
}

export default Pokemon
