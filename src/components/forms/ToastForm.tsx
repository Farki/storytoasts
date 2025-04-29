"use client";

import React, {
  FormEvent,
  startTransition,
  useActionState,
  useRef,
} from "react";
import { LoaderCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { createUpdateToasts } from "@/server/actions/toastAction";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { toastFormSchema, toastSchema } from "@/validations/toastFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import ToastFormCard from "@/components/forms/ToastFormCard";
import { Toast } from "@/generated/prisma";

type ToastFormData = z.infer<typeof toastFormSchema>;
type Toasts = z.infer<typeof toastSchema>[];

type Props = {
  toasts: Toasts;
};

export default function ToastForm({ toasts, ...props }: Props) {
  const { data: session } = useSession(); //TODO: auth
  const [state, formAction, isPending] = useActionState(createUpdateToasts, {});

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ToastFormData>({
    resolver: zodResolver(toastFormSchema),
    mode: "onChange",
    defaultValues: {
      toasts,
      // ...(state?.fields && state.fields),
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { isValid },
  } = form;

  const toastsArray = useFieldArray({ control, name: "toasts" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit((data) => {
      startTransition(() => {
        formAction(data);
      });
    })(e);
  };

  const onAddNew = () => {
    toastsArray.append({
      title: "",
      text: "",
      time: "",
    });
  };

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={onSubmit} {...props}>
        <div className="mb-4 space-y-4 rounded-2xl border-2 border-gray-300/80 p-6">
          {toastsArray.fields.map((toast, id) => (
            <ToastFormCard
              key={id}
              id={id}
              toast={toast as Toast}
              form={form}
              setValue={setValue}
            />
          ))}

          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onAddNew}
              className="rounded-full p-3 hover:bg-blue-500 hover:text-white"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button type="submit" disabled={!isValid}>
          {isPending ? (
            <>
              <LoaderCircle className="animate-spin" /> {"Saving..."}
            </>
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </Form>
  );
}
