import authConfig from "@/auth";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }