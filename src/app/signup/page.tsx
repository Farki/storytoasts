"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";

const formSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // TODO: Implement signup logic
      console.log(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container min-h-screen relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col justify-center bg-gradient-to-b from-primary/80 to-primary p-10 text-white lg:flex dark:border-r">
        <div className="flex-col z-20 space-y-32 pt-20">
          {/* Animated Toast Notifications */}
          <div className="relative mx-auto w-full max-w-[400px] h-[300px]">
            {/* Toast 1 */}
            <div className="absolute top-0 left-0 w-full p-4 bg-white rounded-lg shadow-lg transform -rotate-6 animate-float-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20" />
                <div className="space-y-1">
                  <div className="h-2 w-24 bg-primary/20 rounded" />
                  <div className="h-2 w-32 bg-primary/10 rounded" />
                </div>
              </div>
            </div>

            {/* Toast 2 */}
            <div className="absolute top-20 right-0 w-full p-4 bg-white rounded-lg shadow-lg transform rotate-3 animate-float-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20" />
                <div className="space-y-1">
                  <div className="h-2 w-28 bg-primary/20 rounded" />
                  <div className="h-2 w-36 bg-primary/10 rounded" />
                </div>
              </div>
            </div>

            {/* Toast 3 */}
            <div className="absolute bottom-0 left-10 w-full p-4 bg-white rounded-lg shadow-lg transform -rotate-3 animate-float-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20" />
                <div className="space-y-1">
                  <div className="h-2 w-20 bg-primary/20 rounded" />
                  <div className="h-2 w-40 bg-primary/10 rounded" />
                </div>
              </div>
            </div>
          </div>
          <blockquote className="space-y-2">
            <p className="text-lg">
              "StoryToast transformed our user engagement completely. Our
              conversion rates increased by 150% within the first month of
              implementation!"
            </p>
            <footer className="text-sm">John Smith, CEO</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full text-white"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </Form>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
