module.exports = {
    images: {
        domains: ['images.unsplash.com', 'plus.unsplash.com'], 
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