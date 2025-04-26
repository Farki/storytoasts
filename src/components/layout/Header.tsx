import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/routes";

export function Header() {
  return (
    <header className="flex justify-center fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center px-8 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-8 md:h-14" />
        </Link>

        <div className="flex-1 flex justify-end">
          <nav className="flex items-center space-x-4">
            <Button
              variant="default"
              // className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href={PUBLIC_ROUTES.SignIn}>Sign In</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
