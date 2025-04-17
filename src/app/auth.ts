import NextAuth from "next-auth"
import Passkey from "next-auth/providers/passkey"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Passkey],
  experimental: { enableWebAuthn: true },
})

// マイグレーション関連のコードは一旦削除