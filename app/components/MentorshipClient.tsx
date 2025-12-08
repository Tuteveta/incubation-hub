// components/MentorshipClient.tsx
"use client";

import React, { useEffect, useState } from "react";

// Uncomment these when your Amplify schema is ready:
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";
// const client = generateClient<Schema>();

type Mentor = {
  id: string;
  name: string;
  expertise: string;
};

type Session = {
  id: string;
  mentorName: string;
  date: string;
  status: string;
};

export default function MentorshipClient() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    mentorId: "",
    date: "",
  });

  /* -------------------------------
     LOAD DEMO DATA (replace with client.models.*)
  -------------------------------- */
  useEffect(() => {
    // Replace this with actual queries:
    // const res = await client.models.Mentor.list();
    // const sessions = await client.models.MentorSession.list();

    setMentors([
      { id: "1", name: "Dr. Michael Kora", expertise: "Business Strategy" },
      { id: "2", name: "Anna Tovaki", expertise: "Product Design" },
      { id: "3", name: "James Ronin", expertise: "Software Architecture" },
    ]);

    setSessions([
      { id: "101", mentorName: "Dr. Michael Kora", date: "2026-01-12 14:00", status: "Upcoming" },
      { id: "102", mentorName: "Anna Tovaki", date: "2026-01-10 10:00", status: "Completed" },
    ]);
  }, []);

  /* -------------------------------
      HANDLE SESSION BOOKING
  -------------------------------- */
  const bookSession = async () => {
    if (!form.mentorId || !form.date) return;

    const selectedMentor = mentors.find((m) => m.id === form.mentorId);

    // Replace with Amplify create call:
    /*
    await client.models.MentorSession.create({
      mentorId: form.mentorId,
      scheduledAt: form.date
    });
    */

    setSessions((prev) => [
      {
        id: crypto.randomUUID(),
        mentorName: selectedMentor?.name || "",
        date: form.date,
        status: "Upcoming",
      },
      ...prev,
    ]);

    setShowModal(false);
    setForm({ mentorId: "", date: "" });
  };

  return (
    <section>
      {/* BOOK SESSION BUTTON */}
      <div style={{ marginBottom: 20, display: "flex", justifyContent: "flex-end" }}>
        <button className="primary" onClick={() => setShowModal(true)}>
          + Book Session
        </button>
      </div>

      {/* MENTOR LIST */}
      <div className="panel">
        <div className="panel-header">Available Mentors</div>
        <div className="panel-body">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {mentors.map((mentor) => (
              <div key={mentor.id} className="mentorship-card">
                <div className="mentor-name">{mentor.name}</div>
                <div className="mentor-expertise">{mentor.expertise}</div>
                <button
                  className="top-btn"
                  style={{ marginTop: 10 }}
                  onClick={() => {
                    setForm((f) => ({ ...f, mentorId: mentor.id }));
                    setShowModal(true);
                  }}
                >
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SESSIONS */}
      <div className="panel">
        <div className="panel-header">Your Mentorship Sessions</div>
        <div className="panel-body">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ textAlign: "left", color: "#9fb0c8" }}>
              <tr>
                <th>Mentor</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s) => (
                <tr key={s.id}>
                  <td style={{ padding: "8px 0" }}>{s.mentorName}</td>
                  <td style={{ padding: "8px 0" }}>{s.date}</td>
                  <td style={{ padding: "8px 0" }}>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Book Mentorship Session</h3>

            <div className="modal-row">
              <label>Mentor</label>
              <select
                value={form.mentorId}
                onChange={(e) => setForm((f) => ({ ...f, mentorId: e.target.value }))}
              >
                <option value="">Select mentor</option>
                {mentors.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div className="modal-row">
              <label>Date & Time</label>
              <input
                type="datetime-local"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              />
            </div>

            <div className="modal-actions">
              <button className="top-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="primary" onClick={bookSession}>Book</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
