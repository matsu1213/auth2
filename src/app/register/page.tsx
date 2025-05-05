import { SessionProvider } from "next-auth/react"
import Register from "./register"

export default function RegisterPage(props: {
  searchParams: { callbackUrl: string | undefined }
}) {
  return (
    <SessionProvider>
      <Register callbackUrl={props.searchParams?.callbackUrl}/>
    </SessionProvider>
  )
}