import { redirect } from "next/navigation";
import { PUBLIC_ROUTES } from "@/routes";
import { auth } from "@/server/auth";
import Sidebar from "@/app/dashboard/sidebar";
import Content from "./content";
import Header from "@/app/dashboard/header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = (await auth())?.user?.email;
  if (!user) {
    redirect(PUBLIC_ROUTES.SignIn);
  }

  return (
    <div className="relative flex min-h-screen bg-background text-white">
      <Sidebar />

      <Content>
        <Header />
        <main className="p-6">{children}</main>
      </Content>
    </div>
  );
}
