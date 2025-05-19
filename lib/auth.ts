import { getServerSession } from "next-auth"
import { NextAuthOptions, DefaultSession, User } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id?: string
    } & DefaultSession["user"]
  }
}

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const authOptions: NextAuthOptions = {  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const parsedCredentials = userSchema.safeParse(credentials);
        
        if (!parsedCredentials.success) {
          return null;
        }

        // TODO: Replace with your actual user authentication logic
        // This is just a demo implementation
        if (parsedCredentials.data.email === "demo@example.com" && 
            parsedCredentials.data.password === "password123") {
          return {
            id: "1",
            email: parsedCredentials.data.email,
            name: "Demo User",
          };
        }
        
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/signup',
  },  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.provider = account?.provider;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export const getAuthSession = () => getServerSession(authOptions)
