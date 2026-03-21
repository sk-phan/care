const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);