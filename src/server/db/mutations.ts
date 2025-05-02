import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { toastSchema } from "@/validations/toastFormSchema";
type Toast = z.infer<typeof toastSchema>;
type ToastWithId = z.infer<typeof toastSchema> & { id: string };

export const MUTATIONS = {
  createToast: async (toast: Toast, imageUrl: string, projectId: string) => {
    await prisma.toast.create({
      data: {
        title: toast.title,
        text: toast.text,
        time: toast.time,
        imageUrl: imageUrl,
        projectId: projectId, //TODO multiple projects
        order: toast.order,
      },
    });
  },

  updateToast: async (toast: ToastWithId, imageUrl: string) => {
    await prisma.toast.update({
      where: { id: toast.id },
      data: {
        title: toast.title,
        text: toast.text,
        time: toast.time,
        imageUrl: imageUrl!,
        order: toast.order,
      },
    });
  },

  deleteToast: async (id: string) => {
    return prisma.toast.delete({
      where: { id },
    });
  },
};
