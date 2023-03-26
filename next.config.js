const { withSuperjson } = require('next-superjson')

/** @type {import('next').NextConfig} */
const nextConfig = withSuperjson()({
  reactStrictMode: true,
  output: 'standalone',
})

module.exports = nextConfig
