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
import { createUpdateToasts, deleteToast } from "@/server/actions/toastAction";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { toastFormSchema, toastSchema } from "@/validations/toastFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";
//fix hydration error
const ToastFormCard = dynamic(
  () => import("@/components/forms/ToastFormCard"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-28 w-full rounded-md" />,
  },
);

type ToastFormData = z.infer<typeof toastFormSchema>;
type Toasts = z.infer<typeof toastSchema>[];
type ToastWithFieldId = z.infer<typeof toastSchema> & {
  fieldId: string;
};

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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit((data) => {
      startTransition(() => {
        formAction(data);
      });
    })(e);
  };

  const toastsArray = useFieldArray({
    control,
    name: "toasts",
    keyName: "fieldId",
  });

  const onAddNew = () => {
    toastsArray.append({
      title: "",
      text: "",
      time: "",
    });
  };

  const onDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    const oldIndex = toastsArray.fields.findIndex(
      (item) => item.fieldId === active.id,
    );
    const newIndex = toastsArray.fields.findIndex(
      (item) => item.fieldId === over.id,
    );

    if (oldIndex === -1 || newIndex === -1) return;

    toastsArray.move(oldIndex, newIndex);
  };

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const handleToastDelete = (position: number, id?: string | null) => {
    if (!id) {
      toastsArray.remove(position);
    } else {
      deleteToast(id);
      toastsArray.remove(position);
    }
  };

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={onSubmit} {...props}>
        <div className="rounded-2xl border border-gray-300/80 p-6">
          <DndContext sensors={sensors} onDragEnd={onDragEnd}>
            <div className="mb-4 space-y-4">
              <SortableContext
                items={toastsArray.fields.map((field) => field.fieldId)}
                strategy={verticalListSortingStrategy}
              >
                {toastsArray.fields.map((toast, id) => (
                  <ToastFormCard
                    key={toast.fieldId}
                    id={id}
                    toast={toast as ToastWithFieldId}
                    form={form}
                    setValue={setValue}
                    handleToastDelete={() => handleToastDelete(id, toast?.id)}
                  />
                ))}
              </SortableContext>
            </div>
          </DndContext>

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
        <div className="mt-6 flex justify-center">
          <Button type="submit" disabled={!isValid}>
            {isPending ? (
              <>
                <LoaderCircle className="animate-spin" /> {"Saving..."}
              </>
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
