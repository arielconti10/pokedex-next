/**
 * File used by next-seo
 *
 * @see https://github.com/garmeeh/next-seo
 */
export default {
  titleTemplate: '%s - Pokedéx',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pokedex-next-wine.vercel.app',
    site_name: 'Pokedéx',
    title: 'Pokedéx',
    images: [
      {
        url: 'https://raw.githubusercontent.com/arielconti10/next-pokedex/master/public/img/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Pokedéx'
      }
    ]
  },
  twitter: {
    handle: '@arielconti10',
    site: 'http',
    cardType: 'summary_large_image'
  }
}
