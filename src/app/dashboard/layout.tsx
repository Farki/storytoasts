import Sidebar from "@/components/dashboard/Sidebar";
import Content from "@/components/dashboard/Content";
import Header from "@/components/dashboard/Header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen bg-gray-50">
      <Sidebar />

      <Content>
        <Header />
        <main className="p-6">{children}</main>
      </Content>
    </div>
  );
}
