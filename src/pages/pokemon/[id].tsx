import PokemonLayout from 'layouts/pokemon'
import { NextSeo } from 'next-seo'

const PokemonPage = () => (
  <>
    <NextSeo title="Pokemon" />
    <PokemonLayout />
  </>
)

export default PokemonPage
