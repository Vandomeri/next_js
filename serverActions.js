'use server'

import { PrismaClient } from "@prisma/client"
import { hashSync } from "bcryptjs"
import { redirect } from "next/navigation"


export async function createUser(prevState, formData) {

    const prisma = new PrismaClient()
    const resp = await prisma.users.create({
        data: {
            fio: formData.get('fio'),
            email: formData.get('email'),
            password: hashSync(formData.get('password'), 10),
            phone: formData.get('phone')

        }
    })

    redirect(`/login`) // Navigate to the new post page

}