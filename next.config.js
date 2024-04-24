/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              // pathname:'/dqn4cs8zo/**',
            },
          ],
      }
}

module.exports = nextConfig
