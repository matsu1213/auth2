"use client"
 
import { SessionProvider, useSession } from "next-auth/react"
import { signIn } from "next-auth/webauthn"
import Link from 'next/link'
 
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
        <form
          action={() => {
            signIn("passkey", { redirectTo: "/dashboard" })
          }}
        >
          <button type="submit">
            パスキーでログインする
          </button>
        </form>
        <div>
          <a>
            登録していませんか？
          </a>
          <Link
            className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            href="/register"
          >
            新規登録する
          </Link>
        </div>
    </div>
  )
}