"use client";

import { useState } from "react";

export default function StartupsPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const startups = [
    {
      id: 1,
      name: "TechVenture AI",
      description: "AI-powered analytics platform for enterprise decision making. Building next-gen ML solutions.",
      industry: "AI/ML",
      stage: "Series A",
      funding: "$2.5M",
      team: 12,
      location: "San Francisco, CA",
      founded: "2023",
      status: "Active",
      subscribed: true,
      logo: "TV",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "GreenEnergy Co",
      description: "Sustainable energy solutions for residential buildings. Making clean energy accessible.",
      industry: "CleanTech",
      stage: "Seed",
      funding: "$500K",
      team: 6,
      location: "Austin, TX",
      founded: "2024",
      status: "Active",
      subscribed: false,
      logo: "GE",
      color: "#10b981"
    },
    {
      id: 3,
      name: "HealthTech Pro",
      description: "Remote patient monitoring and telehealth platform connecting patients with healthcare providers.",
      industry: "HealthTech",
      stage: "Pre-seed",
      funding: "$150K",
      team: 4,
      location: "Boston, MA",
      founded: "2024",
      status: "Recruiting",
      subscribed: false,
      logo: "HT",
      color: "#8b5cf6"
    },
    {
      id: 4,
      name: "FinFlow App",
      description: "Personal finance management for millennials. Smart budgeting and investment tracking.",
      industry: "FinTech",
      stage: "Series A",
      funding: "$3.2M",
      team: 18,
      location: "New York, NY",
      founded: "2022",
      status: "Graduated",
      subscribed: true,
      logo: "FF",
      color: "#f59e0b"
    },
    {
      id: 5,
      name: "EduLearn Platform",
      description: "Adaptive learning platform for K-12 education. Personalized curriculum for every student.",
      industry: "EdTech",
      stage: "Seed",
      funding: "$750K",
      team: 8,
      location: "Chicago, IL",
      founded: "2023",
      status: "Active",
      subscribed: false,
      logo: "EL",
      color: "#ec4899"
    },
    {
      id: 6,
      name: "LogiChain Solutions",
      description: "Blockchain-based supply chain management. Transparent and efficient logistics.",
      industry: "Logistics",
      stage: "Pre-seed",
      funding: "$200K",
      team: 5,
      location: "Seattle, WA",
      founded: "2024",
      status: "Recruiting",
      subscribed: false,
      logo: "LC",
      color: "#06b6d4"
    },
  ];

  const filters = [
    { id: "all", label: "All Startups" },
    { id: "subscribed", label: "Subscribed" },
    { id: "Active", label: "Active" },
    { id: "Recruiting", label: "Recruiting" },
    { id: "Graduated", label: "Graduated" },
  ];

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          startup.industry.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === "all") return matchesSearch;
    if (filter === "subscribed") return matchesSearch && startup.subscribed;
    return matchesSearch && startup.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return { bg: "#dcfce7", text: "#16a34a" };
      case "Recruiting": return { bg: "#fef3c7", text: "#d97706" };
      case "Graduated": return { bg: "#dbeafe", text: "#2563eb" };
      default: return { bg: "#f3f4f6", text: "#6b7280" };
    }
  };

  const [subscribedIds, setSubscribedIds] = useState<number[]>(
    startups.filter(s => s.subscribed).map(s => s.id)
  );

  const toggleSubscribe = (id: number) => {
    setSubscribedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>
          Startups
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
          Discover and follow innovative startups in our ecosystem
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
          placeholder="Search startups..."
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
          { label: "Total Startups", value: startups.length, color: "#3b82f6" },
          { label: "Active", value: startups.filter(s => s.status === "Active").length, color: "#10b981" },
          { label: "Recruiting", value: startups.filter(s => s.status === "Recruiting").length, color: "#f59e0b" },
          { label: "Subscribed", value: subscribedIds.length, color: "#8b5cf6" },
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

      {/* Startups Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: "20px"
      }}>
        {filteredStartups.map((startup) => {
          const statusColor = getStatusColor(startup.status);
          const isSubscribed = subscribedIds.includes(startup.id);
          
          return (
            <div key={startup.id} style={{
              backgroundColor: "white",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}>
              {/* Card Header */}
              <div style={{
                padding: "20px",
                borderBottom: "1px solid #f3f4f6"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <div style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: startup.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "16px"
                    }}>
                      {startup.logo}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#111827", margin: 0 }}>
                        {startup.name}
                      </h3>
                      <p style={{ fontSize: "13px", color: "#6b7280", margin: "2px 0 0 0" }}>
                        {startup.industry} • {startup.location}
                      </p>
                    </div>
                  </div>
                  <span style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 500,
                    backgroundColor: statusColor.bg,
                    color: statusColor.text
                  }}>
                    {startup.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: "14px", color: "#4b5563", margin: "0 0 16px 0", lineHeight: 1.5 }}>
                  {startup.description}
                </p>

                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(2, 1fr)", 
                  gap: "12px",
                  marginBottom: "16px"
                }}>
                  <div style={{ backgroundColor: "#f9fafb", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Stage</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{startup.stage}</p>
                  </div>
                  <div style={{ backgroundColor: "#f9fafb", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Funding</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{startup.funding}</p>
                  </div>
                  <div style={{ backgroundColor: "#f9fafb", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Team Size</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{startup.team} members</p>
                  </div>
                  <div style={{ backgroundColor: "#f9fafb", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Founded</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{startup.founded}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => toggleSubscribe(startup.id)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      border: isSubscribed ? "2px solid #2563eb" : "1px solid #e5e7eb",
                      backgroundColor: isSubscribed ? "#eff6ff" : "white",
                      color: isSubscribed ? "#2563eb" : "#4b5563",
                      fontSize: "14px",
                      fontWeight: 500,
                      cursor: "pointer"
                    }}
                  >
                    {isSubscribed ? "★ Subscribed" : "☆ Subscribe"}
                  </button>
                  <button style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer"
                  }}>
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredStartups.length === 0 && (
        <div style={{ textAlign: "center", padding: "48px", color: "#6b7280" }}>
          <p style={{ fontSize: "16px", margin: 0 }}>No startups found matching your criteria</p>
        </div>
      )}
    </div>
  );
}