/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yahel-s3-inventorymanagement.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ], 
    
  },
};

export default nextConfig;