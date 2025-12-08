"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, GraduationCap, UserCircle } from "lucide-react";
import CountUp from "react-countup";
import { ActivityChart } from "../components/charts/ActivityChart";
import { RecentActivity } from "../components/RecentActivity";
import { motion } from "framer-motion";

export default function DashboardPage() {
  // sample values (replace with real data later)
  const metrics = [
    { id: "startups", title: "Startups", value: 124, icon: <Briefcase /> },
    { id: "programs", title: "Programs", value: 8, icon: <GraduationCap /> },
    { id: "mentors", title: "Mentors", value: 22, icon: <Users /> },
    { id: "users", title: "Users", value: 468, icon: <UserCircle /> },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      {/* header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <p className="text-sm text-muted-foreground">Overview and quick actions</p>
        </div>
        <div className="flex gap-2">
          <Button><span className="mr-2">＋</span> New Program</Button>
          <Button variant="outline">Add Startup</Button>
        </div>
      </div>

      {/* metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m) => (
          <Card key={m.id}>
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">{m.title}</CardTitle>
              <div className="text-muted-foreground">{m.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">
                  <CountUp end={m.value} duration={1.8} separator="," />
                </div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* main layout: chart + activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Startup Activity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ActivityChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}