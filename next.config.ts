import type { NextConfig } from 'next';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig: NextConfig = {
  /* config options here */
};

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform().catch(console.error);
}

export default nextConfig;
