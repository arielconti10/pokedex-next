import { x } from '@xstyled/styled-components'

type Props = {
  title: string
  content: React.ReactNode
}

const PokemonInformation = ({ title, content }: Props) => {
  return (
    <x.li display="grid" gridTemplateColumns="2" gap={1} mb={3}>
      <x.span color="gray-500" fontSize="medium" fontWeight="bold">
        {title}
      </x.span>
      <x.span color="gray-900">{content}</x.span>
    </x.li>
  )
}
export default PokemonInformation
