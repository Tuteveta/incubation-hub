"use client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", startups: 5 },
  { day: "Tue", startups: 8 },
  { day: "Wed", startups: 12 },
  { day: "Thu", startups: 7 },
  { day: "Fri", startups: 14 },
  { day: "Sat", startups: 9 },
  { day: "Sun", startups: 6 },
];

export function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#e6eef8" opacity={0.05} />
        <XAxis dataKey="day" tick={{ fill: "var(--muted-foreground, #94a3b8)" }} />
        <YAxis tick={{ fill: "var(--muted-foreground, #94a3b8)" }} />
        <Tooltip />
        <Area type="monotone" dataKey="startups" stroke="#3b82f6" fill="url(#grad)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}