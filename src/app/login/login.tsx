"use client"
 
import { SessionProvider, useSession } from "next-auth/react"
import { signIn } from "next-auth/webauthn"
import Link from 'next/link'
 
export default function Login({
  searchParams,
}: {
  searchParams: { callbackUrl?: string }
}) {
  const { data: session, status } = useSession()
 
  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p>既にログインしています！</p>
        <a href="/logout" className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">ログアウト</a>
      </div>
    )
  }
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <form
          action={async () => {
            await signIn("passkey", { redirectTo: searchParams.callbackUrl || "/dashboard" })
          }}
        >
          <button type="submit" className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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