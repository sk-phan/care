module.exports = {
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
        ]
    },
}