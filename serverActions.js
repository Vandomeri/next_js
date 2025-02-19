'use server'


export async function createUser(formData) {

    const prisma = new PrismaClient()
    const resp = await prisma.users.create({
        data: {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        }
    })
}