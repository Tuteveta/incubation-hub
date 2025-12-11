"use client";

import { useState } from "react";

export default function ProgramsPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [appliedIds, setAppliedIds] = useState<number[]>([1, 4]);
  const [enrolledIds, setEnrolledIds] = useState<number[]>([1]);

  const programs = [
    {
      id: 1,
      name: "AI Accelerator 2025",
      description: "Intensive 12-week program for AI/ML startups focusing on product development, market fit, and investor readiness.",
      category: "Accelerator",
      duration: "12 weeks",
      funding: "Up to $150K",
      deadline: "Jan 15, 2025",
      startDate: "Feb 1, 2025",
      spots: 10,
      enrolled: 8,
      status: "Open",
      level: "Growth Stage",
      format: "Hybrid",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "CleanTech Initiative",
      description: "Supporting sustainable technology startups with mentorship, funding, and industry connections for environmental impact.",
      category: "Incubator",
      duration: "16 weeks",
      funding: "Up to $200K",
      deadline: "Jan 30, 2025",
      startDate: "Mar 1, 2025",
      spots: 8,
      enrolled: 5,
      status: "Open",
      level: "Early Stage",
      format: "In-Person",
      color: "#10b981"
    },
    {
      id: 3,
      name: "FinTech Foundry",
      description: "Specialized program for financial technology startups covering compliance, banking partnerships, and scaling strategies.",
      category: "Accelerator",
      duration: "10 weeks",
      funding: "Up to $175K",
      deadline: "Closed",
      startDate: "Dec 1, 2024",
      spots: 12,
      enrolled: 12,
      status: "In Progress",
      level: "Growth Stage",
      format: "Remote",
      color: "#f59e0b"
    },
    {
      id: 4,
      name: "HealthTech Hub",
      description: "Dedicated to healthcare innovation with focus on FDA pathways, clinical validation, and healthcare system integration.",
      category: "Incubator",
      duration: "14 weeks",
      funding: "Up to $250K",
      deadline: "Feb 15, 2025",
      startDate: "Apr 1, 2025",
      spots: 6,
      enrolled: 2,
      status: "Open",
      level: "All Stages",
      format: "Hybrid",
      color: "#8b5cf6"
    },
    {
      id: 5,
      name: "Global Expansion Program",
      description: "Help scaling startups expand internationally with market research, legal support, and local partnerships.",
      category: "Scale-Up",
      duration: "8 weeks",
      funding: "Up to $100K",
      deadline: "Mar 1, 2025",
      startDate: "Apr 15, 2025",
      spots: 15,
      enrolled: 0,
      status: "Coming Soon",
      level: "Scale Stage",
      format: "Remote",
      color: "#ec4899"
    },
    {
      id: 6,
      name: "Founder Bootcamp",
      description: "Intensive 4-week bootcamp for first-time founders covering basics of startup building, pitching, and fundraising.",
      category: "Bootcamp",
      duration: "4 weeks",
      funding: "N/A",
      deadline: "Rolling",
      startDate: "Monthly",
      spots: 30,
      enrolled: 22,
      status: "Open",
      level: "Idea Stage",
      format: "Remote",
      color: "#06b6d4"
    },
  ];

  const filters = [
    { id: "all", label: "All Programs" },
    { id: "applied", label: "Applied" },
    { id: "enrolled", label: "Enrolled" },
    { id: "Open", label: "Open" },
    { id: "Coming Soon", label: "Coming Soon" },
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          program.category.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === "all") return matchesSearch;
    if (filter === "applied") return matchesSearch && appliedIds.includes(program.id);
    if (filter === "enrolled") return matchesSearch && enrolledIds.includes(program.id);
    return matchesSearch && program.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return { bg: "#dcfce7", text: "#16a34a" };
      case "In Progress": return { bg: "#dbeafe", text: "#2563eb" };
      case "Coming Soon": return { bg: "#fef3c7", text: "#d97706" };
      default: return { bg: "#f3f4f6", text: "#6b7280" };
    }
  };

  const handleApply = (id: number) => {
    if (!appliedIds.includes(id)) {
      setAppliedIds([...appliedIds, id]);
    }
  };

  const getButtonState = (program: typeof programs[0]) => {
    if (enrolledIds.includes(program.id)) {
      return { text: "✓ Enrolled", disabled: true, style: { bg: "#dcfce7", color: "#16a34a", border: "1px solid #16a34a" } };
    }
    if (appliedIds.includes(program.id)) {
      return { text: "⏳ Application Pending", disabled: true, style: { bg: "#fef3c7", color: "#d97706", border: "1px solid #d97706" } };
    }
    if (program.status === "Coming Soon") {
      return { text: "Notify Me", disabled: false, style: { bg: "white", color: "#6b7280", border: "1px solid #e5e7eb" } };
    }
    if (program.status === "In Progress") {
      return { text: "View Program", disabled: false, style: { bg: "#f3f4f6", color: "#4b5563", border: "1px solid #e5e7eb" } };
    }
    return { text: "Apply Now →", disabled: false, style: { bg: "#2563eb", color: "white", border: "none" } };
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>
          Programs
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
          Apply to accelerators, incubators, and bootcamps to grow your startup
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
          placeholder="Search programs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            fontSize: "14px",
            width: "250px",
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
          { label: "Total Programs", value: programs.length, color: "#3b82f6" },
          { label: "Open Now", value: programs.filter(p => p.status === "Open").length, color: "#10b981" },
          { label: "Applied", value: appliedIds.length, color: "#f59e0b" },
          { label: "Enrolled", value: enrolledIds.length, color: "#8b5cf6" },
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

      {/* Programs Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
        gap: "20px"
      }}>
        {filteredPrograms.map((program) => {
          const statusColor = getStatusColor(program.status);
          const buttonState = getButtonState(program);
          const spotsLeft = program.spots - program.enrolled;
          const progress = (program.enrolled / program.spots) * 100;
          
          return (
            <div key={program.id} style={{
              backgroundColor: "white",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}>
              {/* Color Bar */}
              <div style={{ height: "4px", backgroundColor: program.color }} />
              
              {/* Card Header */}
              <div style={{ padding: "20px", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                      <span style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 500,
                        backgroundColor: "#f3f4f6",
                        color: "#4b5563"
                      }}>
                        {program.category}
                      </span>
                      <span style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 500,
                        backgroundColor: statusColor.bg,
                        color: statusColor.text
                      }}>
                        {program.status}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#111827", margin: 0 }}>
                      {program.name}
                    </h3>
                  </div>
                </div>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0, lineHeight: 1.5 }}>
                  {program.description}
                </p>
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px" }}>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(3, 1fr)", 
                  gap: "12px",
                  marginBottom: "16px"
                }}>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Duration</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{program.duration}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Funding</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{program.funding}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Format</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{program.format}</p>
                  </div>
                </div>

                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(2, 1fr)", 
                  gap: "12px",
                  marginBottom: "16px",
                  padding: "12px",
                  backgroundColor: "#f9fafb",
                  borderRadius: "10px"
                }}>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Application Deadline</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: program.deadline === "Closed" ? "#dc2626" : "#111827", margin: "2px 0 0 0" }}>
                      {program.deadline}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Starts</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{program.startDate}</p>
                  </div>
                </div>

                {/* Enrollment Progress */}
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "13px", color: "#6b7280" }}>Enrollment</span>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: spotsLeft <= 2 ? "#dc2626" : "#111827" }}>
                      {spotsLeft} spots left
                    </span>
                  </div>
                  <div style={{ height: "8px", backgroundColor: "#e5e7eb", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{
                      width: `${progress}%`,
                      height: "100%",
                      backgroundColor: program.color,
                      borderRadius: "4px"
                    }} />
                  </div>
                  <p style={{ fontSize: "12px", color: "#9ca3af", margin: "4px 0 0 0" }}>
                    {program.enrolled} of {program.spots} enrolled
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleApply(program.id)}
                  disabled={buttonState.disabled}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: buttonState.style.border,
                    backgroundColor: buttonState.style.bg,
                    color: buttonState.style.color,
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: buttonState.disabled ? "default" : "pointer",
                    opacity: buttonState.disabled ? 0.9 : 1
                  }}
                >
                  {buttonState.text}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPrograms.length === 0 && (
        <div style={{ textAlign: "center", padding: "48px", color: "#6b7280" }}>
          <p style={{ fontSize: "16px", margin: 0 }}>No programs found matching your criteria</p>
        </div>
      )}
    </div>
  );
}