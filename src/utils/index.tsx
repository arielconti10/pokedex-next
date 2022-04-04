import { PokemonTypeColors, Type } from 'types'

export const leftPad = (number: number, targetLength: number): string => {
  let output = Math.abs(number).toString()
  while (output.length < Math.abs(targetLength)) {
    output = '0' + output
  }
  return output
}

export const getBackgroundColor = (type: Type) => {
  const [backgroundColor] = Object.entries(PokemonTypeColors).filter(
    ([key]) => key === type.type.name
  )
  return backgroundColor
}
