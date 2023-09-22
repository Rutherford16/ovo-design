/**
* @type {import('next').NextConfig}
*/

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        loader: 'akamai',
        path: '/ovo-design/',
    },
    assetPrefix: isProd ? '/ovo-design/' : undefined,
};

export default nextConfig;