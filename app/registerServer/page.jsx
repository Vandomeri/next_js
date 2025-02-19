import { createUser } from "@/serverActions"
import { PrismaClient } from "@prisma/client"

export default function RegisterServer() {

    return (
        <div>
            <form action={createUser}>
                <input name="username" type="text" placeholder="Username" />
                <input name="email" type="email" placeholder="E-mail" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
