import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const sessions = await getSession()

    if(!sessions?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: sessions.user.email as string
      }
    });

    if(!currentUser) {
      return null;
    }

    return currentUser;
    
  } catch (error: any) {
    return null;
  }
}