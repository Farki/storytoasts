"use server";

import { FormState } from "@/server/actions/signInAction";
import { put } from "@vercel/blob";
import { z } from "zod";
import { toastFormSchema, toastSchema } from "@/validations/toastFormSchema";
import { QUERIES } from "@/server/db/queries";
import { requireAuthenticatedUser } from "@/lib/authHelpers";
import { revalidatePath } from "next/cache";
import { PRIVATE_ROUTES } from "@/routes";
import { MUTATIONS } from "@/server/db/mutations";
type ToastWithId = z.infer<typeof toastSchema> & { id: string };

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
        await MUTATIONS.updateToast(toast as ToastWithId, imageUrl!);
      } else {
        await MUTATIONS.createToast(toast, imageUrl!, user.projects[0].id);
      }
    }
  } catch (error) {
    console.error(error);
    return {
      errors: ["Something went wrong"],
      success: false,
    };
  }

  revalidatePath(PRIVATE_ROUTES.Dashboard);

  return {
    success: true,
  };
}

export async function deleteToast(id: string) {
  await requireAuthenticatedUser();
  await MUTATIONS.deleteToast(id);

  revalidatePath(PRIVATE_ROUTES.Dashboard);
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
