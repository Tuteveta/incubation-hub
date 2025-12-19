'use client';

import { useState } from 'react';
import {
  CreditCard,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Filter,
  MoreVertical,
  Check,
  X,
  Clock,
  AlertCircle,
  Crown,
  Star,
  Zap,
  Download,
  RefreshCw,
  ChevronDown,
  Eye,
  Mail,
  Ban,
} from 'lucide-react';

export default function AdminSubscriptionsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const stats = [
    {
      label: 'Total MRR',
      value: '$127,450',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign,
      color: '#10b981'
    },
    {
      label: 'Active Subscriptions',
      value: '3,428',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: '#8b5cf6'
    },
    {
      label: 'Churn Rate',
      value: '2.4%',
      change: '-0.3%',
      trend: 'up',
      icon: TrendingDown,
      color: '#3b82f6'
    },
    {
      label: 'Avg. Revenue/User',
      value: '$37.18',
      change: '+4.1%',
      trend: 'up',
      icon: CreditCard,
      color: '#f59e0b'
    },
  ];

  const plans = [
    {
      name: 'Basic',
      icon: Zap,
      price: '$9.99',
      subscribers: 1289,
      revenue: '$12,877',
      color: '#3b82f6',
      features: ['5 courses', 'Basic support', 'Mobile access']
    },
    {
      name: 'Standard',
      icon: Star,
      price: '$29.99',
      subscribers: 1247,
      revenue: '$37,393',
      color: '#8b5cf6',
      features: ['25 courses', 'Priority support', 'Certificates']
    },
    {
      name: 'Premium',
      icon: Crown,
      price: '$79.99',
      subscribers: 892,
      revenue: '$71,351',
      color: '#f59e0b',
      features: ['Unlimited courses', '24/7 support', 'Live sessions']
    },
  ];

  const recentSubscriptions = [
    {
      id: 'SUB-001',
      user: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      plan: 'Premium',
      status: 'active',
      amount: '$79.99',
      startDate: 'Dec 15, 2024',
      nextBilling: 'Jan 15, 2025'
    },
    {
      id: 'SUB-002',
      user: 'Michael Chen',
      email: 'm.chen@email.com',
      plan: 'Standard',
      status: 'active',
      amount: '$29.99',
      startDate: 'Dec 14, 2024',
      nextBilling: 'Jan 14, 2025'
    },
    {
      id: 'SUB-003',
      user: 'Emily Davis',
      email: 'emily.d@email.com',
      plan: 'Basic',
      status: 'trial',
      amount: '$9.99',
      startDate: 'Dec 18, 2024',
      nextBilling: 'Jan 1, 2025'
    },
    {
      id: 'SUB-004',
      user: 'James Wilson',
      email: 'j.wilson@email.com',
      plan: 'Premium',
      status: 'past_due',
      amount: '$79.99',
      startDate: 'Nov 10, 2024',
      nextBilling: 'Overdue'
    },
    {
      id: 'SUB-005',
      user: 'Lisa Anderson',
      email: 'l.anderson@email.com',
      plan: 'Standard',
      status: 'cancelled',
      amount: '$29.99',
      startDate: 'Oct 20, 2024',
      nextBilling: 'N/A'
    },
    {
      id: 'SUB-006',
      user: 'David Brown',
      email: 'd.brown@email.com',
      plan: 'Basic',
      status: 'active',
      amount: '$9.99',
      startDate: 'Dec 12, 2024',
      nextBilling: 'Jan 12, 2025'
    },
  ];

  const mrrHistory = [
    { month: 'Jul', mrr: 98000 },
    { month: 'Aug', mrr: 105000 },
    { month: 'Sep', mrr: 112000 },
    { month: 'Oct', mrr: 118000 },
    { month: 'Nov', mrr: 124000 },
    { month: 'Dec', mrr: 127450 },
  ];

  const maxMrr = Math.max(...mrrHistory.map(d => d.mrr));

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'active':
        return { label: 'Active', color: '#10b981', bg: '#dcfce7', icon: Check };
      case 'trial':
        return { label: 'Trial', color: '#3b82f6', bg: '#dbeafe', icon: Clock };
      case 'past_due':
        return { label: 'Past Due', color: '#f59e0b', bg: '#fef3c7', icon: AlertCircle };
      case 'cancelled':
        return { label: 'Cancelled', color: '#ef4444', bg: '#fee2e2', icon: X };
      default:
        return { label: status, color: '#6b7280', bg: '#f3f4f6', icon: Clock };
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Premium': return '#f59e0b';
      case 'Standard': return '#8b5cf6';
      case 'Basic': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
            Subscriptions
          </h1>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            Manage subscription plans and billing
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
            <Download size={16} />
            Export
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
            <CreditCard size={16} />
            Manage Plans
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '24px' }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isUp = stat.trend === 'up';
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
                  background: `${stat.color}15`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} color={stat.color} />
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
                    {stat.change}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>{stat.label}</p>
              <p style={{ fontSize: '28px', fontWeight: 700, color: '#111827' }}>{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Plans and MRR */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
        {/* Subscription Plans */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '20px' }}>
            Subscription Plans
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  style={{
                    padding: '20px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        background: `${plan.color}15`,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={22} color={plan.color} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>{plan.name}</h4>
                        <p style={{ fontSize: '20px', fontWeight: 700, color: plan.color }}>{plan.price}<span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 400 }}>/month</span></p>
                      </div>
                    </div>
                    <button style={{
                      padding: '6px 12px',
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: '#374151',
                      cursor: 'pointer'
                    }}>
                      Edit
                    </button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #e5e7eb' }}>
                    <div>
                      <p style={{ fontSize: '12px', color: '#6b7280' }}>Subscribers</p>
                      <p style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>{plan.subscribers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#6b7280' }}>Monthly Revenue</p>
                      <p style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>{plan.revenue}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MRR Chart */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>MRR Growth</h3>
              <p style={{ fontSize: '13px', color: '#6b7280' }}>Monthly Recurring Revenue</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>$127,450</p>
              <p style={{ fontSize: '12px', color: '#10b981' }}>+30% from July</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '200px' }}>
            {mrrHistory.map((data, index) => (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '100%',
                  background: index === mrrHistory.length - 1 
                    ? 'linear-gradient(180deg, #f59e0b 0%, #d97706 100%)'
                    : 'linear-gradient(180deg, #e5e7eb 0%, #d1d5db 100%)',
                  borderRadius: '6px 6px 0 0',
                  height: `${(data.mrr / maxMrr) * 160}px`,
                  transition: 'height 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingTop: '8px'
                }}>
                  <span style={{ 
                    fontSize: '10px', 
                    fontWeight: 600, 
                    color: index === mrrHistory.length - 1 ? 'white' : '#6b7280'
                  }}>
                    ${(data.mrr / 1000).toFixed(0)}k
                  </span>
                </div>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>Recent Subscriptions</h3>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                <input
                  type="text"
                  placeholder="Search subscriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '8px 12px 8px 36px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    width: '250px'
                  }}
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#374151',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="trial">Trial</option>
                <option value="past_due">Past Due</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Customer</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Plan</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Amount</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Start Date</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Next Billing</th>
                <th style={{ padding: '12px 24px', textAlign: 'right', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentSubscriptions.map((sub) => {
                const statusConfig = getStatusConfig(sub.status);
                const StatusIcon = statusConfig.icon;
                return (
                  <tr key={sub.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '14px'
                        }}>
                          {sub.user.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p style={{ fontWeight: 500, color: '#111827', fontSize: '14px' }}>{sub.user}</p>
                          <p style={{ fontSize: '12px', color: '#6b7280' }}>{sub.email}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{
                        padding: '4px 12px',
                        background: `${getPlanColor(sub.plan)}15`,
                        color: getPlanColor(sub.plan),
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 500
                      }}>
                        {sub.plan}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        background: statusConfig.bg,
                        color: statusConfig.color,
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 500
                      }}>
                        <StatusIcon size={14} />
                        {statusConfig.label}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: '#111827' }}>{sub.amount}</td>
                    <td style={{ padding: '16px 24px', color: '#6b7280', fontSize: '14px' }}>{sub.startDate}</td>
                    <td style={{ padding: '16px 24px', color: sub.nextBilling === 'Overdue' ? '#ef4444' : '#6b7280', fontSize: '14px', fontWeight: sub.nextBilling === 'Overdue' ? 600 : 400 }}>
                      {sub.nextBilling}
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button style={{
                          padding: '6px',
                          background: 'transparent',
                          border: '1px solid #e5e7eb',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          color: '#6b7280'
                        }} title="View Details">
                          <Eye size={16} />
                        </button>
                        <button style={{
                          padding: '6px',
                          background: 'transparent',
                          border: '1px solid #e5e7eb',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          color: '#6b7280'
                        }} title="Send Email">
                          <Mail size={16} />
                        </button>
                        <button style={{
                          padding: '6px',
                          background: 'transparent',
                          border: '1px solid #e5e7eb',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          color: '#6b7280'
                        }} title="More Actions">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ padding: '16px 24px', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>Showing 1-6 of 3,428 subscriptions</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{
              padding: '8px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              background: 'white',
              fontSize: '14px',
              color: '#374151',
              cursor: 'pointer'
            }}>
              Previous
            </button>
            <button style={{
              padding: '8px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              background: 'white',
              fontSize: '14px',
              color: '#374151',
              cursor: 'pointer'
            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
