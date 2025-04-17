import NextAuth from "next-auth"
import Passkey from "next-auth/providers/passkey"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Passkey],
  experimental: { enableWebAuthn: true },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
})

// マイグレーション関連のコードは一旦削除