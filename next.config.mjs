/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**'
      }
    ]
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
