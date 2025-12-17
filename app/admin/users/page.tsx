"use client";

import { useState } from "react";
import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Shield,
  UserX,
  UserCheck,
  Download,
  Plus,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  Video,
  GraduationCap,
  Star,
  Calendar,
  DollarSign
} from "lucide-react";

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"list" | "detail">("list");
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const users = [
    {
      id: "1",
      name: "Sarah Chen",
      email: "sarah.chen@example.com",
      role: "creator",
      tier: "Premium",
      status: "active",
      students: 15420,
      revenue: "$45,230",
      joined: "Jan 15, 2024",
      lastActive: "2 min ago",
      avatar: "SC"
    },
    {
      id: "2",
      name: "Marcus Johnson",
      email: "marcus.j@example.com",
      role: "creator",
      tier: "Premium",
      status: "active",
      students: 12890,
      revenue: "$38,670",
      joined: "Feb 3, 2024",
      lastActive: "1 hour ago",
      avatar: "MJ"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.r@example.com",
      role: "creator",
      tier: "Standard",
      status: "active",
      students: 8540,
      revenue: "$25,620",
      joined: "Mar 12, 2024",
      lastActive: "3 hours ago",
      avatar: "ER"
    },
    {
      id: "4",
      name: "Alex Kim",
      email: "alex.kim@example.com",
      role: "student",
      tier: "N/A",
      status: "active",
      students: null,
      revenue: null,
      joined: "Apr 5, 2024",
      lastActive: "Just now",
      avatar: "AK"
    },
    {
      id: "5",
      name: "Jordan Lee",
      email: "jordan.lee@example.com",
      role: "creator",
      tier: "Basic",
      status: "suspended",
      students: 2340,
      revenue: "$7,020",
      joined: "Mar 28, 2024",
      lastActive: "5 days ago",
      avatar: "JL"
    },
    {
      id: "6",
      name: "Taylor Smith",
      email: "taylor.s@example.com",
      role: "student",
      tier: "N/A",
      status: "active",
      students: null,
      revenue: null,
      joined: "May 1, 2024",
      lastActive: "30 min ago",
      avatar: "TS"
    },
    {
      id: "7",
      name: "Casey Brown",
      email: "casey.b@example.com",
      role: "creator",
      tier: "Standard",
      status: "pending",
      students: 0,
      revenue: "$0",
      joined: "May 15, 2024",
      lastActive: "1 day ago",
      avatar: "CB"
    }
  ];

  const stats = [
    { label: "Total Users", value: "24,847", icon: Users, color: "#3b82f6" },
    { label: "Active Creators", value: "3,428", icon: Video, color: "#8b5cf6" },
    { label: "Students", value: "21,419", icon: GraduationCap, color: "#10b981" },
    { label: "Pending Review", value: "12", icon: Shield, color: "#f59e0b" }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "creator": return "#8b5cf6";
      case "student": return "#3b82f6";
      case "admin": return "#ef4444";
      default: return "#64748b";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "#10b981";
      case "suspended": return "#ef4444";
      case "pending": return "#f59e0b";
      default: return "#64748b";
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Premium": return "#f59e0b";
      case "Standard": return "#8b5cf6";
      case "Basic": return "#3b82f6";
      default: return "#64748b";
    }
  };

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
            User Management
          </h1>
          <p style={{ color: "#64748b", fontSize: "15px" }}>
            Manage platform users, creators, and students
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
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
            <Download size={16} />
            Export
          </button>
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 16px",
            background: "#0f172a",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600
          }}>
            <Plus size={16} />
            Add User
          </button>
        </div>
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

      {/* Filters & Search */}
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
          {/* Search */}
          <div style={{ flex: 1, position: "relative" }}>
            <Search size={18} color="#94a3b8" style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)"
            }} />
            <input
              type="text"
              placeholder="Search users by name or email..."
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

          {/* Role Filter */}
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              background: "white",
              fontSize: "14px",
              color: "#0f172a",
              cursor: "pointer",
              minWidth: "140px"
            }}
          >
            <option value="all">All Roles</option>
            <option value="creator">Creators</option>
            <option value="student">Students</option>
            <option value="admin">Admins</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              background: "white",
              fontSize: "14px",
              color: "#0f172a",
              cursor: "pointer",
              minWidth: "140px"
            }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
            <option value="pending">Pending</option>
          </select>

          {selectedUsers.length > 0 && (
            <div style={{
              display: "flex",
              gap: "8px",
              paddingLeft: "16px",
              borderLeft: "1px solid #e2e8f0"
            }}>
              <button style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                background: "#fee2e2",
                color: "#dc2626",
                border: "none",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer"
              }}>
                <UserX size={16} />
                Suspend
              </button>
              <button style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                background: "#dcfce7",
                color: "#16a34a",
                border: "none",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer"
              }}>
                <UserCheck size={16} />
                Activate
              </button>
            </div>
          )}
        </div>

        {/* Users Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                <th style={{
                  padding: "14px 24px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(filteredUsers.map(u => u.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </th>
                <th style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  User
                </th>
                <th style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  Role
                </th>
                <th style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  Plan
                </th>
                <th style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  Status
                </th>
                <th style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  Students
                </th>
                <th style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  Revenue
                </th>
                <th style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  Last Active
                </th>
                <th style={{
                  padding: "14px 24px",
                  textAlign: "right",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  style={{
                    borderBottom: "1px solid #f1f5f9",
                    background: selectedUsers.includes(user.id) ? "#f8fafc" : "white"
                  }}
                >
                  <td style={{ padding: "16px 24px" }}>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td style={{ padding: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: `linear-gradient(135deg, ${getRoleColor(user.role)}, ${getRoleColor(user.role)}aa)`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "14px"
                      }}>
                        {user.avatar}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: "#0f172a", fontSize: "14px" }}>
                          {user.name}
                        </div>
                        <div style={{ color: "#64748b", fontSize: "13px" }}>
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      background: `${getRoleColor(user.role)}15`,
                      color: getRoleColor(user.role),
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: 500,
                      textTransform: "capitalize"
                    }}>
                      {user.role === "creator" ? <Video size={14} /> : <GraduationCap size={14} />}
                      {user.role}
                    </span>
                  </td>
                  <td style={{ padding: "16px" }}>
                    {user.tier !== "N/A" ? (
                      <span style={{
                        padding: "4px 10px",
                        background: `${getTierColor(user.tier)}15`,
                        color: getTierColor(user.tier),
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: 500
                      }}>
                        {user.tier}
                      </span>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: "13px" }}>—</span>
                    )}
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      background: `${getStatusColor(user.status)}15`,
                      color: getStatusColor(user.status),
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      textTransform: "capitalize"
                    }}>
                      <span style={{
                        width: "6px",
                        height: "6px",
                        background: getStatusColor(user.status),
                        borderRadius: "50%"
                      }} />
                      {user.status}
                    </span>
                  </td>
                  <td style={{ padding: "16px" }}>
                    {user.students !== null ? (
                      <span style={{ color: "#0f172a", fontWeight: 500, fontSize: "14px" }}>
                        {user.students.toLocaleString()}
                      </span>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: "13px" }}>—</span>
                    )}
                  </td>
                  <td style={{ padding: "16px" }}>
                    {user.revenue !== null ? (
                      <span style={{ color: "#10b981", fontWeight: 600, fontSize: "14px" }}>
                        {user.revenue}
                      </span>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: "13px" }}>—</span>
                    )}
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ color: "#64748b", fontSize: "13px" }}>
                      {user.lastActive}
                    </span>
                  </td>
                  <td style={{ padding: "16px 24px", textAlign: "right" }}>
                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                      <button style={{
                        padding: "8px",
                        background: "#f8fafc",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                      }}>
                        <Eye size={16} color="#64748b" />
                      </button>
                      <button style={{
                        padding: "8px",
                        background: "#f8fafc",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                      }}>
                        <Edit size={16} color="#64748b" />
                      </button>
                      <button style={{
                        padding: "8px",
                        background: "#f8fafc",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                      }}>
                        <MoreHorizontal size={16} color="#64748b" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{
          padding: "16px 24px",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ color: "#64748b", fontSize: "14px" }}>
            Showing {filteredUsers.length} of {users.length} users
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button style={{
              padding: "8px 12px",
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "14px",
              color: "#64748b"
            }}>
              <ChevronLeft size={16} />
              Previous
            </button>
            <button style={{
              padding: "8px 12px",
              background: "#0f172a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500
            }}>
              1
            </button>
            <button style={{
              padding: "8px 12px",
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#64748b"
            }}>
              2
            </button>
            <button style={{
              padding: "8px 12px",
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#64748b"
            }}>
              3
            </button>
            <button style={{
              padding: "8px 12px",
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "14px",
              color: "#64748b"
            }}>
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
