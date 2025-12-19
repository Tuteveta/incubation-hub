'use client';

import { useState, useEffect } from 'react';
import {
  Server,
  Database,
  Cpu,
  HardDrive,
  Activity,
  Wifi,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw,
  Zap,
  Globe,
  Shield,
  Cloud,
  MemoryStick,
  Gauge,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';

export default function AdminSystemHealthPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date());
    }, 1500);
  };

  const systemStatus = {
    overall: 'healthy',
    uptime: '99.98%',
    lastIncident: '14 days ago'
  };

  const services = [
    {
      name: 'Web Application',
      status: 'operational',
      latency: '45ms',
      uptime: '99.99%',
      icon: Globe,
      description: 'Main application server'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      latency: '23ms',
      uptime: '99.99%',
      icon: Zap,
      description: 'REST & GraphQL endpoints'
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      latency: '12ms',
      uptime: '99.95%',
      icon: Database,
      description: 'PostgreSQL primary + replicas'
    },
    {
      name: 'Cache Layer',
      status: 'operational',
      latency: '2ms',
      uptime: '99.99%',
      icon: Cpu,
      description: 'Redis cluster'
    },
    {
      name: 'CDN',
      status: 'operational',
      latency: '15ms',
      uptime: '100%',
      icon: Cloud,
      description: 'Content delivery network'
    },
    {
      name: 'Video Streaming',
      status: 'degraded',
      latency: '120ms',
      uptime: '98.5%',
      icon: Activity,
      description: 'HLS streaming service'
    },
    {
      name: 'Authentication',
      status: 'operational',
      latency: '35ms',
      uptime: '99.99%',
      icon: Shield,
      description: 'OAuth & JWT services'
    },
    {
      name: 'Payment Gateway',
      status: 'operational',
      latency: '180ms',
      uptime: '99.97%',
      icon: Server,
      description: 'Stripe integration'
    },
  ];

  const serverMetrics = [
    {
      name: 'CPU Usage',
      value: 42,
      unit: '%',
      icon: Cpu,
      color: '#3b82f6',
      threshold: 80
    },
    {
      name: 'Memory',
      value: 67,
      unit: '%',
      icon: MemoryStick,
      color: '#8b5cf6',
      threshold: 85
    },
    {
      name: 'Disk Space',
      value: 54,
      unit: '%',
      icon: HardDrive,
      color: '#10b981',
      threshold: 90
    },
    {
      name: 'Network I/O',
      value: 234,
      unit: 'Mbps',
      icon: Wifi,
      color: '#f59e0b',
      threshold: 1000
    },
  ];

  const recentIncidents = [
    {
      id: 'INC-001',
      title: 'Video streaming latency spike',
      status: 'investigating',
      severity: 'medium',
      startTime: '10 minutes ago',
      affected: 'Video Streaming Service'
    },
    {
      id: 'INC-002',
      title: 'Database connection pool exhaustion',
      status: 'resolved',
      severity: 'high',
      startTime: '2 days ago',
      duration: '15 minutes',
      affected: 'Database Cluster'
    },
    {
      id: 'INC-003',
      title: 'CDN cache invalidation delay',
      status: 'resolved',
      severity: 'low',
      startTime: '5 days ago',
      duration: '8 minutes',
      affected: 'CDN'
    },
    {
      id: 'INC-004',
      title: 'Payment webhook timeout',
      status: 'resolved',
      severity: 'medium',
      startTime: '14 days ago',
      duration: '23 minutes',
      affected: 'Payment Gateway'
    },
  ];

  const performanceMetrics = [
    { label: 'Requests/sec', value: '12.4K', change: '+8%' },
    { label: 'Avg Response Time', value: '145ms', change: '-12%' },
    { label: 'Error Rate', value: '0.02%', change: '-0.01%' },
    { label: 'Active Connections', value: '8,432', change: '+15%' },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'operational':
        return { color: '#10b981', bg: '#dcfce7', icon: CheckCircle, label: 'Operational' };
      case 'degraded':
        return { color: '#f59e0b', bg: '#fef3c7', icon: AlertTriangle, label: 'Degraded' };
      case 'outage':
        return { color: '#ef4444', bg: '#fee2e2', icon: XCircle, label: 'Outage' };
      default:
        return { color: '#6b7280', bg: '#f3f4f6', icon: Clock, label: status };
    }
  };

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case 'critical':
        return { color: '#ef4444', bg: '#fee2e2' };
      case 'high':
        return { color: '#f97316', bg: '#ffedd5' };
      case 'medium':
        return { color: '#f59e0b', bg: '#fef3c7' };
      case 'low':
        return { color: '#3b82f6', bg: '#dbeafe' };
      default:
        return { color: '#6b7280', bg: '#f3f4f6' };
    }
  };

  const getIncidentStatusConfig = (status: string) => {
    switch (status) {
      case 'investigating':
        return { color: '#f59e0b', bg: '#fef3c7' };
      case 'identified':
        return { color: '#3b82f6', bg: '#dbeafe' };
      case 'monitoring':
        return { color: '#8b5cf6', bg: '#ede9fe' };
      case 'resolved':
        return { color: '#10b981', bg: '#dcfce7' };
      default:
        return { color: '#6b7280', bg: '#f3f4f6' };
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
            System Health
          </h1>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            Monitor infrastructure and service status
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: '#6b7280' }}>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
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
              fontWeight: 500,
              opacity: isRefreshing ? 0.7 : 1
            }}
          >
            <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* Overall Status Banner */}
      <div style={{
        background: systemStatus.overall === 'healthy' 
          ? 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
          : 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <CheckCircle size={28} color="white" />
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
              All Systems Operational
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
              No major issues reported
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginBottom: '4px' }}>Uptime (30d)</p>
            <p style={{ color: 'white', fontSize: '24px', fontWeight: 700 }}>{systemStatus.uptime}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginBottom: '4px' }}>Last Incident</p>
            <p style={{ color: 'white', fontSize: '24px', fontWeight: 700 }}>{systemStatus.lastIncident}</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {performanceMetrics.map((metric, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>{metric.label}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <p style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>{metric.value}</p>
              <span style={{
                fontSize: '12px',
                fontWeight: 500,
                color: metric.change.startsWith('+') ? '#10b981' : metric.change.startsWith('-') && metric.label !== 'Error Rate' && metric.label !== 'Avg Response Time' ? '#ef4444' : '#10b981'
              }}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Server Metrics and Services */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', marginBottom: '24px' }}>
        {/* Server Resources */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '20px' }}>
            Server Resources
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {serverMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const isWarning = metric.unit === '%' && metric.value > metric.threshold * 0.8;
              return (
                <div key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Icon size={18} color={metric.color} />
                      <span style={{ fontSize: '14px', color: '#374151' }}>{metric.name}</span>
                    </div>
                    <span style={{ 
                      fontSize: '14px', 
                      fontWeight: 600, 
                      color: isWarning ? '#f59e0b' : '#111827' 
                    }}>
                      {metric.value}{metric.unit}
                    </span>
                  </div>
                  {metric.unit === '%' && (
                    <div style={{ height: '8px', background: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${metric.value}%`,
                          height: '100%',
                          background: isWarning 
                            ? 'linear-gradient(90deg, #f59e0b, #f97316)'
                            : `linear-gradient(90deg, ${metric.color}, ${metric.color}cc)`,
                          borderRadius: '4px',
                          transition: 'width 0.5s ease'
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Status */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '20px' }}>
            Service Status
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {services.map((service, index) => {
              const Icon = service.icon;
              const statusConfig = getStatusConfig(service.status);
              const StatusIcon = statusConfig.icon;
              return (
                <div
                  key={index}
                  style={{
                    padding: '16px',
                    background: '#f9fafb',
                    borderRadius: '10px',
                    border: `1px solid ${service.status === 'degraded' ? '#fcd34d' : '#e5e7eb'}`
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Icon size={18} color="#6b7280" />
                      <span style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{service.name}</span>
                    </div>
                    <StatusIcon size={16} color={statusConfig.color} />
                  </div>
                  <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>{service.description}</p>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ fontSize: '11px', color: '#9ca3af' }}>
                      Latency: <strong style={{ color: '#374151' }}>{service.latency}</strong>
                    </span>
                    <span style={{ fontSize: '11px', color: '#9ca3af' }}>
                      Uptime: <strong style={{ color: '#374151' }}>{service.uptime}</strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Incidents */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>Recent Incidents</h3>
          <button style={{
            padding: '8px 16px',
            background: 'transparent',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '13px',
            color: '#374151',
            cursor: 'pointer'
          }}>
            View All
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {recentIncidents.map((incident) => {
            const severityConfig = getSeverityConfig(incident.severity);
            const statusConfig = getIncidentStatusConfig(incident.status);
            return (
              <div
                key={incident.id}
                style={{
                  padding: '16px 20px',
                  background: '#f9fafb',
                  borderRadius: '10px',
                  borderLeft: `4px solid ${severityConfig.color}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>{incident.id}</span>
                    <span style={{
                      padding: '2px 8px',
                      background: severityConfig.bg,
                      color: severityConfig.color,
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 500,
                      textTransform: 'uppercase'
                    }}>
                      {incident.severity}
                    </span>
                    <span style={{
                      padding: '2px 8px',
                      background: statusConfig.bg,
                      color: statusConfig.color,
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 500,
                      textTransform: 'capitalize'
                    }}>
                      {incident.status}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: 500, color: '#111827', marginBottom: '4px' }}>
                    {incident.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>
                    Affected: {incident.affected}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '13px', color: '#6b7280' }}>{incident.startTime}</p>
                  {incident.duration && (
                    <p style={{ fontSize: '12px', color: '#9ca3af' }}>Duration: {incident.duration}</p>
                  )}
                </div>
              </div>
            );
          })}
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
