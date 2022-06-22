/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    },
    pwa: {
      dest: 'public',
      disable: !isProd
    },
    images: {
      domains: ['images.ctfassets.net', 'raw.githubusercontent.com'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      minimumCacheTTL: 60,
      maxWidth: 1920,
      maxHeight: 1080,
      quality: 80
    },
    headers: [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      },
    ],

    // Replace React with Preact
    webpack: (config, { dev, isServer }) => {
      // only in client production build
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })

      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat'
        })
      }

      return config
    }
  })
)
