import { Card } from "@/components/ui/card";
import {
  Bell,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Code,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  const stats = [
    {
      name: "Total Notifications",
      value: "1,234",
      change: "+12.3%",
      trend: "up",
      icon: Bell,
    },
    {
      name: "Active Users",
      value: "567",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      name: "Engagement Rate",
      value: "24.5%",
      change: "-2.1%",
      trend: "down",
      icon: Activity,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center gap-4">
              <stat.icon className="h-8 w-8 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <h3 className="text-2xl font-bold tracking-tight">
                  {stat.value}
                </h3>
                <div className="flex items-center gap-1 text-sm">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-b pb-4 last:border-0"
              >
                <Bell className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="font-medium">Notification Title {i}</p>
                  <p className="text-sm text-muted-foreground">
                    Displayed 1,234 times • 56% engagement rate
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Websites</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-b pb-4 last:border-0"
              >
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                  <Code className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">example{i}.com</p>
                  <p className="text-sm text-muted-foreground">
                    3 active notifications • Last updated 2h ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
