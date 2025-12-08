"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CalendarClock, PlusCircle } from "lucide-react";
import { MentorshipModal } from "../mentorship/MentorshipModal";

export default function MentorshipPage() {
  const [open, setOpen] = useState(false);

  const mentors = [
    { id: "1", name: "Dr. Michael Kora", expertise: "Business Strategy" },
    { id: "2", name: "Anna Tovaki", expertise: "Product Design" },
    { id: "3", name: "James Ronin", expertise: "Software Architecture" },
  ];

  const sessions = [
    { id: "101", mentorName: "Dr. Michael Kora", date: "2026-01-12 14:00", status: "Upcoming" },
    { id: "102", mentorName: "Anna Tovaki", date: "2026-01-10 10:00", status: "Completed" },
  ];

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Mentorship</h2>

        <Button onClick={() => setOpen(true)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Book Session
        </Button>
      </div>

      {/* MENTORS GRID */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" /> Available Mentors
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((m) => (
            <Card key={m.id}>
              <CardHeader>
                <CardTitle className="text-lg">{m.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{m.expertise}</p>

                <Button
                  className="mt-4 w-full"
                  variant="outline"
                  onClick={() => setOpen(true)}
                >
                  Book with {m.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SESSIONS */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <CalendarClock className="h-5 w-5 text-primary" /> Your Sessions
        </h3>

        <SessionsTable sessions={sessions} />
      </div>

      {/* BOOKING MODAL */}
      <MentorshipModal open={open} onOpenChange={setOpen} mentors={mentors} />

    </div>
  );
}

function SessionsTable({ sessions }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming & Past Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm">
          <thead className="text-muted-foreground border-b">
            <tr>
              <th className="py-2 text-left">Mentor</th>
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s: any) => (
              <tr key={s.id} className="border-b last:border-none">
                <td className="py-3">{s.mentorName}</td>
                <td className="py-3">{s.date}</td>
                <td className="py-3">{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
