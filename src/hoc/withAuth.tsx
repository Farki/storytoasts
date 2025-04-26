import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const withAuth = (WrappedComponent: React.FC) => {
  return function ProtectedComponent(props: any) {
    const { data: session } = useSession();

    if (typeof window !== "undefined" && session?.user?.email === undefined) {
      redirect("/auth/sign-in"); // Redirect if no session
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
