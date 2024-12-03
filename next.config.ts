/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      @use "src/styles/_variables" as *;
      @use "src/styles/_mixins" as *;
    `,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
