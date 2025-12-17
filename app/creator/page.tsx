"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Eye,
  Clock,
  BookOpen,
  Star,
  Play,
  ArrowUpRight,
  MoreHorizontal,
  Video,
  FileText,
  ChevronRight,
  Zap,
  Target,
  Award,
  BarChart3
} from "lucide-react";

export default function CreatorDashboard() {
  const [timeRange, setTimeRange] = useState("7d");

  const stats = [
    {
      label: "Total Revenue",
      value: "$12,847",
      change: "+23.5%",
      trend: "up",
      icon: DollarSign,
      color: "#10b981",
      bgColor: "#10b98115"
    },
    {
      label: "Total Students",
      value: "1,284",
      change: "+12.3%",
      trend: "up",
      icon: Users,
      color: "#3b82f6",
      bgColor: "#3b82f615"
    },
    {
      label: "Course Views",
      value: "45.2K",
      change: "+18.7%",
      trend: "up",
      icon: Eye,
      color: "#8b5cf6",
      bgColor: "#8b5cf615"
    },
    {
      label: "Avg. Watch Time",
      value: "24m 32s",
      change: "-2.1%",
      trend: "down",
      icon: Clock,
      color: "#f59e0b",
      bgColor: "#f59e0b15"
    }
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Complete AI & Machine Learning Bootcamp",
      students: 847,
      revenue: "$8,470",
      rating: 4.9,
      thumbnail: "🤖",
      status: "published"
    },
    {
      id: 2,
      title: "Advanced Python for Data Science",
      students: 312,
      revenue: "$3,120",
      rating: 4.8,
      thumbnail: "🐍",
      status: "published"
    },
    {
      id: 3,
      title: "Web Development Masterclass 2025",
      students: 125,
      revenue: "$1,250",
      rating: 4.7,
      thumbnail: "🌐",
      status: "draft"
    }
  ];

  const recentActivity = [
    { id: 1, type: "enrollment", text: "Sarah M. enrolled in AI Bootcamp", time: "5 min ago", icon: Users },
    { id: 2, type: "payment", text: "Received $49.99 from course sale", time: "1 hour ago", icon: DollarSign },
    { id: 3, type: "review", text: "New 5-star review on Python course", time: "2 hours ago", icon: Star },
    { id: 4, type: "milestone", text: "Reached 1,000 students milestone!", time: "1 day ago", icon: Award },
    { id: 5, type: "view", text: "Your course was featured on homepage", time: "2 days ago", icon: Zap }
  ];

  const quickActions = [
    { label: "Create Course", icon: Video, href: "/creator/content/new", color: "#8b5cf6" },
    { label: "Upload Video", icon: Play, href: "/creator/content/upload", color: "#3b82f6" },
    { label: "Write Article", icon: FileText, href: "/creator/content/article", color: "#10b981" },
    { label: "View Analytics", icon: Target, href: "/creator/analytics", color: "#f59e0b" }
  ];

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
            Welcome back, Creator! 👋
          </h1>
          <p style={{ color: "#64748b", fontSize: "15px" }}>
            Here's what's happening with your courses today.
          </p>
        </div>

        {/* Time Range Filter */}
        <div style={{
          display: "flex",
          gap: "4px",
          padding: "4px",
          background: "#f1f5f9",
          borderRadius: "10px"
        }}>
          {["24h", "7d", "30d", "90d"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                background: timeRange === range ? "white" : "transparent",
                color: timeRange === range ? "#0f172a" : "#64748b",
                fontWeight: timeRange === range ? 600 : 500,
                fontSize: "13px",
                cursor: "pointer",
                boxShadow: timeRange === range ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.2s"
              }}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        marginBottom: "32px"
      }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                transition: "all 0.2s"
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "16px"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: stat.bgColor,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Icon size={24} color={stat.color} />
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: stat.trend === "up" ? "#10b98115" : "#ef444415",
                  color: stat.trend === "up" ? "#10b981" : "#ef4444",
                  fontSize: "13px",
                  fontWeight: 600
                }}>
                  <TrendIcon size={14} />
                  {stat.change}
                </div>
              </div>
              <div style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: "4px",
                fontFamily: "Archivo"
              }}>
                {stat.value}
              </div>
              <div style={{ color: "#64748b", fontSize: "14px" }}>
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        marginBottom: "32px"
      }}>
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              href={action.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px",
                background: "white",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
            >
              <div style={{
                width: "44px",
                height: "44px",
                background: `${action.color}15`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Icon size={22} color={action.color} />
              </div>
              <span style={{
                fontWeight: 600,
                color: "#0f172a",
                fontSize: "15px"
              }}>
                {action.label}
              </span>
              <ChevronRight size={18} color="#94a3b8" style={{ marginLeft: "auto" }} />
            </Link>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        gap: "24px"
      }}>
        {/* Course Performance */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          overflow: "hidden"
        }}>
          <div style={{
            padding: "20px 24px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h2 style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0f172a",
              fontFamily: "Archivo"
            }}>
              Top Performing Courses
            </h2>
            <Link href="/creator/content" style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#8b5cf6",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none"
            }}>
              View All <ArrowUpRight size={16} />
            </Link>
          </div>

          <div>
            {recentCourses.map((course, index) => (
              <div
                key={course.id}
                style={{
                  padding: "20px 24px",
                  borderBottom: index < recentCourses.length - 1 ? "1px solid #f1f5f9" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px"
                }}
              >
                <div style={{
                  width: "56px",
                  height: "56px",
                  background: "linear-gradient(135deg, #8b5cf615, #3b82f615)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px"
                }}>
                  {course.thumbnail}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "4px"
                  }}>
                    <h3 style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#0f172a"
                    }}>
                      {course.title}
                    </h3>
                    <span style={{
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      background: course.status === "published" ? "#10b98115" : "#f59e0b15",
                      color: course.status === "published" ? "#10b981" : "#f59e0b"
                    }}>
                      {course.status}
                    </span>
                  </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    fontSize: "13px",
                    color: "#64748b"
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Users size={14} /> {course.students} students
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Star size={14} fill="#f59e0b" color="#f59e0b" /> {course.rating}
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#10b981",
                    fontFamily: "Archivo"
                  }}>
                    {course.revenue}
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Revenue</div>
                </div>
                <button style={{
                  padding: "8px",
                  borderRadius: "8px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer"
                }}>
                  <MoreHorizontal size={18} color="#94a3b8" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          overflow: "hidden"
        }}>
          <div style={{
            padding: "20px 24px",
            borderBottom: "1px solid #e2e8f0"
          }}>
            <h2 style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0f172a",
              fontFamily: "Archivo"
            }}>
              Recent Activity
            </h2>
          </div>

          <div style={{ padding: "8px 16px" }}>
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "14px 8px",
                    borderBottom: index < recentActivity.length - 1 ? "1px solid #f1f5f9" : "none"
                  }}
                >
                  <div style={{
                    width: "36px",
                    height: "36px",
                    background: "#f1f5f9",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <Icon size={18} color="#64748b" />
                  </div>
                  <div>
                    <p style={{
                      fontSize: "14px",
                      color: "#0f172a",
                      marginBottom: "2px"
                    }}>
                      {activity.text}
                    </p>
                    <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                      {activity.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div style={{
        marginTop: "24px",
        background: "white",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",
        padding: "24px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        }}>
          <h2 style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#0f172a",
            fontFamily: "Archivo"
          }}>
            Revenue Overview
          </h2>
          <div style={{
            display: "flex",
            gap: "16px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "12px",
                height: "12px",
                background: "#8b5cf6",
                borderRadius: "3px"
              }} />
              <span style={{ fontSize: "13px", color: "#64748b" }}>This Period</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "12px",
                height: "12px",
                background: "#e2e8f0",
                borderRadius: "3px"
              }} />
              <span style={{ fontSize: "13px", color: "#64748b" }}>Last Period</span>
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div style={{
          height: "300px",
          background: "linear-gradient(180deg, #8b5cf610 0%, transparent 100%)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dashed #e2e8f0"
        }}>
          <div style={{ textAlign: "center" }}>
            <BarChart3 size={48} color="#94a3b8" style={{ marginBottom: "12px" }} />
            <p style={{ color: "#64748b", fontSize: "14px" }}>
              Revenue chart will be displayed here
            </p>
            <p style={{ color: "#94a3b8", fontSize: "13px" }}>
              Integrate with Recharts for visualization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
