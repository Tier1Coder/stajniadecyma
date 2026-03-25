import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  ...(isDev ? {} : { output: 'export' as const }),
  distDir: isDev ? '.next-dev' : '.next',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
