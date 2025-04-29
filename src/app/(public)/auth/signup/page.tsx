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
import { PUBLIC_ROUTES } from "@/routes";
import { BarChart3, DollarSign, LineChart } from "lucide-react";

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
    <div className="container relative -mt-[64px] grid h-screen flex-col items-center justify-center md:-mt-[81px] lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-gradient-to-br from-primary via-purple-600 to-primary p-10 text-white lg:flex">
        <div className="relative z-20 mt-auto">
          {/* Animated Dashboard Cards */}
          <div className="relative h-[500px] w-full max-w-[500px]">
            {/* Line Chart Card */}
            <div className="absolute left-16 top-0 w-full rotate-[-6deg] transform rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:rotate-[-4deg]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">Income</h3>
                  <LineChart className="h-5 w-5 text-primary" />
                </div>
                <div className="flex h-32 items-end justify-between gap-1">
                  {[40, 70, 55, 90, 50, 75, 65].map((height, i) => (
                    <div
                      key={i}
                      className="w-full animate-pulse rounded-t bg-primary/20"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Stats Card */}
            <div className="absolute left-32 top-32 w-full rotate-[-6deg] transform rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:rotate-[-4deg]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">
                    Recent Transactions
                  </h3>
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-1"
                    >
                      <div className="h-3 w-2/3 animate-pulse rounded bg-gray-100" />
                      <div className="h-3 w-1/4 animate-pulse rounded bg-primary/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bar Chart Card */}
            <div className="absolute left-48 top-64 w-full rotate-[-6deg] transform rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:rotate-[-4deg]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">
                    Product Performance
                  </h3>
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex h-24 items-end justify-between gap-2">
                  {[60, 80, 40, 90, 30, 70].map((height, i) => (
                    <div
                      key={i}
                      className="w-full animate-pulse rounded-t bg-primary"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <blockquote className="mt-12 space-y-2">
            <p className="text-lg">
              {
                '"StoryToast has transformed how we engage with our visitors. Theresults have been incredible."'
              }
            </p>
            <footer className="text-sm">Sofia Davis, Marketing Director</footer>
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
              href={PUBLIC_ROUTES.SignIn}
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
