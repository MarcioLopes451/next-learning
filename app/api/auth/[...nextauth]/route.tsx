import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

type Pros = {
    sessions: null;
    profile: string;
}

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId: '',
            clientSecret: ''
        })
    ],
    
})

export { handler as GET, handler as POST}

{/*async session({sessions}) {

    },
    async signIn({profile}) {
       
    },*/}