/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    
    output: 'export',
    // Optional: Add other static export configurations like trailingSlash
    };
  },
};

module.exports = nextConfig;
