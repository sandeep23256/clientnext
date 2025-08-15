/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // यह जरूरी है static site deploy के लिए
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;

