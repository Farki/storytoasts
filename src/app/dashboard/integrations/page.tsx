"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Code, Copy, ExternalLink } from "lucide-react";

export default function IntegrationPage() {
  const scriptCode = `<script src="https://cdn.storytoast.com/script.js" data-key="YOUR_API_KEY"></script>`;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Integration</h2>
        <p className="text-muted-foreground">
          Add StoryToast to your website with a simple script tag.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Installation</h3>
              <p className="text-sm text-muted-foreground">
                Copy and paste this code just before the closing {"</body>"} tag
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                <code className="text-sm">{scriptCode}</code>
              </pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => navigator.clipboard.writeText(scriptCode)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your API Key</label>
              <div className="flex gap-2">
                <Input value="sk_test_123456789" readOnly />
                <Button variant="secondary">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Documentation & Resources</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" className="justify-start" asChild>
              <a href="/docs" target="_blank">
                <Code className="h-4 w-4 mr-2" />
                Documentation
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <a href="/examples" target="_blank">
                <Code className="h-4 w-4 mr-2" />
                Example Projects
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
