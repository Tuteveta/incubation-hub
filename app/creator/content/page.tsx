"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  Grid,
  List,
  Video,
  FileText,
  HelpCircle,
  MoreHorizontal,
  Star,
  Users,
  DollarSign,
  Eye,
  Clock,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  ChevronDown,
  Play,
  BookOpen,
  CheckCircle
} from "lucide-react";

export default function ContentLibrary() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContent, setSelectedContent] = useState<number[]>([]);

  const contentItems = [
    {
      id: 1,
      title: "Complete AI & Machine Learning Bootcamp 2025",
      type: "course",
      status: "published",
      thumbnail: "🤖",
      students: 847,
      revenue: 8470,
      rating: 4.9,
      reviews: 234,
      duration: "42h 30m",
      lessons: 156,
      lastUpdated: "2 days ago",
      price: 49.99
    },
    {
      id: 2,
      title: "Advanced Python for Data Science",
      type: "course",
      status: "published",
      thumbnail: "🐍",
      students: 312,
      revenue: 3120,
      rating: 4.8,
      reviews: 89,
      duration: "28h 15m",
      lessons: 98,
      lastUpdated: "5 days ago",
      price: 39.99
    },
    {
      id: 3,
      title: "Web Development Masterclass",
      type: "course",
      status: "draft",
      thumbnail: "🌐",
      students: 0,
      revenue: 0,
      rating: 0,
      reviews: 0,
      duration: "12h 45m",
      lessons: 45,
      lastUpdated: "1 day ago",
      price: 29.99
    },
    {
      id: 4,
      title: "10 Tips for Better Code Reviews",
      type: "article",
      status: "published",
      thumbnail: "📝",
      students: 1250,
      revenue: 0,
      rating: 4.7,
      reviews: 45,
      duration: "8 min read",
      lessons: 1,
      lastUpdated: "1 week ago",
      price: 0
    },
    {
      id: 5,
      title: "Introduction to Machine Learning",
      type: "video",
      status: "published",
      thumbnail: "🎬",
      students: 2340,
      revenue: 0,
      rating: 4.9,
      reviews: 156,
      duration: "45 min",
      lessons: 1,
      lastUpdated: "2 weeks ago",
      price: 0
    },
    {
      id: 6,
      title: "React Hooks Deep Dive",
      type: "course",
      status: "archived",
      thumbnail: "⚛️",
      students: 567,
      revenue: 2835,
      rating: 4.6,
      reviews: 78,
      duration: "15h 20m",
      lessons: 52,
      lastUpdated: "1 month ago",
      price: 24.99
    }
  ];

  const filteredContent = contentItems.filter((item) => {
    const matchesStatus = filterStatus === "all" || item.status === filterStatus;
    const matchesType = filterType === "all" || item.type === filterType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

  const stats = [
    { label: "Total Content", value: contentItems.length, icon: BookOpen, color: "#8b5cf6" },
    { label: "Published", value: contentItems.filter(c => c.status === "published").length, icon: CheckCircle, color: "#10b981" },
    { label: "Total Students", value: "4,316", icon: Users, color: "#3b82f6" },
    { label: "Total Revenue", value: "$14,425", icon: DollarSign, color: "#f59e0b" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return { bg: "#10b98115", color: "#10b981" };
      case "draft": return { bg: "#f59e0b15", color: "#f59e0b" };
      case "archived": return { bg: "#64748b15", color: "#64748b" };
      default: return { bg: "#e2e8f0", color: "#64748b" };
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course": return BookOpen;
      case "video": return Video;
      case "article": return FileText;
      default: return HelpCircle;
    }
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      {/* Page Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "32px"
      }}>
        <div>
          <h1 style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "8px",
            fontFamily: "Archivo"
          }}>
            Content Library
          </h1>
          <p style={{ color: "#64748b", fontSize: "15px" }}>
            Manage all your courses, videos, and articles in one place.
          </p>
        </div>

        <Link href="/creator/content/new" style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 20px",
          background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
          color: "white",
          borderRadius: "12px",
          fontSize: "15px",
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
        }}>
          <Plus size={20} />
          Create Content
        </Link>
      </div>

      {/* Stats Row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginBottom: "24px"
      }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }}
            >
              <div style={{
                width: "44px",
                height: "44px",
                background: `${stat.color}15`,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Icon size={22} color={stat.color} />
              </div>
              <div>
                <div style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#0f172a",
                  fontFamily: "Archivo"
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "13px", color: "#64748b" }}>{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters & Search */}
      <div style={{
        background: "white",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",
        padding: "20px",
        marginBottom: "24px"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap"
        }}>
          {/* Search */}
          <div style={{ flex: 1, minWidth: "280px", position: "relative" }}>
            <Search size={18} color="#94a3b8" style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)"
            }} />
            <input
              type="text"
              placeholder="Search content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px 12px 42px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                outline: "none"
              }}
            />
          </div>

          {/* Status Filter */}
          <div style={{ position: "relative" }}>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                padding: "12px 40px 12px 16px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                appearance: "none",
                cursor: "pointer",
                outline: "none"
              }}
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
            <ChevronDown size={16} color="#64748b" style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none"
            }} />
          </div>

          {/* Type Filter */}
          <div style={{ position: "relative" }}>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{
                padding: "12px 40px 12px 16px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                appearance: "none",
                cursor: "pointer",
                outline: "none"
              }}
            >
              <option value="all">All Types</option>
              <option value="course">Courses</option>
              <option value="video">Videos</option>
              <option value="article">Articles</option>
            </select>
            <ChevronDown size={16} color="#64748b" style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none"
            }} />
          </div>

          {/* View Toggle */}
          <div style={{
            display: "flex",
            gap: "4px",
            padding: "4px",
            background: "#f8fafc",
            borderRadius: "10px"
          }}>
            <button
              onClick={() => setViewMode("grid")}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                background: viewMode === "grid" ? "white" : "transparent",
                cursor: "pointer",
                boxShadow: viewMode === "grid" ? "0 2px 8px rgba(0,0,0,0.08)" : "none"
              }}
            >
              <Grid size={18} color={viewMode === "grid" ? "#8b5cf6" : "#64748b"} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                background: viewMode === "list" ? "white" : "transparent",
                cursor: "pointer",
                boxShadow: viewMode === "list" ? "0 2px 8px rgba(0,0,0,0.08)" : "none"
              }}
            >
              <List size={18} color={viewMode === "list" ? "#8b5cf6" : "#64748b"} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid/List */}
      {viewMode === "grid" ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "20px"
        }}>
          {filteredContent.map((item) => {
            const statusColors = getStatusColor(item.status);
            const TypeIcon = getTypeIcon(item.type);
            return (
              <div
                key={item.id}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  transition: "all 0.2s"
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  height: "160px",
                  background: "linear-gradient(135deg, #8b5cf615, #3b82f615)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}>
                  <span style={{ fontSize: "64px" }}>{item.thumbnail}</span>
                  
                  {/* Status Badge */}
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    padding: "4px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    background: statusColors.bg,
                    color: statusColors.color
                  }}>
                    {item.status}
                  </span>

                  {/* Type Badge */}
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    padding: "6px",
                    borderRadius: "8px",
                    background: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}>
                    <TypeIcon size={16} color="#64748b" />
                  </span>
                </div>

                {/* Content Info */}
                <div style={{ padding: "20px" }}>
                  <h3 style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#0f172a",
                    marginBottom: "12px",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {item.title}
                  </h3>

                  {/* Stats */}
                  <div style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "16px",
                    fontSize: "13px",
                    color: "#64748b"
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Users size={14} /> {item.students}
                    </span>
                    {item.rating > 0 && (
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Star size={14} fill="#f59e0b" color="#f59e0b" /> {item.rating}
                      </span>
                    )}
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={14} /> {item.duration}
                    </span>
                  </div>

                  {/* Price & Revenue */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "16px",
                    borderTop: "1px solid #f1f5f9"
                  }}>
                    <div>
                      {item.price > 0 ? (
                        <span style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#0f172a",
                          fontFamily: "Archivo"
                        }}>
                          ${item.price}
                        </span>
                      ) : (
                        <span style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#10b981"
                        }}>
                          Free
                        </span>
                      )}
                    </div>
                    {item.revenue > 0 && (
                      <div style={{ textAlign: "right" }}>
                        <div style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#10b981"
                        }}>
                          ${item.revenue.toLocaleString()}
                        </div>
                        <div style={{ fontSize: "12px", color: "#94a3b8" }}>Revenue</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div style={{
                  padding: "12px 20px",
                  borderTop: "1px solid #f1f5f9",
                  display: "flex",
                  gap: "8px"
                }}>
                  <button style={{
                    flex: 1,
                    padding: "10px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#64748b",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px"
                  }}>
                    <Edit size={14} /> Edit
                  </button>
                  <button style={{
                    flex: 1,
                    padding: "10px",
                    background: "#8b5cf610",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#8b5cf6",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px"
                  }}>
                    <Eye size={14} /> Preview
                  </button>
                  <button style={{
                    padding: "10px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    cursor: "pointer"
                  }}>
                    <MoreHorizontal size={16} color="#64748b" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* List View */
        <div style={{
          background: "white",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          overflow: "hidden"
        }}>
          {/* Table Header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 100px 100px 100px 100px 120px",
            gap: "16px",
            padding: "16px 24px",
            background: "#f8fafc",
            borderBottom: "1px solid #e2e8f0",
            fontSize: "12px",
            fontWeight: 600,
            color: "#64748b",
            textTransform: "uppercase"
          }}>
            <span>Content</span>
            <span>Type</span>
            <span>Status</span>
            <span>Students</span>
            <span>Revenue</span>
            <span>Actions</span>
          </div>

          {/* Table Body */}
          {filteredContent.map((item, index) => {
            const statusColors = getStatusColor(item.status);
            const TypeIcon = getTypeIcon(item.type);
            return (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 100px 100px 100px 100px 120px",
                  gap: "16px",
                  padding: "20px 24px",
                  alignItems: "center",
                  borderBottom: index < filteredContent.length - 1 ? "1px solid #f1f5f9" : "none"
                }}
              >
                {/* Content Info */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    background: "linear-gradient(135deg, #8b5cf615, #3b82f615)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px"
                  }}>
                    {item.thumbnail}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "4px"
                    }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                      {item.lessons} lessons • {item.duration}
                    </span>
                  </div>
                </div>

                {/* Type */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <TypeIcon size={16} color="#64748b" />
                  <span style={{ fontSize: "13px", color: "#64748b", textTransform: "capitalize" }}>
                    {item.type}
                  </span>
                </div>

                {/* Status */}
                <span style={{
                  display: "inline-flex",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  background: statusColors.bg,
                  color: statusColors.color,
                  width: "fit-content"
                }}>
                  {item.status}
                </span>

                {/* Students */}
                <span style={{ fontSize: "14px", color: "#0f172a", fontWeight: 500 }}>
                  {item.students.toLocaleString()}
                </span>

                {/* Revenue */}
                <span style={{
                  fontSize: "14px",
                  color: item.revenue > 0 ? "#10b981" : "#94a3b8",
                  fontWeight: 600
                }}>
                  {item.revenue > 0 ? `$${item.revenue.toLocaleString()}` : "-"}
                </span>

                {/* Actions */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <button style={{
                    padding: "8px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}>
                    <Edit size={14} color="#64748b" />
                  </button>
                  <button style={{
                    padding: "8px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}>
                    <Eye size={14} color="#64748b" />
                  </button>
                  <button style={{
                    padding: "8px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}>
                    <MoreHorizontal size={14} color="#64748b" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div style={{
          background: "white",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          padding: "80px 24px",
          textAlign: "center"
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            background: "#f8fafc",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px"
          }}>
            <Video size={40} color="#94a3b8" />
          </div>
          <h3 style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "8px",
            fontFamily: "Archivo"
          }}>
            No content found
          </h3>
          <p style={{
            color: "#64748b",
            fontSize: "15px",
            marginBottom: "24px"
          }}>
            Try adjusting your filters or create your first piece of content.
          </p>
          <Link href="/creator/content/new" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
            color: "white",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none"
          }}>
            <Plus size={18} />
            Create Content
          </Link>
        </div>
      )}
    </div>
  );
}
