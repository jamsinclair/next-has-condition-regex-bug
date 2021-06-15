module.exports = {
    async rewrites() {
        return [
            {
                source: '/current-host',
                has: [
                    {
                        type: 'host',
                        value: '(?<host>.*)',
                    },
                ], 
                destination: '/show-host/:host',
            }
        ]
    }
}
