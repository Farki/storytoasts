"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAction } from "@/server/actions/signInAction";
import { z } from "zod";
import React, {
  FormEvent,
  startTransition,
  useActionState,
  useRef,
} from "react";
import { LoaderCircle, Mail, X } from "lucide-react";
import { getCaptchaToken } from "@/lib/captcha";
import { signInFormSchema } from "@/validations/singInFormSchema";

type FormData = z.infer<typeof signInFormSchema>;

const SignInForm = () => {
  const [state, formAction, isPending] = useActionState(signInAction, {});

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(signInFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      ...(state?.fields && state.fields),
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const recaptchaToken = await getCaptchaToken();
    await handleSubmit(() => {
      startTransition(() => {
        const formData = new FormData(formRef.current!);
        formData.append("recaptchaToken", recaptchaToken ?? "");
        formAction(formData);
      });
    })(e);
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={onSubmit}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={!isValid}>
          {isPending ? (
            <>
              <LoaderCircle className="animate-spin" /> {"Signing in..."}
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
      <div className="flex items-center justify-center text-muted-foreground">
        <Mail />
        <p className="mx-2 text-center text-sm text-muted-foreground">
          {"We'll send a magic link to your inbox"}
        </p>
      </div>
      {state?.message && (
        <p className="text-center text-red-500">{state.message}</p>
      )}

      {state?.errors && (
        <div className="text-red-500">
          <ul>
            {state.errors.map((error) => (
              <li key={error} className="flex gap-1">
                <X fill="red" />
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Form>
  );
};

export default SignInForm;
