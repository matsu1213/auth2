import { SessionProvider } from "next-auth/react"
import Login from "./login"

export default function LoginPage(props: {
  searchParams: { callbackUrl: string | undefined }
}) {
  return (
    <SessionProvider>
      <Login searchParams={props.searchParams}/>
    </SessionProvider>
  )
}