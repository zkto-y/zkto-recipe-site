/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // builds the site as static HTML/CSS/JS files (the "out" folder)
  images: {
    unoptimized: true,     // required for static export since there's no image server
  },
  trailingSlash: true,     // nicer for static hosting (creates recipe/index.html)
};

module.exports = nextConfig;
