import NextAuth from "next-auth"
import { D1Adapter, up } from "@auth/d1-adapter"
import Passkey from "next-auth/providers/passkey"
//import { PrismaAdapter } from "@auth/prisma-adapter"
//import { PrismaClient } from "@prisma/client"

//const prisma = new PrismaClient()
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Passkey],
  adapter: D1Adapter(env.db),
  experimental: { enableWebAuthn: true },
})

let migrated = false
async function migrationHandle({ event, resolve }) {
  if (!migrated) {
    try {
      await up(event.platform.env.db)
      migrated = true
    } catch (e) {
      console.log(e.cause.message, e.message)
    }
  }
  return resolve(event)
}