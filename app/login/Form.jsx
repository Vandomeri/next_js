'use client'
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";



export default function Form() {

    const router = useRouter()

    async function logIn(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (resp?.ok) {
            router.push('/')
        }
    }

    return (
        <div>
            <form className="max-w-[500px] mx-auto flex flex-col gap-y-4" onSubmit={logIn}>
                <Input required name="email" type="email" placeholder="E-mail" />
                <Input required name="password" type="password" placeholder="Password" />
                <Button type="submit">Войти</Button>
            </form>

        </div>
    )
}
