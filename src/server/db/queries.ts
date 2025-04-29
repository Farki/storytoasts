import "server-only";
import { prisma } from "@/lib/prisma";
import { Prisma, Toast } from "@/generated/prisma";

type UserWithProjects = Prisma.UserGetPayload<{ include: { projects: true } }>;

export const QUERIES = {
  getUser: async (email: string): Promise<UserWithProjects | null> => {
    return await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        projects: true,
      },
    });
  },

  getToasts: async (userId: string): Promise<Toast[]> => {
    return await prisma.toast.findMany({
      where: {
        project: {
          userId: userId,
        },
      },
    });
  },
};
