import { Prisma } from "@/generated/prisma";
import { auth } from "@/server/auth";
import { QUERIES } from "@/server/db/queries";

type UserWithProjects = Prisma.UserGetPayload<{ include: { projects: true } }>;

export async function requireAuthenticatedUser(): Promise<UserWithProjects> {
  const session = await auth();
  if (!session?.user?.email) throw new Error("Not authenticated");
  const user = await QUERIES.getUser(session.user.email);
  if (!user) throw new Error("User not found");
  return user;
}
