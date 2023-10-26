/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['localhost', 'usic-app-s3.s3.eu-north-1.amazonaws.com'],
  },
}

module.exports = nextConfig
