"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { GripVertical, Trash } from "lucide-react";
import { Controller } from "react-hook-form";
import FileUpload from "@/components/forms/FileUpload";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toast } from "@/generated/prisma";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { deleteToast } from "@/server/actions/toastAction";
import { z } from "zod";
import { toastSchema } from "@/validations/toastFormSchema";

type ToastWithFieldId = z.infer<typeof toastSchema> & {
  fieldId: string;
};

type Props = {
  toast: ToastWithFieldId;
  id: number;
  form: any; //TODO: types
  setValue: any; //TODO: types
  handleToastDelete: any; //TODO: types
};

export default function ToastFormCard({
  form,
  setValue,
  toast,
  id,
  handleToastDelete,
}: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: toast.fieldId });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Card className="p-6 shadow-lg" ref={setNodeRef} style={style}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div
          className="col-span-1 flex items-center justify-center md:col-span-1"
          {...listeners}
          {...attributes}
        >
          <GripVertical className="text-gray-600/70" />
        </div>
        <div className="col-span-1 flex items-center justify-center md:col-span-2">
          <Controller
            control={form.control}
            name={`toasts.${id}.image`}
            render={({ field: { onChange } }) => (
              <FileUpload
                imageUrl={toast.imageUrl}
                setValue={setValue}
                isError={!!form.formState.errors.image}
                id={id}
              />
            )}
          />
        </div>
        <div className="col-span-1 space-y-2 md:col-span-7">
          <FormField
            control={form.control}
            name={`toasts.${id}.title`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Title"
                    className={form.formState.errors.title && "border-red-500"}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`toasts.${id}.text`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Text"
                    className={form.formState.errors.text && "border-red-500"}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <FormField
            control={form.control}
            name={`toasts.${id}.time`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="1m"
                    className={form.formState.errors.time && "border-red-500"}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div
            className="group mt-2 flex h-10 cursor-pointer items-center justify-center"
            onClick={() => handleToastDelete(toast.id)}
            title="Delete"
          >
            <Trash className="text-gray-400 transition-colors duration-150 group-hover:text-red-500" />
          </div>
        </div>
      </div>
    </Card>
  );
}
