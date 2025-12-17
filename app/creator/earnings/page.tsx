'use client';

import { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Calendar,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  Wallet,
  PiggyBank,
  Receipt,
  Settings,
} from 'lucide-react';

export default function EarningsPage() {
  const [timeRange, setTimeRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  const earningStats = [
    {
      label: 'Total Earnings',
      value: '$24,847.00',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
    },
    {
      label: 'Available Balance',
      value: '$8,234.50',
      change: 'Withdrawable',
      trend: 'neutral',
      icon: Wallet,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      label: 'Pending',
      value: '$3,412.00',
      change: 'Processing',
      trend: 'neutral',
      icon: Clock,
      color: 'from-orange-500 to-amber-600',
    },
    {
      label: 'This Month',
      value: '$4,892.00',
      change: '+12.4%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const revenueBySource = [
    { source: 'Course Sales', amount: 15420, percentage: 62, color: 'bg-purple-500' },
    { source: 'Subscriptions', amount: 5847, percentage: 24, color: 'bg-blue-500' },
    { source: 'Tips & Donations', amount: 2180, percentage: 9, color: 'bg-green-500' },
    { source: 'Affiliate', amount: 1400, percentage: 5, color: 'bg-orange-500' },
  ];

  const monthlyEarnings = [
    { month: 'Jul', earnings: 2840, students: 124 },
    { month: 'Aug', earnings: 3420, students: 156 },
    { month: 'Sep', earnings: 3180, students: 142 },
    { month: 'Oct', earnings: 4250, students: 187 },
    { month: 'Nov', earnings: 4890, students: 215 },
    { month: 'Dec', earnings: 4892, students: 234 },
  ];

  const maxEarnings = Math.max(...monthlyEarnings.map((m) => m.earnings));

  const transactions = [
    {
      id: 'TXN-001',
      type: 'Course Sale',
      description: 'Advanced React Patterns - Sarah Johnson',
      amount: '+$49.00',
      date: 'Dec 15, 2024',
      status: 'completed',
    },
    {
      id: 'TXN-002',
      type: 'Subscription',
      description: 'Monthly subscription - Michael Chen',
      amount: '+$29.00',
      date: 'Dec 15, 2024',
      status: 'completed',
    },
    {
      id: 'TXN-003',
      type: 'Withdrawal',
      description: 'Bank transfer to ****4521',
      amount: '-$2,500.00',
      date: 'Dec 14, 2024',
      status: 'completed',
    },
    {
      id: 'TXN-004',
      type: 'Course Sale',
      description: 'TypeScript Masterclass - Emily Davis',
      amount: '+$79.00',
      date: 'Dec 14, 2024',
      status: 'completed',
    },
    {
      id: 'TXN-005',
      type: 'Tip',
      description: 'Tip from James Wilson',
      amount: '+$15.00',
      date: 'Dec 13, 2024',
      status: 'completed',
    },
    {
      id: 'TXN-006',
      type: 'Course Sale',
      description: 'Next.js Full Stack Guide - Lisa Anderson',
      amount: '+$89.00',
      date: 'Dec 13, 2024',
      status: 'pending',
    },
    {
      id: 'TXN-007',
      type: 'Refund',
      description: 'Refund request - Robert Taylor',
      amount: '-$49.00',
      date: 'Dec 12, 2024',
      status: 'completed',
    },
  ];

  const payoutMethods = [
    {
      type: 'bank',
      name: 'Bank Account',
      details: '****4521',
      icon: Building2,
      primary: true,
    },
    {
      type: 'stripe',
      name: 'Stripe Connect',
      details: 'stripe_acct_xxx',
      icon: CreditCard,
      primary: false,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
            <CheckCircle className="w-3 h-3" />
            Completed
          </span>
        );
      case 'pending':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        );
      case 'failed':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">
            <AlertCircle className="w-3 h-3" />
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
          <p className="text-gray-600 mt-1">
            Track your revenue and manage payouts
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="12m">Last 12 months</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Download className="w-4 h-4" />
            Withdraw
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {earningStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              {stat.trend !== 'neutral' && (
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              )}
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              {stat.trend === 'neutral' && (
                <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'transactions', label: 'Transactions' },
            { id: 'payouts', label: 'Payout Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Earnings Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-gray-900">Earnings Overview</h3>
                <p className="text-sm text-gray-500">Monthly earnings trend</p>
              </div>
            </div>

            {/* Simple Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-4">
              {monthlyEarnings.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex gap-1 items-end justify-center h-48">
                    <div
                      className="w-2/3 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm transition-all hover:opacity-80"
                      style={{ height: `${(data.earnings / maxEarnings) * 100}%` }}
                      title={`Earnings: $${data.earnings}`}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{data.month}</span>
                  <span className="text-xs font-medium text-gray-700">
                    ${(data.earnings / 1000).toFixed(1)}k
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue by Source */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-6">Revenue by Source</h3>
            <div className="space-y-4">
              {revenueBySource.map((source, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{source.source}</span>
                    <span className="text-sm font-medium text-gray-900">
                      ${source.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${source.color} rounded-full transition-all`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {source.percentage}% of total
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Total Revenue</span>
                <span className="font-bold text-gray-900 text-lg">
                  ${revenueBySource.reduce((a, b) => a + b.amount, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'transactions' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Filters */}
          <div className="p-4 border-b border-gray-100 flex items-center gap-4">
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="all">All Types</option>
              <option value="sale">Course Sales</option>
              <option value="subscription">Subscriptions</option>
              <option value="tip">Tips</option>
              <option value="withdrawal">Withdrawals</option>
              <option value="refund">Refunds</option>
            </select>
            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          {/* Transactions Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Transaction
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {transaction.description}
                        </p>
                        <p className="text-sm text-gray-500">{transaction.id}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {transaction.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {transaction.date}
                    </td>
                    <td className="px-4 py-4">
                      {getStatusBadge(transaction.status)}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span
                        className={`font-semibold ${
                          transaction.amount.startsWith('+')
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {transaction.amount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-600">Showing 1-7 of 124 transactions</p>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm">
                1
              </button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
                2
              </button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
                3
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'payouts' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payout Methods */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900">Payout Methods</h3>
              <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                + Add Method
              </button>
            </div>
            <div className="space-y-4">
              {payoutMethods.map((method, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 ${
                    method.primary ? 'border-purple-200 bg-purple-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          method.primary ? 'bg-purple-200' : 'bg-gray-200'
                        }`}
                      >
                        <method.icon
                          className={`w-5 h-5 ${
                            method.primary ? 'text-purple-600' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{method.name}</p>
                        <p className="text-sm text-gray-500">{method.details}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {method.primary && (
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">
                          Primary
                        </span>
                      )}
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payout Schedule */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-6">Payout Schedule</h3>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Frequency</span>
                  <select className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <p className="text-xs text-gray-400">
                  Funds are released every Monday
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Minimum Payout</span>
                  <span className="font-medium text-gray-900">$100.00</span>
                </div>
                <p className="text-xs text-gray-400">
                  Payouts are held until minimum is reached
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Next Payout</span>
                  <span className="font-medium text-gray-900">Dec 23, 2024</span>
                </div>
                <p className="text-xs text-gray-400">
                  Estimated amount: $8,234.50
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Download className="w-4 h-4" />
                Request Instant Payout
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                1% fee for instant payouts
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
