'use client';

import { useState } from 'react';
import {
  FileText,
  Download,
  Calendar,
  Filter,
  Search,
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  Clock,
  RefreshCw,
  ChevronDown,
  Eye,
  Mail,
  Trash2,
  Plus,
  Play,
  CheckCircle,
  AlertCircle,
  FileSpreadsheet,
  FileBarChart,
} from 'lucide-react';

export default function AdminReportsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('30d');

  const reportCategories = [
    { id: 'all', label: 'All Reports', count: 24 },
    { id: 'revenue', label: 'Revenue', count: 6 },
    { id: 'users', label: 'Users', count: 5 },
    { id: 'content', label: 'Content', count: 7 },
    { id: 'engagement', label: 'Engagement', count: 6 },
  ];

  const quickReports = [
    {
      title: 'Monthly Revenue Summary',
      description: 'Complete revenue breakdown by plan, region, and creator',
      icon: DollarSign,
      color: '#10b981',
      lastGenerated: '2 hours ago',
      format: 'PDF'
    },
    {
      title: 'User Growth Report',
      description: 'New signups, retention rates, and churn analysis',
      icon: Users,
      color: '#8b5cf6',
      lastGenerated: '1 day ago',
      format: 'Excel'
    },
    {
      title: 'Course Performance',
      description: 'Top courses, completion rates, and student feedback',
      icon: BookOpen,
      color: '#3b82f6',
      lastGenerated: '3 hours ago',
      format: 'PDF'
    },
    {
      title: 'Platform Analytics',
      description: 'Traffic sources, device usage, and session metrics',
      icon: BarChart3,
      color: '#f59e0b',
      lastGenerated: '30 minutes ago',
      format: 'Excel'
    },
  ];

  const scheduledReports = [
    {
      id: 'SR-001',
      name: 'Weekly Revenue Report',
      schedule: 'Every Monday, 9:00 AM',
      recipients: ['admin@creatorhub.com', 'finance@creatorhub.com'],
      status: 'active',
      lastRun: 'Dec 16, 2024',
      nextRun: 'Dec 23, 2024'
    },
    {
      id: 'SR-002',
      name: 'Monthly User Analytics',
      schedule: '1st of each month, 8:00 AM',
      recipients: ['admin@creatorhub.com'],
      status: 'active',
      lastRun: 'Dec 1, 2024',
      nextRun: 'Jan 1, 2025'
    },
    {
      id: 'SR-003',
      name: 'Daily Signups Summary',
      schedule: 'Daily, 11:00 PM',
      recipients: ['growth@creatorhub.com'],
      status: 'paused',
      lastRun: 'Dec 18, 2024',
      nextRun: 'Paused'
    },
  ];

  const recentReports = [
    {
      id: 'RPT-001',
      name: 'Q4 2024 Revenue Analysis',
      type: 'revenue',
      generatedAt: 'Dec 20, 2024, 10:30 AM',
      generatedBy: 'System',
      size: '2.4 MB',
      format: 'pdf',
      status: 'completed'
    },
    {
      id: 'RPT-002',
      name: 'Creator Payout Report - December',
      type: 'revenue',
      generatedAt: 'Dec 20, 2024, 9:15 AM',
      generatedBy: 'Admin User',
      size: '1.8 MB',
      format: 'xlsx',
      status: 'completed'
    },
    {
      id: 'RPT-003',
      name: 'User Engagement Metrics',
      type: 'engagement',
      generatedAt: 'Dec 19, 2024, 4:00 PM',
      generatedBy: 'System',
      size: '3.2 MB',
      format: 'pdf',
      status: 'completed'
    },
    {
      id: 'RPT-004',
      name: 'Course Completion Analysis',
      type: 'content',
      generatedAt: 'Dec 19, 2024, 2:30 PM',
      generatedBy: 'Admin User',
      size: '1.5 MB',
      format: 'pdf',
      status: 'completed'
    },
    {
      id: 'RPT-005',
      name: 'New User Acquisition Report',
      type: 'users',
      generatedAt: 'Dec 18, 2024, 11:00 AM',
      generatedBy: 'System',
      size: '890 KB',
      format: 'xlsx',
      status: 'completed'
    },
    {
      id: 'RPT-006',
      name: 'Platform Health Summary',
      type: 'engagement',
      generatedAt: 'Dec 18, 2024, 9:00 AM',
      generatedBy: 'System',
      size: '1.1 MB',
      format: 'pdf',
      status: 'processing'
    },
  ];

  const reportTemplates = [
    {
      name: 'Revenue by Region',
      description: 'Breakdown of revenue by geographic region',
      fields: ['Date Range', 'Region', 'Currency'],
      estimatedTime: '2-3 min'
    },
    {
      name: 'Creator Performance',
      description: 'Individual creator metrics and earnings',
      fields: ['Creator ID', 'Date Range', 'Metrics'],
      estimatedTime: '3-5 min'
    },
    {
      name: 'Student Progress',
      description: 'Course completion and learning analytics',
      fields: ['Course ID', 'Date Range', 'Include Feedback'],
      estimatedTime: '5-7 min'
    },
    {
      name: 'Subscription Churn',
      description: 'Churn analysis with reasons and patterns',
      fields: ['Date Range', 'Plan Type', 'Exit Survey'],
      estimatedTime: '4-6 min'
    },
  ];

  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'revenue':
        return { color: '#10b981', bg: '#dcfce7' };
      case 'users':
        return { color: '#8b5cf6', bg: '#ede9fe' };
      case 'content':
        return { color: '#3b82f6', bg: '#dbeafe' };
      case 'engagement':
        return { color: '#f59e0b', bg: '#fef3c7' };
      default:
        return { color: '#6b7280', bg: '#f3f4f6' };
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'pdf':
        return FileText;
      case 'xlsx':
        return FileSpreadsheet;
      default:
        return FileBarChart;
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
            Reports
          </h1>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            Generate and manage platform reports
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            padding: '10px 16px',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            color: '#374151'
          }}>
            <Calendar size={16} />
            Schedule Report
          </button>
          <button style={{
            padding: '10px 20px',
            background: '#f59e0b',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Plus size={16} />
            Create Report
          </button>
        </div>
      </div>

      {/* Quick Reports */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
          Quick Reports
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {quickReports.map((report, index) => {
            const Icon = report.icon;
            return (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = report.color;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: `${report.color}15`,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Icon size={22} color={report.color} />
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '6px' }}>
                  {report.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px', lineHeight: 1.4 }}>
                  {report.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                    Last: {report.lastGenerated}
                  </span>
                  <span style={{
                    padding: '4px 8px',
                    background: '#f3f4f6',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#6b7280'
                  }}>
                    {report.format}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Recent Reports */}
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>Recent Reports</h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '13px',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {reportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  style={{
                    padding: '8px 16px',
                    background: activeTab === category.id ? '#f59e0b' : '#f3f4f6',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: activeTab === category.id ? 'white' : '#6b7280',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {category.label}
                  <span style={{
                    padding: '2px 6px',
                    background: activeTab === category.id ? 'rgba(255,255,255,0.2)' : '#e5e7eb',
                    borderRadius: '4px',
                    fontSize: '11px'
                  }}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: '0' }}>
            {recentReports.map((report) => {
              const typeConfig = getTypeConfig(report.type);
              const FormatIcon = getFormatIcon(report.format);
              return (
                <div
                  key={report.id}
                  style={{
                    padding: '16px 24px',
                    borderBottom: '1px solid #f3f4f6',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      background: typeConfig.bg,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FormatIcon size={20} color={typeConfig.color} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 500, color: '#111827', marginBottom: '4px' }}>
                        {report.name}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>{report.generatedAt}</span>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>•</span>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>{report.size}</span>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>•</span>
                        <span style={{
                          padding: '2px 8px',
                          background: typeConfig.bg,
                          color: typeConfig.color,
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: 500,
                          textTransform: 'capitalize'
                        }}>
                          {report.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {report.status === 'processing' ? (
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        background: '#fef3c7',
                        color: '#d97706',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 500
                      }}>
                        <RefreshCw size={14} className="animate-spin" />
                        Processing
                      </span>
                    ) : (
                      <>
                        <button style={{
                          padding: '8px',
                          background: 'transparent',
                          border: '1px solid #e5e7eb',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          color: '#6b7280'
                        }} title="Preview">
                          <Eye size={16} />
                        </button>
                        <button style={{
                          padding: '8px 16px',
                          background: '#f59e0b',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '13px',
                          fontWeight: 500
                        }}>
                          <Download size={14} />
                          Download
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ padding: '16px 24px', borderTop: '1px solid #e5e7eb' }}>
            <button style={{
              width: '100%',
              padding: '10px',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#6b7280',
              cursor: 'pointer'
            }}>
              View All Reports
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Scheduled Reports */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#111827' }}>Scheduled Reports</h3>
              <button style={{
                padding: '6px 12px',
                background: '#f3f4f6',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#6b7280',
                cursor: 'pointer'
              }}>
                Manage
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {scheduledReports.map((report) => (
                <div
                  key={report.id}
                  style={{
                    padding: '14px',
                    background: '#f9fafb',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{report.name}</h4>
                    <span style={{
                      padding: '2px 8px',
                      background: report.status === 'active' ? '#dcfce7' : '#f3f4f6',
                      color: report.status === 'active' ? '#16a34a' : '#6b7280',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 500,
                      textTransform: 'capitalize'
                    }}>
                      {report.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '6px' }}>
                    {report.schedule}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', color: '#9ca3af' }}>
                      Next: {report.nextRun}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Report Templates */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
              Report Templates
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {reportTemplates.map((template, index) => (
                <div
                  key={index}
                  style={{
                    padding: '14px',
                    background: '#f9fafb',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#f9fafb'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 500, color: '#111827' }}>{template.name}</h4>
                    <span style={{ fontSize: '11px', color: '#9ca3af' }}>~{template.estimatedTime}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>{template.description}</p>
                </div>
              ))}
            </div>
            <button style={{
              width: '100%',
              marginTop: '12px',
              padding: '10px',
              background: 'transparent',
              border: '1px dashed #d1d5db',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#6b7280',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <Plus size={16} />
              Create Custom Template
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
