"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MentorshipModal({ open, onOpenChange, mentors }: any) {
  const [mentorId, setMentorId] = useState("");
  const [date, setDate] = useState("");

  const submit = () => {
    console.log("Booked session:", { mentorId, date });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Mentorship Session</DialogTitle>
        </DialogHeader>

        {/* FORM */}
        <div className="space-y-4 mt-4">

          {/* Mentor Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Mentor
            </label>
            <select
              value={mentorId}
              onChange={(e) => setMentorId(e.target.value)}
              className="w-full border rounded-md px-3 py-2 bg-background"
            >
              <option value="">Choose a mentor</option>
              {mentors.map((m: any) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Date & Time
            </label>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-md px-3 py-2 bg-background"
            />
          </div>
        </div>

        {/* FOOTER */}
        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={submit}>Book Session</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
