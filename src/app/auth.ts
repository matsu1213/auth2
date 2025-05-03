import NextAuth from "next-auth"
import { D1Adapter } from "@auth/d1-adapter"
import Passkey from "next-auth/providers/passkey"
//import { PrismaAdapter } from "@auth/prisma-adapter"
//import { PrismaClient } from "@prisma/client"

//const prisma = new PrismaClient()
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Passkey],
  adapter: D1Adapter(env.db),
  experimental: { enableWebAuthn: true },
})