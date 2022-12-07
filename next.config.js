/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
