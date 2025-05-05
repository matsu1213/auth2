"use client"
 
import { SessionProvider, useSession } from "next-auth/react"
import { signIn } from "next-auth/webauthn"
 
export default function Login({
  callbackUrl
}: {
  callbackUrl: string | undefined
}) {
  const { data: session, status } = useSession()
 
  if (status === "loading") {
    return <div>Loading...</div>
  }
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div>
          <button
            className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => signIn("passkey", { action: "register" }, { redirectTo: callbackUrl?? "/dashboard" })}
          >
            パスキーを登録する
          </button>
        </div>
    </div>
  )
}