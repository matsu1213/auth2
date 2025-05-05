import { auth } from "@/auth"

export default async function Dashboard() {
    const session = auth()

    if(!session) return <div>Not authenticated</div>

    return (
        <div>
            <pre></pre>
        </div>
    )
}