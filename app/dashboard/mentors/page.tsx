"use client";

import { useState } from "react";

export default function MentorsPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);
  const [bookedSessions, setBookedSessions] = useState<{mentorId: number, date: string, time: string}[]>([
    { mentorId: 1, date: "Dec 18, 2024", time: "2:00 PM" }
  ]);

  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Former VP of Product",
      company: "Google",
      bio: "15+ years in product leadership. Scaled multiple products from 0 to millions of users. Expert in AI/ML product development and team building.",
      expertise: ["Product Strategy", "AI/ML", "Team Building", "Go-to-Market"],
      experience: "15+ years",
      rating: 4.9,
      reviews: 156,
      sessions: 234,
      availability: "Available",
      hourlyRate: "$250",
      nextSlot: "Dec 16, 2024",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Partner",
      company: "Sequoia Capital",
      bio: "10+ years in venture capital. Led investments in 30+ startups with 5 unicorn exits. Focus on B2B SaaS and enterprise software.",
      expertise: ["Fundraising", "B2B SaaS", "Due Diligence", "Board Management"],
      experience: "10+ years",
      rating: 4.8,
      reviews: 203,
      sessions: 312,
      availability: "Available",
      hourlyRate: "$300",
      nextSlot: "Dec 17, 2024",
      color: "#10b981"
    },
    {
      id: 3,
      name: "Emily Wang",
      title: "Founder & CEO (Acquired)",
      company: "TechFlow",
      bio: "Built and sold 2 startups. Expert in early-stage growth, finding product-market fit, and navigating acquisition processes.",
      expertise: ["Early Stage", "Growth Hacking", "M&A", "Pivoting"],
      experience: "12+ years",
      rating: 5.0,
      reviews: 89,
      sessions: 145,
      availability: "Busy",
      hourlyRate: "$200",
      nextSlot: "Dec 22, 2024",
      color: "#f59e0b"
    },
    {
      id: 4,
      name: "James Kim",
      title: "CTO",
      company: "Enterprise Co",
      bio: "20+ years building scalable systems. Led engineering at 3 startups through IPO. Expert in infrastructure, architecture, and technical leadership.",
      expertise: ["Engineering", "Architecture", "Scaling", "Technical Hiring"],
      experience: "20+ years",
      rating: 4.9,
      reviews: 124,
      sessions: 198,
      availability: "Available",
      hourlyRate: "$275",
      nextSlot: "Dec 15, 2024",
      color: "#8b5cf6"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "CMO",
      company: "Marketing Labs",
      bio: "Growth marketing expert with 12+ years experience. Specialized in B2C and D2C brands, viral marketing, and brand building.",
      expertise: ["Marketing", "Growth", "Brand Building", "Social Media"],
      experience: "12+ years",
      rating: 4.7,
      reviews: 98,
      sessions: 167,
      availability: "Available",
      hourlyRate: "$225",
      nextSlot: "Dec 16, 2024",
      color: "#ec4899"
    },
    {
      id: 6,
      name: "David Park",
      title: "Angel Investor & Advisor",
      company: "Park Ventures",
      bio: "Invested in 50+ early-stage startups. Former founder with 2 successful exits. Passionate about helping first-time founders.",
      expertise: ["Angel Investing", "Strategy", "Networking", "Pitching"],
      experience: "18+ years",
      rating: 4.8,
      reviews: 167,
      sessions: 289,
      availability: "Limited",
      hourlyRate: "$200",
      nextSlot: "Dec 20, 2024",
      color: "#06b6d4"
    },
  ];

  const filters = [
    { id: "all", label: "All Mentors" },
    { id: "booked", label: "My Bookings" },
    { id: "Available", label: "Available Now" },
    { id: "Product Strategy", label: "Product" },
    { id: "Fundraising", label: "Fundraising" },
    { id: "Engineering", label: "Engineering" },
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          mentor.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    if (filter === "all") return matchesSearch;
    if (filter === "booked") return matchesSearch && bookedSessions.some(b => b.mentorId === mentor.id);
    if (filter === "Available") return matchesSearch && mentor.availability === "Available";
    return matchesSearch && mentor.expertise.some(e => e.includes(filter));
  });

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return { bg: "#dcfce7", text: "#16a34a", dot: "#16a34a" };
      case "Limited": return { bg: "#fef3c7", text: "#d97706", dot: "#d97706" };
      case "Busy": return { bg: "#fee2e2", text: "#dc2626", dot: "#dc2626" };
      default: return { bg: "#f3f4f6", text: "#6b7280", dot: "#6b7280" };
    }
  };

  const openBookingModal = (mentor: typeof mentors[0]) => {
    setSelectedMentor(mentor);
    setShowBookingModal(true);
  };

  const confirmBooking = (date: string, time: string) => {
    if (selectedMentor) {
      setBookedSessions([...bookedSessions, { mentorId: selectedMentor.id, date, time }]);
      setShowBookingModal(false);
      setSelectedMentor(null);
    }
  };

  const hasBooking = (mentorId: number) => bookedSessions.some(b => b.mentorId === mentorId);

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>
          Mentors
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
          Book 1-on-1 sessions with experienced mentors to accelerate your growth
        </p>
      </div>

      {/* Search and Filters */}
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap",
        gap: "16px", 
        marginBottom: "24px",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                backgroundColor: filter === f.id ? "#2563eb" : "#f3f4f6",
                color: filter === f.id ? "white" : "#4b5563"
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
        
        <input
          type="text"
          placeholder="Search mentors or expertise..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            fontSize: "14px",
            width: "280px",
            outline: "none"
          }}
        />
      </div>

      {/* Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "16px",
        marginBottom: "24px"
      }}>
        {[
          { label: "Total Mentors", value: mentors.length, color: "#3b82f6" },
          { label: "Available Now", value: mentors.filter(m => m.availability === "Available").length, color: "#10b981" },
          { label: "Avg Rating", value: "4.8★", color: "#f59e0b" },
          { label: "My Bookings", value: bookedSessions.length, color: "#8b5cf6" },
        ].map((stat, idx) => (
          <div key={idx} style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb"
          }}>
            <p style={{ fontSize: "24px", fontWeight: 700, color: stat.color, margin: 0 }}>{stat.value}</p>
            <p style={{ fontSize: "13px", color: "#6b7280", margin: "4px 0 0 0" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mentors Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
        gap: "20px"
      }}>
        {filteredMentors.map((mentor) => {
          const availColor = getAvailabilityColor(mentor.availability);
          const isBooked = hasBooking(mentor.id);
          
          return (
            <div key={mentor.id} style={{
              backgroundColor: "white",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}>
              {/* Card Header */}
              <div style={{ padding: "20px", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: mentor.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "20px",
                    flexShrink: 0
                  }}>
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#111827", margin: 0 }}>
                        {mentor.name}
                      </h3>
                      <span style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        fontSize: "11px",
                        fontWeight: 500,
                        backgroundColor: availColor.bg,
                        color: availColor.text
                      }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: availColor.dot }} />
                        {mentor.availability}
                      </span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#4b5563", margin: 0 }}>
                      {mentor.title} at {mentor.company}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px" }}>
                      <span style={{ fontSize: "13px", color: "#f59e0b", fontWeight: 500 }}>
                        ★ {mentor.rating} ({mentor.reviews})
                      </span>
                      <span style={{ fontSize: "13px", color: "#6b7280" }}>
                        {mentor.sessions} sessions
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: "14px", color: "#4b5563", margin: "0 0 16px 0", lineHeight: 1.5 }}>
                  {mentor.bio}
                </p>

                {/* Expertise Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                  {mentor.expertise.map((skill, idx) => (
                    <span key={idx} style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 500,
                      backgroundColor: "#f3f4f6",
                      color: "#4b5563"
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Session Info */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "12px",
                  padding: "12px",
                  backgroundColor: "#f9fafb",
                  borderRadius: "10px",
                  marginBottom: "16px"
                }}>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Rate</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{mentor.hourlyRate}/hr</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Experience</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{mentor.experience}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Next Slot</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{mentor.nextSlot}</p>
                  </div>
                </div>

                {/* Booking Status / Button */}
                {isBooked ? (
                  <div style={{
                    padding: "12px",
                    borderRadius: "8px",
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    textAlign: "center"
                  }}>
                    <p style={{ fontSize: "14px", fontWeight: 500, color: "#2563eb", margin: 0 }}>
                      ✓ Session Booked
                    </p>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: "4px 0 0 0" }}>
                      {bookedSessions.find(b => b.mentorId === mentor.id)?.date} at {bookedSessions.find(b => b.mentorId === mentor.id)?.time}
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => openBookingModal(mentor)}
                    disabled={mentor.availability === "Busy"}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: mentor.availability === "Busy" ? "#f3f4f6" : "#2563eb",
                      color: mentor.availability === "Busy" ? "#9ca3af" : "white",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: mentor.availability === "Busy" ? "not-allowed" : "pointer"
                    }}
                  >
                    {mentor.availability === "Busy" ? "Not Available" : "Book Session →"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredMentors.length === 0 && (
        <div style={{ textAlign: "center", padding: "48px", color: "#6b7280" }}>
          <p style={{ fontSize: "16px", margin: 0 }}>No mentors found matching your criteria</p>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && selectedMentor && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50
        }}>
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "24px",
            width: "90%",
            maxWidth: "400px"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#111827", margin: "0 0 8px 0" }}>
              Book Session with {selectedMentor.name}
            </h3>
            <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 20px 0" }}>
              Select a time slot for your 1-on-1 session
            </p>

            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#111827", margin: "0 0 8px 0" }}>Available Slots</p>
              {["Dec 16, 2024 - 10:00 AM", "Dec 16, 2024 - 2:00 PM", "Dec 17, 2024 - 11:00 AM"].map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const [date, time] = slot.split(" - ");
                    confirmBooking(date, time);
                  }}
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "8px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "white",
                    fontSize: "14px",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setShowBookingModal(false)}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                  fontSize: "14px",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}