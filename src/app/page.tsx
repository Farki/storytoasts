"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, Code, Settings, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-section");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative flex bg-background min-h-[calc(100vh-95px)] px-4">
        <div className="container mx-auto flex flex-col justify-center md:flex-row items-center gap-8">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-text opacity-0 transition-all duration-1000 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
              Transform Visitor Engagement with Impactful Notifications
            </h1>
            <p className="md:text-xl text-lime-50 mb-8">
              StoryToast delivers attention-grabbing notifications that connect
              with your visitors, driving meaningful engagement and better
              conversion rates.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/10"
                asChild
              >
                <Link href="/admin">View Demo</Link>
              </Button>
            </div>
          </div>

          {/* Demo Video */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <video
              className="w-full aspect-video object-cover"
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
      <section className="animate-section py-20 px-4 bg-white opacity-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#020817]">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Sign Up
              </h3>
              <p className="text-gray-700">
                Create your account and access the admin dashboard
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Create Notifications
              </h3>
              <p className="text-gray-700">
                Design your notifications and set display rules
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Add to Your Site
              </h3>
              <p className="text-gray-700">
                Copy our script and watch engagement grow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="animate-section py-20 px-4 bg-gray-50 opacity-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#020817]">
            Why Choose StoryToast?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors bg-white">
              <div className="bg-blue-100 p-3 rounded-lg text-primary-600 inline-block mb-4">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Smart Notifications
              </h3>
              <p className="text-gray-700">
                Create targeted notifications that appear at the perfect moment
                to maximize impact and engagement.
              </p>
            </Card>
            <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors bg-white">
              <div className="bg-blue-100 p-3 rounded-lg text-primary-600 inline-block mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Easy Integration
              </h3>
              <p className="text-gray-700">
                Simple copy-paste installation with our lightweight script. No
                complex setup required.
              </p>
            </Card>
            <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors bg-white">
              <div className="bg-blue-100 p-3 rounded-lg text-primary-600 inline-block mb-4">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Full Customization
              </h3>
              <p className="text-gray-700">
                Control every aspect of your notifications from timing to design
                through our intuitive dashboard.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-section py-20 px-4 bg-gradient-to-b from-blue-50 to-blue-100 opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#020817]">
            Ready to Transform Your Website?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Join thousands of websites using StoryToast to boost engagement and
            conversions.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            asChild
          >
            <Link href="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
