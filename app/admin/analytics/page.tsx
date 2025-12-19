'use client';

import { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Play,
  BookOpen,
  UserPlus,
  ShoppingCart,
} from 'lucide-react';

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const kpis = [
    {
      label: 'Total Revenue',
      value: '$847,392',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: '#10b981',
      subtitle: 'vs last period'
    },
    {
      label: 'Active Users',
      value: '24,847',
      change: '+8.3%',
      trend: 'up',
      icon: Users,
      color: '#8b5cf6',
      subtitle: 'Monthly active'
    },
    {
      label: 'Page Views',
      value: '1.2M',
      change: '+15.7%',
      trend: 'up',
      icon: Eye,
      color: '#3b82f6',
      subtitle: 'This month'
    },
    {
      label: 'Avg. Session',
      value: '8m 24s',
      change: '-2.1%',
      trend: 'down',
      icon: Clock,
      color: '#f59e0b',
      subtitle: 'Per user'
    },
  ];

  const revenueData = [
    { month: 'Jul', revenue: 65000, users: 18500 },
    { month: 'Aug', revenue: 72000, users: 19200 },
    { month: 'Sep', revenue: 78000, users: 20100 },
    { month: 'Oct', revenue: 85000, users: 21800 },
    { month: 'Nov', revenue: 92000, users: 23400 },
    { month: 'Dec', revenue: 98000, users: 24847 },
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

  const trafficSources = [
    { source: 'Organic Search', visitors: 45200, percentage: 38, color: '#10b981' },
    { source: 'Direct', visitors: 32100, percentage: 27, color: '#3b82f6' },
    { source: 'Social Media', visitors: 21400, percentage: 18, color: '#8b5cf6' },
    { source: 'Referral', visitors: 14200, percentage: 12, color: '#f59e0b' },
    { source: 'Email', visitors: 5900, percentage: 5, color: '#ef4444' },
  ];

  const deviceStats = [
    { device: 'Desktop', percentage: 52, icon: Monitor, color: '#3b82f6' },
    { device: 'Mobile', percentage: 38, icon: Smartphone, color: '#10b981' },
    { device: 'Tablet', percentage: 10, icon: Tablet, color: '#8b5cf6' },
  ];

  const topCountries = [
    { country: 'United States', flag: '🇺🇸', users: 12450, percentage: 42 },
    { country: 'United Kingdom', flag: '🇬🇧', users: 4820, percentage: 16 },
    { country: 'Canada', flag: '🇨🇦', users: 3240, percentage: 11 },
    { country: 'Germany', flag: '🇩🇪', users: 2890, percentage: 10 },
    { country: 'Australia', flag: '🇦🇺', users: 2140, percentage: 7 },
    { country: 'India', flag: '🇮🇳', users: 1850, percentage: 6 },
  ];

  const conversionFunnel = [
    { stage: 'Visitors', count: 125000, percentage: 100, color: '#e2e8f0' },
    { stage: 'Sign Ups', count: 18750, percentage: 15, color: '#3b82f6' },
    { stage: 'Course Views', count: 9375, percentage: 7.5, color: '#8b5cf6' },
    { stage: 'Purchases', count: 3125, percentage: 2.5, color: '#10b981' },
  ];

  const realTimeStats = [
    { label: 'Active Now', value: '847', icon: Users, color: '#10b981' },
    { label: 'Viewing Courses', value: '234', icon: Play, color: '#3b82f6' },
    { label: 'In Checkout', value: '45', icon: ShoppingCart, color: '#f59e0b' },
    { label: 'New Signups (1h)', value: '23', icon: UserPlus, color: '#8b5cf6' },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
            Platform Analytics
          </h1>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            Real-time insights and performance metrics
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            style={{
              padding: '10px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#374151',
              cursor: 'pointer',
              background: 'white'
            }}
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="12m">Last 12 months</option>
          </select>
          <button
            onClick={handleRefresh}
            style={{
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
            }}
          >
            <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button
            style={{
              padding: '10px 16px',
              background: '#f59e0b',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Real-time Stats Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        borderRadius: '12px',
        padding: '20px 24px',
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '8px',
            height: '8px',
            background: '#10b981',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }} />
          <span style={{ color: 'white', fontWeight: 600 }}>Live Activity</span>
        </div>
        <div style={{ display: 'flex', gap: '40px' }}>
          {realTimeStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Icon size={18} color={stat.color} />
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '12px' }}>{stat.label}</p>
                  <p style={{ color: 'white', fontSize: '18px', fontWeight: 700 }}>{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '24px' }}>
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          const isUp = kpi.trend === 'up';
          return (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `${kpi.color}15`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} color={kpi.color} />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  background: isUp ? '#dcfce7' : '#fee2e2',
                  borderRadius: '6px'
                }}>
                  {isUp ? <ArrowUpRight size={14} color="#16a34a" /> : <ArrowDownRight size={14} color="#dc2626" />}
                  <span style={{ fontSize: '12px', fontWeight: 600, color: isUp ? '#16a34a' : '#dc2626' }}>
                    {kpi.change}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>{kpi.label}</p>
              <p style={{ fontSize: '28px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>{kpi.value}</p>
              <p style={{ fontSize: '12px', color: '#9ca3af' }}>{kpi.subtitle}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '24px' }}>
        {/* Revenue Chart */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>Revenue & User Growth</h3>
              <p style={{ fontSize: '13px', color: '#6b7280' }}>Monthly performance overview</p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '3px' }} />
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Revenue</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', background: '#3b82f6', borderRadius: '3px' }} />
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Users</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '200px' }}>
            {revenueData.map((data, index) => (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '160px' }}>
                  <div
                    style={{
                      width: '24px',
                      background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                      borderRadius: '4px 4px 0 0',
                      height: `${(data.revenue / maxRevenue) * 100}%`,
                      transition: 'height 0.3s ease'
                    }}
                  />
                  <div
                    style={{
                      width: '24px',
                      background: 'linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)',
                      borderRadius: '4px 4px 0 0',
                      height: `${(data.users / 25000) * 100}%`,
                      transition: 'height 0.3s ease'
                    }}
                  />
                </div>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '20px' }}>Traffic Sources</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {trafficSources.map((source, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '14px', color: '#374151' }}>{source.source}</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>{source.percentage}%</span>
                </div>
                <div style={{ height: '8px', background: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${source.percentage}%`,
                      height: '100%',
                      background: source.color,
                      borderRadius: '4px',
                      transition: 'width 0.5s ease'
                    }}
                  />
                </div>
                <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                  {source.visitors.toLocaleString()} visitors
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {/* Device Breakdown */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '20px' }}>Device Breakdown</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {deviceStats.map((device, index) => {
              const Icon = device.icon;
              return (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: `${device.color}15`,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={22} color={device.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '14px', color: '#374151' }}>{device.device}</span>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>{device.percentage}%</span>
                    </div>
                    <div style={{ height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${device.percentage}%`,
                          height: '100%',
                          background: device.color,
                          borderRadius: '3px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Countries */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>Top Countries</h3>
            <Globe size={18} color="#6b7280" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {topCountries.map((country, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>{country.flag}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', color: '#374151' }}>{country.country}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>
                    {country.users.toLocaleString()}
                  </p>
                  <p style={{ fontSize: '11px', color: '#9ca3af' }}>{country.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '20px' }}>Conversion Funnel</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {conversionFunnel.map((stage, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '14px', color: '#374151' }}>{stage.stage}</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>
                    {stage.count.toLocaleString()}
                  </span>
                </div>
                <div style={{
                  height: '32px',
                  background: stage.color,
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '12px',
                  width: `${Math.max(stage.percentage, 20)}%`,
                  transition: 'width 0.5s ease'
                }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: index === 0 ? '#64748b' : 'white' }}>
                    {stage.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
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
