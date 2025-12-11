"use client";

import { useState } from "react";

export default function ResourcesPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedIds, setSavedIds] = useState<number[]>([1, 5]);
  const [downloadedIds, setDownloadedIds] = useState<number[]>([1, 3]);

  const resources = [
    {
      id: 1,
      title: "Pitch Deck Template",
      description: "Professional pitch deck template used by YC-backed startups. Includes 12 essential slides with examples.",
      category: "Templates",
      type: "PPTX",
      size: "2.4 MB",
      downloads: 3420,
      rating: 4.9,
      author: "Incubation Hub",
      updatedAt: "Dec 10, 2024",
      premium: false,
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "Financial Model Spreadsheet",
      description: "Comprehensive 5-year financial model with revenue projections, burn rate calculations, and investor metrics.",
      category: "Templates",
      type: "XLSX",
      size: "1.8 MB",
      downloads: 2156,
      rating: 4.8,
      author: "Finance Team",
      updatedAt: "Dec 8, 2024",
      premium: false,
      color: "#10b981"
    },
    {
      id: 3,
      title: "Fundraising Playbook",
      description: "Complete guide to raising your seed round. Includes investor outreach templates and term sheet explanations.",
      category: "Guides",
      type: "PDF",
      size: "5.2 MB",
      downloads: 4890,
      rating: 4.9,
      author: "Michael Rodriguez",
      updatedAt: "Dec 5, 2024",
      premium: true,
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "Customer Discovery Interview Guide",
      description: "Framework for conducting effective customer interviews. Includes 50+ questions organized by category.",
      category: "Guides",
      type: "PDF",
      size: "1.2 MB",
      downloads: 1876,
      rating: 4.7,
      author: "Sarah Chen",
      updatedAt: "Dec 1, 2024",
      premium: false,
      color: "#8b5cf6"
    },
    {
      id: 5,
      title: "Product Roadmap Template",
      description: "Notion and spreadsheet templates for planning your product roadmap with milestone tracking.",
      category: "Templates",
      type: "ZIP",
      size: "3.1 MB",
      downloads: 2234,
      rating: 4.6,
      author: "Product Team",
      updatedAt: "Nov 28, 2024",
      premium: false,
      color: "#ec4899"
    },
    {
      id: 6,
      title: "Legal Document Pack",
      description: "Essential legal templates including NDA, SAFE, employment contracts, and privacy policy templates.",
      category: "Legal",
      type: "ZIP",
      size: "4.5 MB",
      downloads: 3567,
      rating: 4.8,
      author: "Legal Team",
      updatedAt: "Nov 25, 2024",
      premium: true,
      color: "#06b6d4"
    },
    {
      id: 7,
      title: "Growth Marketing Course",
      description: "8-part video course on growth marketing strategies for startups. Includes worksheets and case studies.",
      category: "Courses",
      type: "Video",
      size: "2.1 GB",
      downloads: 1245,
      rating: 4.9,
      author: "Lisa Thompson",
      updatedAt: "Nov 20, 2024",
      premium: true,
      color: "#f97316"
    },
    {
      id: 8,
      title: "OKR Planning Template",
      description: "Quarterly OKR planning template with scoring system and team alignment framework.",
      category: "Templates",
      type: "XLSX",
      size: "890 KB",
      downloads: 1678,
      rating: 4.5,
      author: "Operations Team",
      updatedAt: "Nov 15, 2024",
      premium: false,
      color: "#84cc16"
    },
  ];

  const filters = [
    { id: "all", label: "All Resources" },
    { id: "saved", label: "Saved" },
    { id: "downloaded", label: "Downloaded" },
    { id: "Templates", label: "Templates" },
    { id: "Guides", label: "Guides" },
    { id: "Courses", label: "Courses" },
    { id: "Legal", label: "Legal" },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === "all") return matchesSearch;
    if (filter === "saved") return matchesSearch && savedIds.includes(resource.id);
    if (filter === "downloaded") return matchesSearch && downloadedIds.includes(resource.id);
    return matchesSearch && resource.category === filter;
  });

  const toggleSave = (id: number) => {
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleDownload = (id: number) => {
    if (!downloadedIds.includes(id)) {
      setDownloadedIds([...downloadedIds, id]);
    }
    // Simulate download
    alert("Download started!");
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF": return { bg: "#fee2e2", text: "#dc2626" };
      case "PPTX": return { bg: "#ffedd5", text: "#ea580c" };
      case "XLSX": return { bg: "#dcfce7", text: "#16a34a" };
      case "ZIP": return { bg: "#e0e7ff", text: "#4f46e5" };
      case "Video": return { bg: "#fce7f3", text: "#db2777" };
      default: return { bg: "#f3f4f6", text: "#6b7280" };
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>
          Resources
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
          Download templates, guides, and tools to help build your startup
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
          placeholder="Search resources..."
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
          { label: "Total Resources", value: resources.length, color: "#3b82f6" },
          { label: "Templates", value: resources.filter(r => r.category === "Templates").length, color: "#10b981" },
          { label: "Saved", value: savedIds.length, color: "#f59e0b" },
          { label: "Downloaded", value: downloadedIds.length, color: "#8b5cf6" },
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

      {/* Resources Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "20px"
      }}>
        {filteredResources.map((resource) => {
          const typeColor = getTypeColor(resource.type);
          const isSaved = savedIds.includes(resource.id);
          const isDownloaded = downloadedIds.includes(resource.id);
          
          return (
            <div key={resource.id} style={{
              backgroundColor: "white",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}>
              {/* Card Header */}
              <div style={{
                padding: "20px",
                borderBottom: "1px solid #f3f4f6",
                background: `linear-gradient(135deg, ${resource.color}10, ${resource.color}05)`
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      backgroundColor: typeColor.bg,
                      color: typeColor.text
                    }}>
                      {resource.type}
                    </span>
                    <span style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 500,
                      backgroundColor: "#f3f4f6",
                      color: "#4b5563"
                    }}>
                      {resource.category}
                    </span>
                    {resource.premium && (
                      <span style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 600,
                        backgroundColor: "#fef3c7",
                        color: "#d97706"
                      }}>
                        ★ Premium
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => toggleSave(resource.id)}
                    style={{
                      padding: "6px",
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      fontSize: "18px"
                    }}
                  >
                    {isSaved ? "★" : "☆"}
                  </button>
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#111827", margin: 0 }}>
                  {resource.title}
                </h3>
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: "14px", color: "#4b5563", margin: "0 0 16px 0", lineHeight: 1.5 }}>
                  {resource.description}
                </p>

                {/* Meta Info */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "12px",
                  marginBottom: "16px"
                }}>
                  <div style={{ backgroundColor: "#f9fafb", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Size</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{resource.size}</p>
                  </div>
                  <div style={{ backgroundColor: "#f9fafb", padding: "10px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Downloads</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "2px 0 0 0" }}>{resource.downloads.toLocaleString()}</p>
                  </div>
                </div>

                {/* Author and Rating */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                  paddingTop: "12px",
                  borderTop: "1px solid #f3f4f6"
                }}>
                  <div>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>By {resource.author}</p>
                    <p style={{ fontSize: "11px", color: "#9ca3af", margin: "2px 0 0 0" }}>Updated {resource.updatedAt}</p>
                  </div>
                  <span style={{ fontSize: "14px", color: "#f59e0b", fontWeight: 500 }}>
                    ★ {resource.rating}
                  </span>
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => {}}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "white",
                      color: "#4b5563",
                      fontSize: "14px",
                      fontWeight: 500,
                      cursor: "pointer"
                    }}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => handleDownload(resource.id)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: isDownloaded ? "#dcfce7" : "#2563eb",
                      color: isDownloaded ? "#16a34a" : "white",
                      fontSize: "14px",
                      fontWeight: 500,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px"
                    }}
                  >
                    {isDownloaded ? "✓ Downloaded" : "↓ Download"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div style={{ textAlign: "center", padding: "48px", color: "#6b7280" }}>
          <p style={{ fontSize: "16px", margin: 0 }}>No resources found matching your criteria</p>
        </div>
      )}
    </div>
  );
}