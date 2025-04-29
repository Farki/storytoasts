import ToastForm from "@/components/forms/ToastForm";
import { Metadata } from "next";
import { Container } from "@react-email/components";
import { getToasts } from "@/server/actions/toastAction";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const toasts = await getToasts();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Toast Builder</h2>
        <p className="text-muted-foreground">
          Create and manage your custom toasts.
        </p>
      </div>

      <div className="flex-col">
        <div>Test</div>

        <Container>
          <ToastForm toasts={toasts} />
        </Container>
      </div>
    </div>
  );
}
