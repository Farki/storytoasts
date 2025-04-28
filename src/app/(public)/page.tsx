import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, Code, Settings } from "lucide-react";
import Link from "next/link";
import { PRIVATE_ROUTES } from "@/routes";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-screen bg-dark px-4">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-display animate-text mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_auto] bg-clip-text text-2xl font-bold leading-tight text-transparent transition-all duration-1000 md:text-5xl lg:text-6xl">
              Transform Visitor Engagement with Impactful Notifications
            </h1>
            <p className="mb-8 text-white md:text-xl">
              StoryToast delivers attention-grabbing notifications that connect
              with your visitors, driving meaningful engagement and better
              conversion rates.
            </p>
            <div className="mb-12 flex justify-center gap-4 md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href={PRIVATE_ROUTES.Dashboard}>Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white"
                asChild
              >
                <Link href="/dashboard">View Demo</Link>
              </Button>
            </div>
          </div>

          {/* Demo Video */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <video
              className="aspect-video w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Sign Up
              </h3>
              <p className="text-gray-600">
                Create your account and access the admin dashboard
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Create Notifications
              </h3>
              <p className="text-gray-600">
                Design your notifications and set display rules
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Add to Your Site
              </h3>
              <p className="text-gray-600">
                Copy our script and watch engagement grow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Why Choose StoryToast?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-gray-200 bg-white p-6 transition-colors hover:border-primary/40">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <Bell className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Smart Notifications
              </h3>
              <p className="text-gray-600">
                Create targeted notifications that appear at the perfect moment
                to maximize impact and engagement.
              </p>
            </Card>
            <Card className="border-gray-200 bg-white p-6 transition-colors hover:border-primary/40">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Simple copy-paste installation with our lightweight script. No
                complex setup required.
              </p>
            </Card>
            <Card className="border-gray-200 bg-white p-6 transition-colors hover:border-primary/40">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Full Customization
              </h3>
              <p className="text-gray-600">
                Control every aspect of your notifications from timing to design
                through our intuitive dashboard.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Ready to Transform Your Website?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Join thousands of websites using StoryToast to boost engagement and
            conversions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href={PRIVATE_ROUTES.Dashboard}>Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
