import * as z from "zod";

export const toastSchema = z
  .object({
    id: z.string().nullish(),
    title: z.string().min(1),
    text: z.string().min(1),
    time: z.string().min(1),
    image: z
      .union([z.instanceof(File), z.string().url(), z.null(), z.undefined()])
      .optional(), // input from form
    imageUrl: z.string().url().optional(), // existing saved image URL
    projectId: z.string().optional(),
  })
  .refine((data) => data.imageUrl || data.image, {
    message: "Image is required if imageUrl is missing.",
    path: ["image"], // points the error at the image field
  });

export const toastFormSchema = z.object({
  toasts: z.array(toastSchema),
});
