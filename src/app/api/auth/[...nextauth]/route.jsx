import NextAuth from 'next/next-auth'

const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        
    ]
})