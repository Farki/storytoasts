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
import { BarChart3, LineChart, DollarSign } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // TODO: Implement login logic
      console.log(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-gradient-to-br from-primary via-purple-600 to-primary p-10 text-white lg:flex dark:border-r">
        <div className="relative z-20 mt-auto">
          {/* Animated Dashboard Cards */}
          <div className="relative w-full max-w-[500px] h-[500px]">
            {/* Line Chart Card */}
            <div className="absolute top-0 left-16 w-full p-6 bg-white rounded-2xl shadow-xl transform rotate-[-6deg] hover:rotate-[-4deg] transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-800 font-semibold">Income</h3>
                  <LineChart className="text-primary h-5 w-5" />
                </div>
                <div className="h-32 flex items-end justify-between gap-1">
                  {[40, 70, 55, 90, 50, 75, 65].map((height, i) => (
                    <div
                      key={i}
                      className="w-full bg-primary/20 rounded-t animate-pulse"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Stats Card */}
            <div className="absolute top-32 left-32 w-full p-6 bg-white rounded-2xl shadow-xl transform rotate-[-6deg] hover:rotate-[-4deg] transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-800 font-semibold">
                    Recent Transactions
                  </h3>
                  <DollarSign className="text-primary h-5 w-5" />
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-1"
                    >
                      <div className="w-2/3 h-3 bg-gray-100 rounded animate-pulse" />
                      <div className="w-1/4 h-3 bg-primary/20 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bar Chart Card */}
            <div className="absolute top-64 left-48 w-full p-6 bg-white rounded-2xl shadow-xl transform rotate-[-6deg] hover:rotate-[-4deg] transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-800 font-semibold">
                    Product Performance
                  </h3>
                  <BarChart3 className="text-primary h-5 w-5" />
                </div>
                <div className="h-24 flex items-end justify-between gap-2">
                  {[60, 80, 40, 90, 30, 70].map((height, i) => (
                    <div
                      key={i}
                      className="w-full bg-primary rounded-t animate-pulse"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <blockquote className="space-y-2 mt-12">
            <p className="text-lg">
              "StoryToast has transformed how we engage with our visitors. The
              results have been incredible."
            </p>
            <footer className="text-sm">Sofia Davis, Marketing Director</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              <Button
                type="submit"
                className="w-full text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Form>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
