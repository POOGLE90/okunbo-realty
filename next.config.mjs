/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false
  },
  compiler: {
    // Enables the styled-components plugin
    styledComponents: true
  }
};

export default nextConfig;
