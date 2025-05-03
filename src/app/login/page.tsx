import { SessionProvider } from "next-auth/react"
import Login from "./login"

export default function LoginPage() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  )
}