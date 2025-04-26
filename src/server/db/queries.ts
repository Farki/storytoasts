import "server-only";
import { prisma } from "@/lib/prisma";

export const QUERIES = {
  getUser: async (email: string) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  },
};
