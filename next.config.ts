/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@local/ui'],
  modularizeImports: {
    '@local/hooks': {
      transform: '@local/hooks/{{ member }}',
    },
    '@local/ui/components': {
      transform: '@local/ui/components/{{ camelCase member }}/{{ member }}',
      skipDefaultConversion: true,
    },
    '@local/ui/slices': {
      transform: '@local/ui/slices/{{ camelCase member }}/{{ member }}',
      skipDefaultConversion: true,
    },
  },
  images: {
    deviceSizes: [1, 640, 960, 1200, 1920, 2400],
    imageSizes: [48, 96, 160, 320],
    domains: ['cdn.shopify.com', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
    loader: 'default',
  },
  sassOptions: {
    prependData: `
      @use "sass:math";
      $debug: ${process.env.NODE_ENV !== 'production'};
      @import 'styles/global.scss';
    `,
  },  
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;