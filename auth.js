import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

const authConfig = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            credentials: {
                email: '',
                password: ''
            },
            async authorize(credentials) {

                const prisma = new PrismaClient()

                const resp = await prisma.users.findFirst({
                    where: {
                        email: credentials.email
                    }
                })

                const correctPass = await compare(credentials.password, resp.password)

                if (correctPass) {
                    return {
                        id: resp.id,
                        email: resp.email,
                        role: resp.role,
                        fio: resp.fio
                    }
                }


                return null
            }
        })
    ],
    callbacks: {
        async jwt({ user, token }) {
            if (user) {
                token.id = user.id
                token.fio = user.fio
                token.role = user.role
                token.email = user.email
            }
            return token
        },
        async session({ session, token, user }) {
            session.user.id = token.id
            session.user.role = token.role
            return session
        }
    }
}


export default authConfig