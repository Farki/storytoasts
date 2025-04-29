"use server";

import { prisma } from "@/lib/prisma";
import { FormState } from "@/server/actions/signInAction";
import { put } from "@vercel/blob";
import { z } from "zod";
import { toastFormSchema, toastSchema } from "@/validations/toastFormSchema";
import { QUERIES } from "@/server/db/queries";
import { requireAuthenticatedUser } from "@/lib/authHelpers";

export async function getToasts(): Promise<z.infer<typeof toastSchema>[]> {
  const user = await requireAuthenticatedUser();

  const toasts = await QUERIES.getToasts(user.id!);
  return toasts;
}

export async function createUpdateToasts(
  prevState: FormState,
  data: z.infer<typeof toastFormSchema>,
): Promise<FormState> {
  const user = await requireAuthenticatedUser();

  const { toasts } = data;
  console.log("toasts", toasts);

  try {
    for (const toast of toasts) {
      const imageFile = toast.image;
      let imageUrl = toast.imageUrl;
      if (imageFile instanceof File) {
        const blob = await put(imageFile.name, imageFile, {
          access: "public",
          addRandomSuffix: true,
        });
        imageUrl = blob.url;
      }

      if (toast.id) {
        await prisma.toast.update({
          where: { id: toast.id },
          data: {
            title: toast.title,
            text: toast.text,
            time: toast.time,
            imageUrl: imageUrl!,
          },
        });
      } else {
        await prisma.toast.create({
          data: {
            title: toast.title,
            text: toast.text,
            time: toast.time,
            imageUrl: imageUrl!,
            projectId: user.projects[0].id, //TODO multiple projects
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
    return {
      errors: ["Something went wrong"],
      success: false,
    };
  }

  return {
    success: true,
  };
}

// export async function createToast(data: {
//   name: string;
//   text: string;
//   image?: string;
// }) {
//   const session = await auth();
//   if (!session?.user?.email) throw new Error("Not authenticated");
//
//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email },
//   });
//   if (!user) throw new Error("User not found");
//
//   return prisma.toast.create({
//     data: {
//       ...data,
//       userId: user.id,
//     },
//   });
// }
//
// export async function updateToast(data: {
//   id: string;
//   name: string;
//   text: string;
//   image?: string;
// }) {
//   const session = await auth();
//   if (!session?.user?.email) throw new Error("Not authenticated");
//
//   const toast = await prisma.toast.findUnique({
//     where: { id: data.id },
//     include: { user: true },
//   });
//
//   if (!toast || toast.user.email !== session.user.email) {
//     throw new Error("Not authorized");
//   }
//
//   return prisma.toast.update({
//     where: { id: data.id },
//     data: {
//       name: data.name,
//       text: data.text,
//       image: data.image,
//     },
//   });
// }
//
// export async function deleteToast(id: string) {
//   const session = await auth();
//   if (!session?.user?.email) throw new Error("Not authenticated");
//
//   const toast = await prisma.toast.findUnique({
//     where: { id },
//     include: { user: true },
//   });
//
//   if (!toast || toast.user.email !== session.user.email) {
//     throw new Error("Not authorized");
//   }
//
//   return prisma.toast.delete({
//     where: { id },
//   });
// }
//
// export async function getToasts() {
//   const session = await auth();
//   if (!session?.user?.email) throw new Error("Not authenticated");
//
//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email },
//   });
//   if (!user) throw new Error("User not found");
//
//   return prisma.toast.findMany({
//     where: { userId: user.id },
//     orderBy: { createdAt: "desc" },
//   });
// }
