"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bell,
  Edit,
  Trash2,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Code,
  Users,
  Activity,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function NotificationsPage() {
  const [notifications] = useState([
    {
      id: 1,
      title: "Welcome Message",
      type: "Popup",
      status: "Active",
      views: 1234,
      engagement: "23%",
    },
    {
      id: 2,
      title: "Special Offer",
      type: "Banner",
      status: "Inactive",
      views: 567,
      engagement: "15%",
    },
    {
      id: 3,
      title: "Newsletter Signup",
      type: "Modal",
      status: "Active",
      views: 890,
      engagement: "45%",
    },
  ]);

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">
            Manage your website notifications here.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Engagement</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    {notification.title}
                  </div>
                </TableCell>
                <TableCell>{notification.type}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      notification.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {notification.status}
                  </span>
                </TableCell>
                <TableCell>{notification.views.toLocaleString()}</TableCell>
                <TableCell>{notification.engagement}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

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
