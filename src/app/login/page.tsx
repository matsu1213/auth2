"use client"
 
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/webauthn"
 
export default function Login() {
  const { data: session, status } = useSession()
 
  if (status === "loading") {
    return <div>Loading...</div>
  }
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {status === "authenticated" ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => signIn("passkey", { action: "register" })}
        >
          Register new Passkey
        </button>
      ) : status === "unauthenticated" ? (
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => signIn("passkey")}
        >
          Sign in with Passkey
        </button>
      ) : null}
    </div>
  )
}