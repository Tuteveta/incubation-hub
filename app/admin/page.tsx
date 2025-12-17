"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Video,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  ArrowUpRight,
  Eye,
  UserPlus,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity,
  MoreHorizontal,
  Filter,
  Download,
  RefreshCw
} from "lucide-react";

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("7d");

  const kpiCards = [
    {
      title: "Total Users",
      value: "24,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "#3b82f6",
      subtext: "1,284 new this week"
    },
    {
      title: "Active Creators",
      value: "3,428",
      change: "+8.3%",
      trend: "up",
      icon: Video,
      color: "#8b5cf6",
      subtext: "89% retention rate"
    },
    {
      title: "Platform Revenue",
      value: "$127,450",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "#10b981",
      subtext: "MRR from subscriptions"
    },
    {
      title: "Content Published",
      value: "8,934",
      change: "+15.7%",
      trend: "up",
      icon: FileText,
      color: "#f59e0b",
      subtext: "342 new courses this week"
    }
  ];

  const subscriptionBreakdown = [
    { tier: "Premium", count: 892, revenue: "$177,608", color: "#f59e0b", percentage: 26 },
    { tier: "Standard", count: 1247, revenue: "$98,513", color: "#8b5cf6", percentage: 36 },
    { tier: "Basic", count: 1289, revenue: "$37,381", color: "#3b82f6", percentage: 38 }
  ];

  const recentActivity = [
    { id: 1, type: "signup", user: "Sarah Chen", action: "subscribed to Premium plan", time: "2 min ago", avatar: "SC", color: "#f59e0b" },
    { id: 2, type: "content", user: "Marcus Johnson", action: "published new course 'Fitness Fundamentals'", time: "15 min ago", avatar: "MJ", color: "#8b5cf6" },
    { id: 3, type: "payment", user: "Platform", action: "processed 47 subscription payments", time: "1 hour ago", avatar: "$$", color: "#10b981" },
    { id: 4, type: "report", user: "System", action: "flagged content for review", time: "2 hours ago", avatar: "!!", color: "#ef4444" },
    { id: 5, type: "signup", user: "Emily Rodriguez", action: "upgraded to Standard plan", time: "3 hours ago", avatar: "ER", color: "#3b82f6" }
  ];

  const pendingActions = [
    { id: 1, title: "Content Review Required", count: 5, priority: "high", icon: AlertTriangle },
    { id: 2, title: "Creator Verification", count: 12, priority: "medium", icon: UserPlus },
    { id: 3, title: "Support Tickets", count: 8, priority: "medium", icon: Clock },
    { id: 4, title: "Payout Requests", count: 3, priority: "low", icon: DollarSign }
  ];

  const topCreators = [
    { name: "Sarah Chen", students: 15420, revenue: "$45,230", growth: "+18%", avatar: "SC", tier: "Premium" },
    { name: "Marcus Johnson", students: 12890, revenue: "$38,670", growth: "+12%", avatar: "MJ", tier: "Premium" },
    { name: "Emily Rodriguez", students: 10540, revenue: "$31,620", growth: "+24%", avatar: "ER", tier: "Premium" },
    { name: "Alex Kim", students: 8920, revenue: "$26,760", growth: "+9%", avatar: "AK", tier: "Standard" },
    { name: "Jordan Lee", students: 7650, revenue: "$22,950", growth: "+15%", avatar: "JL", tier: "Standard" }
  ];

  const chartData = [
    { month: "Jan", users: 18200, revenue: 89000 },
    { month: "Feb", users: 19400, revenue: 95000 },
    { month: "Mar", users: 20100, revenue: 102000 },
    { month: "Apr", users: 21300, revenue: 108000 },
    { month: "May", users: 22800, revenue: 115000 },
    { month: "Jun", users: 24847, revenue: 127450 }
  ];

  const maxRevenue = Math.max(...chartData.map(d => d.revenue));
  const maxUsers = Math.max(...chartData.map(d => d.users));

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
            Platform Dashboard
          </h1>
          <p style={{ color: "#64748b", fontSize: "15px" }}>
            Monitor platform health, user growth, and revenue metrics
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              background: "white",
              fontSize: "14px",
              color: "#0f172a",
              cursor: "pointer"
            }}
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
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
            Refresh
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
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        marginBottom: "32px"
      }}>
        {kpiCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "16px"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: `${card.color}15`,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Icon size={24} color={card.color} />
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: card.trend === "up" ? "#dcfce7" : "#fee2e2",
                  color: card.trend === "up" ? "#16a34a" : "#dc2626",
                  fontSize: "13px",
                  fontWeight: 600
                }}>
                  {card.trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {card.change}
                </div>
              </div>
              <div style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#0f172a",
                fontFamily: "Archivo",
                marginBottom: "4px"
              }}>
                {card.value}
              </div>
              <div style={{ color: "#64748b", fontSize: "14px", marginBottom: "4px" }}>
                {card.title}
              </div>
              <div style={{ color: "#94a3b8", fontSize: "13px" }}>
                {card.subtext}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "24px",
        marginBottom: "32px"
      }}>
        {/* Growth Chart */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #e2e8f0"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px"
          }}>
            <div>
              <h3 style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#0f172a",
                fontFamily: "Archivo",
                marginBottom: "4px"
              }}>
                Platform Growth
              </h3>
              <p style={{ color: "#64748b", fontSize: "14px" }}>
                User growth and revenue trends
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "12px", height: "12px", background: "#3b82f6", borderRadius: "3px" }} />
                <span style={{ color: "#64748b", fontSize: "13px" }}>Users</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "12px", height: "12px", background: "#10b981", borderRadius: "3px" }} />
                <span style={{ color: "#64748b", fontSize: "13px" }}>Revenue</span>
              </div>
            </div>
          </div>
          
          {/* Simple Bar Chart */}
          <div style={{ height: "200px", display: "flex", alignItems: "flex-end", gap: "16px", paddingBottom: "30px", position: "relative" }}>
            {chartData.map((data, index) => (
              <div key={index} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "4px", alignItems: "flex-end", height: "160px" }}>
                  <div style={{
                    width: "20px",
                    height: `${(data.users / maxUsers) * 160}px`,
                    background: "linear-gradient(180deg, #3b82f6, #60a5fa)",
                    borderRadius: "4px 4px 0 0"
                  }} />
                  <div style={{
                    width: "20px",
                    height: `${(data.revenue / maxRevenue) * 160}px`,
                    background: "linear-gradient(180deg, #10b981, #34d399)",
                    borderRadius: "4px 4px 0 0"
                  }} />
                </div>
                <span style={{ color: "#64748b", fontSize: "12px", fontWeight: 500 }}>{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Breakdown */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #e2e8f0"
        }}>
          <h3 style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#0f172a",
            fontFamily: "Archivo",
            marginBottom: "20px"
          }}>
            Subscription Breakdown
          </h3>
          
          {subscriptionBreakdown.map((tier, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "10px",
                    height: "10px",
                    background: tier.color,
                    borderRadius: "3px"
                  }} />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>{tier.tier}</span>
                </div>
                <span style={{ color: "#64748b", fontSize: "14px" }}>{tier.count} creators</span>
              </div>
              <div style={{
                height: "8px",
                background: "#f1f5f9",
                borderRadius: "4px",
                overflow: "hidden"
              }}>
                <div style={{
                  width: `${tier.percentage}%`,
                  height: "100%",
                  background: tier.color,
                  borderRadius: "4px"
                }} />
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6px"
              }}>
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>{tier.percentage}%</span>
                <span style={{ color: "#10b981", fontSize: "13px", fontWeight: 600 }}>{tier.revenue}/mo</span>
              </div>
            </div>
          ))}

          <div style={{
            marginTop: "24px",
            padding: "16px",
            background: "#f8fafc",
            borderRadius: "10px"
          }}>
            <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "4px" }}>Total MRR</div>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", fontFamily: "Archivo" }}>
              $313,502
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "24px"
      }}>
        {/* Pending Actions */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #e2e8f0"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <h3 style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0f172a",
              fontFamily: "Archivo"
            }}>
              Pending Actions
            </h3>
            <span style={{
              background: "#fef3c7",
              color: "#d97706",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 600
            }}>
              28 total
            </span>
          </div>

          {pendingActions.map((action, index) => {
            const Icon = action.icon;
            const priorityColors: Record<string, string> = {
              high: "#ef4444",
              medium: "#f59e0b",
              low: "#10b981"
            };
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px",
                  background: "#f8fafc",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  cursor: "pointer"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "36px",
                    height: "36px",
                    background: `${priorityColors[action.priority]}15`,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Icon size={18} color={priorityColors[action.priority]} />
                  </div>
                  <span style={{ color: "#0f172a", fontWeight: 500, fontSize: "14px" }}>
                    {action.title}
                  </span>
                </div>
                <span style={{
                  background: `${priorityColors[action.priority]}15`,
                  color: priorityColors[action.priority],
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 600
                }}>
                  {action.count}
                </span>
              </div>
            );
          })}

          <Link href="/admin/reports" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "12px",
            color: "#8b5cf6",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginTop: "8px"
          }}>
            View All Actions <ArrowRight size={16} />
          </Link>
        </div>

        {/* Top Creators */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #e2e8f0"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <h3 style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0f172a",
              fontFamily: "Archivo"
            }}>
              Top Creators
            </h3>
            <Link href="/admin/users" style={{
              color: "#8b5cf6",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 600
            }}>
              View All
            </Link>
          </div>

          {topCreators.map((creator, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: index < topCreators.length - 1 ? "1px solid #f1f5f9" : "none"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "14px"
                }}>
                  {creator.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#0f172a", fontSize: "14px" }}>
                    {creator.name}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "12px" }}>
                    {creator.students.toLocaleString()} students
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 600, color: "#10b981", fontSize: "14px" }}>
                  {creator.revenue}
                </div>
                <div style={{ color: "#64748b", fontSize: "12px" }}>
                  {creator.growth}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #e2e8f0"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <h3 style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0f172a",
              fontFamily: "Archivo"
            }}>
              Recent Activity
            </h3>
            <button style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#64748b"
            }}>
              <MoreHorizontal size={20} />
            </button>
          </div>

          {recentActivity.map((activity, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "12px 0",
                borderBottom: index < recentActivity.length - 1 ? "1px solid #f1f5f9" : "none"
              }}
            >
              <div style={{
                width: "36px",
                height: "36px",
                background: `${activity.color}20`,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: activity.color,
                fontWeight: 600,
                fontSize: "12px",
                flexShrink: 0
              }}>
                {activity.avatar}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: "13px",
                  color: "#0f172a",
                  lineHeight: 1.4
                }}>
                  <span style={{ fontWeight: 600 }}>{activity.user}</span>{" "}
                  <span style={{ color: "#64748b" }}>{activity.action}</span>
                </div>
                <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>
                  {activity.time}
                </div>
              </div>
            </div>
          ))}

          <Link href="/admin/analytics" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "12px",
            color: "#8b5cf6",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginTop: "8px"
          }}>
            View Activity Log <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
