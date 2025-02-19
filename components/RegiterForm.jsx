'use client'

import { createUser } from "@/serverActions"
import { useState } from "react"


export default function RegiterForm() {



    const [status, setStatus] = useState(false)


    async function registerUser(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/register', {
            method: 'POST',
            body: formData
        })

        console.log(resp)

        if (resp) {
            setStatus(true)
        }
    }

    return (
        <div>
            <form action={createUser}>
                <input name="username" type="text" placeholder="Username" />
                <input name="email" type="email" placeholder="E-mail" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
            {status && (
                <p>Успешно!</p>
            )}

        </div>

    )
}
