import { signOut } from "@/auth"
 
export default function SignOut() {
  return (
    <form className="flex flex-col items-center justify-center min-h-screen"
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/" })
      }}
    >
      <button type="submit" className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Out</button>
    </form>
  )
}