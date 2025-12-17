"use client";

import { useState } from "react";
import {
  FileText,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Flag,
  Clock,
  MoreHorizontal,
  Video,
  BookOpen,
  FileQuestion,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  ExternalLink,
  RefreshCw
} from "lucide-react";

export default function AdminContentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("pending");
  const [selectedType, setSelectedType] = useState("all");

  const contentItems = [
    {
      id: "1",
      title: "Advanced Machine Learning Techniques",
      type: "course",
      creator: "Sarah Chen",
      creatorAvatar: "SC",
      status: "pending",
      flagReason: "Reported for misleading claims",
      reportedBy: "3 users",
      submitted: "2 hours ago",
      thumbnail: null
    },
    {
      id: "2",
      title: "Cryptocurrency Trading Guide",
      type: "video",
      creator: "Marcus Johnson",
      creatorAvatar: "MJ",
      status: "flagged",
      flagReason: "Potential financial advice violation",
      reportedBy: "System AI",
      submitted: "5 hours ago",
      thumbnail: null
    },
    {
      id: "3",
      title: "Weight Loss Secrets Revealed",
      type: "course",
      creator: "Jordan Lee",
      creatorAvatar: "JL",
      status: "pending",
      flagReason: "Health claims require verification",
      reportedBy: "2 users",
      submitted: "1 day ago",
      thumbnail: null
    },
    {
      id: "4",
      title: "Python for Beginners",
      type: "course",
      creator: "Emily Rodriguez",
      creatorAvatar: "ER",
      status: "approved",
      flagReason: null,
      reportedBy: null,
      submitted: "2 days ago",
      thumbnail: null
    },
    {
      id: "5",
      title: "Dropshipping Masterclass",
      type: "video",
      creator: "Casey Brown",
      creatorAvatar: "CB",
      status: "rejected",
      flagReason: "Misleading income claims",
      reportedBy: "5 users",
      submitted: "3 days ago",
      thumbnail: null
    }
  ];

  const stats = [
    { label: "Pending Review", value: "24", icon: Clock, color: "#f59e0b" },
    { label: "Flagged Content", value: "8", icon: Flag, color: "#ef4444" },
    { label: "Approved Today", value: "47", icon: CheckCircle, color: "#10b981" },
    { label: "Rejected Today", value: "3", icon: XCircle, color: "#64748b" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "#10b981";
      case "rejected": return "#ef4444";
      case "pending": return "#f59e0b";
      case "flagged": return "#ef4444";
      default: return "#64748b";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course": return BookOpen;
      case "video": return Video;
      default: return FileQuestion;
    }
  };

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || item.status === selectedStatus;
    const matchesType = selectedType === "all" || item.type === selectedType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div>
      {/* Page Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "32px"
      }}>
        <div>
          <h1 style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#0f172a",
            fontFamily: "Archivo",
            marginBottom: "4px"
          }}>
            Content Moderation
          </h1>
          <p style={{ color: "#64748b", fontSize: "15px" }}>
            Review and moderate platform content
          </p>
        </div>
        <button style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          background: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "14px",
          color: "#64748b"
        }}>
          <RefreshCw size={16} />
          Refresh Queue
        </button>
      </div>

      {/* Stats Cards */}
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
                border: "1px solid #e2e8f0"
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: `${stat.color}15`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Icon size={20} color={stat.color} />
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
                  <div style={{ color: "#64748b", fontSize: "13px" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div style={{
        background: "white",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",
        marginBottom: "24px"
      }}>
        <div style={{
          padding: "16px 24px",
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          gap: "16px"
        }}>
          <div style={{ flex: 1, position: "relative" }}>
            <Search size={18} color="#94a3b8" style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)"
            }} />
            <input
              type="text"
              placeholder="Search content or creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px 10px 42px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                outline: "none"
              }}
            />
          </div>

          {/* Status Tabs */}
          <div style={{
            display: "flex",
            background: "#f1f5f9",
            borderRadius: "10px",
            padding: "4px"
          }}>
            {["all", "pending", "flagged", "approved", "rejected"].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  background: selectedStatus === status ? "white" : "transparent",
                  color: selectedStatus === status ? "#0f172a" : "#64748b",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  boxShadow: selectedStatus === status ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
                }}
              >
                {status}
              </button>
            ))}
          </div>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              background: "white",
              fontSize: "14px",
              cursor: "pointer"
            }}
          >
            <option value="all">All Types</option>
            <option value="course">Courses</option>
            <option value="video">Videos</option>
          </select>
        </div>

        {/* Content List */}
        <div style={{ padding: "16px" }}>
          {filteredContent.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <div
                key={item.id}
                style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "12px",
                  border: "1px solid #e2e8f0"
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px"
                }}>
                  {/* Thumbnail Placeholder */}
                  <div style={{
                    width: "120px",
                    height: "80px",
                    background: "linear-gradient(135deg, #e2e8f0, #f1f5f9)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <TypeIcon size={32} color="#94a3b8" />
                  </div>

                  {/* Content Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "8px"
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#0f172a",
                          marginBottom: "4px"
                        }}>
                          {item.title}
                        </h3>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          color: "#64748b",
                          fontSize: "13px"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <div style={{
                              width: "24px",
                              height: "24px",
                              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                              borderRadius: "6px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontSize: "10px",
                              fontWeight: 600
                            }}>
                              {item.creatorAvatar}
                            </div>
                            {item.creator}
                          </div>
                          <span>•</span>
                          <span style={{ textTransform: "capitalize" }}>{item.type}</span>
                          <span>•</span>
                          <span>{item.submitted}</span>
                        </div>
                      </div>

                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 12px",
                        background: `${getStatusColor(item.status)}15`,
                        color: getStatusColor(item.status),
                        borderRadius: "20px",
                        fontSize: "13px",
                        fontWeight: 500,
                        textTransform: "capitalize"
                      }}>
                        <span style={{
                          width: "6px",
                          height: "6px",
                          background: getStatusColor(item.status),
                          borderRadius: "50%"
                        }} />
                        {item.status}
                      </span>
                    </div>

                    {/* Flag Reason */}
                    {item.flagReason && (
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 14px",
                        background: "#fef3c7",
                        borderRadius: "8px",
                        marginBottom: "12px"
                      }}>
                        <AlertTriangle size={16} color="#d97706" />
                        <span style={{ color: "#92400e", fontSize: "13px" }}>
                          <strong>Reason:</strong> {item.flagReason}
                        </span>
                        {item.reportedBy && (
                          <span style={{ color: "#92400e", fontSize: "13px", marginLeft: "auto" }}>
                            Reported by: {item.reportedBy}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Actions */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      <button style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 14px",
                        background: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: 500,
                        cursor: "pointer",
                        color: "#64748b"
                      }}>
                        <Eye size={16} />
                        Preview
                      </button>
                      <button style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 14px",
                        background: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: 500,
                        cursor: "pointer",
                        color: "#64748b"
                      }}>
                        <MessageSquare size={16} />
                        Message Creator
                      </button>
                      
                      {(item.status === "pending" || item.status === "flagged") && (
                        <>
                          <div style={{ flex: 1 }} />
                          <button style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "8px 16px",
                            background: "#fee2e2",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                            color: "#dc2626"
                          }}>
                            <ThumbsDown size={16} />
                            Reject
                          </button>
                          <button style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "8px 16px",
                            background: "#10b981",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                            color: "white"
                          }}>
                            <ThumbsUp size={16} />
                            Approve
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredContent.length === 0 && (
            <div style={{
              textAlign: "center",
              padding: "48px",
              color: "#64748b"
            }}>
              <FileText size={48} color="#e2e8f0" style={{ marginBottom: "16px" }} />
              <p style={{ fontSize: "16px", marginBottom: "4px" }}>No content found</p>
              <p style={{ fontSize: "14px" }}>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
