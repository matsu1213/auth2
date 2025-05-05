import NextAuth from "next-auth"
import Passkey from "next-auth/providers/passkey"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "../generated/prisma/client"

const prisma = new PrismaClient()
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [Passkey({
    formFields: {
      email: {
        label: "Username",
        required: true,
        autocomplete: "username webauthn",
      },
    },
  }),],
  adapter: PrismaAdapter(prisma),
  experimental: { enableWebAuthn: true },
  pages: {
  },
})