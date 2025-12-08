"use client";

import { motion } from "framer-motion";

const items = [
  { id: 1, text: "New startup registered: AlphaTech", time: "2 hours ago" },
  { id: 2, text: "Mentorship session completed", time: "5 hours ago" },
  { id: 3, text: "New program launched: Founders Lab", time: "1 day ago" },
  { id: 4, text: "User account created", time: "2 days ago" },
];

export function RecentActivity() {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <motion.li
          key={it.id}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className="flex items-start gap-3"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-sky-500 mt-2" />
          <div>
            <div className="text-sm font-medium">{it.text}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{it.time}</div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
