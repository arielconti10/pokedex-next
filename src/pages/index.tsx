import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'

import HomeLayout from 'layouts/Home'

const HomePage = () => {
  return (
    <>
      <NextSeo title="Home" />

      <HomeLayout />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {}
  }
}

export default HomePage
