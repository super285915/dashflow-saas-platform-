import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const config = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Here you would typically validate against your database
        if (!credentials?.email || !credentials?.password) return null
        
        // This is a demo user - in production, validate against your DB
        if (credentials.email === "demo@example.com" && credentials.password === "demo12345") {
          return {
            id: "1",
            email: credentials.email,
            name: "Demo User",
          }
        }
        
        return null
      },
    }),
  ],
  callbacks: {
    signIn({ user, account, profile }) {
      const { pathname } = new URL(String(account?.callback_url ?? ''))
      if (pathname === "/dashboard") return !!user
      return true
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
} satisfies AuthOptions

export const { handlers, auth, signIn, signOut } = NextAuth(config)
