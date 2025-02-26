'use client'

import { Button } from "@/components/UI/button"
import { Input } from "@/components/UI/input"
import { createUser } from "@/serverActions"
import { useActionState } from "react"

export default function RegisterServer() {

    const initialState = {
        message: ''
    }

    const [state, serverAction, pending] = useActionState(createUser, initialState)

    return (
        <div>
            <form className="max-w-[500px] mx-auto flex flex-col gap-y-4" action={serverAction}>
                <Input required name="fio" type="text" placeholder="ФИО" />
                <Input required name="email" type="email" placeholder="E-mail" />
                <Input required name="phone" type="tel" placeholder="Номер телефона" />
                <Input required name="password" type="password" placeholder="Password" />
                <Button disabled={pending} type="submit">Зарегестрироваться</Button>
            </form>

        </div>
    )
}
