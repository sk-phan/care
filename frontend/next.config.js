module.exports = {
    images: {
        domains: ['images.unsplash.com'], 
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