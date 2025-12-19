'use client';

import { useState } from 'react';
import {
  Settings,
  Globe,
  Bell,
  Shield,
  CreditCard,
  Mail,
  Database,
  Palette,
  Users,
  Lock,
  Key,
  Smartphone,
  Monitor,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info,
  ExternalLink,
  Upload,
  Trash2,
  Plus,
  Eye,
  EyeOff,
  Copy,
  RotateCcw,
} from 'lucide-react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'integrations', label: 'Integrations', icon: Database },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'api', label: 'API', icon: Key },
  ];

  const integrations = [
    {
      name: 'Stripe',
      description: 'Payment processing',
      icon: '💳',
      status: 'connected',
      lastSync: '2 minutes ago'
    },
    {
      name: 'AWS S3',
      description: 'File storage',
      icon: '☁️',
      status: 'connected',
      lastSync: '5 minutes ago'
    },
    {
      name: 'SendGrid',
      description: 'Email delivery',
      icon: '📧',
      status: 'connected',
      lastSync: '1 hour ago'
    },
    {
      name: 'Google Analytics',
      description: 'Analytics tracking',
      icon: '📊',
      status: 'connected',
      lastSync: '30 minutes ago'
    },
    {
      name: 'Slack',
      description: 'Team notifications',
      icon: '💬',
      status: 'disconnected',
      lastSync: 'Never'
    },
    {
      name: 'Intercom',
      description: 'Customer support',
      icon: '💁',
      status: 'disconnected',
      lastSync: 'Never'
    },
  ];

  const apiKeys = [
    {
      name: 'Production API Key',
      key: 'sk_live_*****************************8f4a',
      created: 'Oct 15, 2024',
      lastUsed: '2 minutes ago',
      status: 'active'
    },
    {
      name: 'Development API Key',
      key: 'sk_test_*****************************3b2c',
      created: 'Nov 1, 2024',
      lastUsed: '1 hour ago',
      status: 'active'
    },
    {
      name: 'Webhook Secret',
      key: 'whsec_*****************************9d1e',
      created: 'Oct 15, 2024',
      lastUsed: '5 minutes ago',
      status: 'active'
    },
  ];

  const renderGeneralSettings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
          Platform Information
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Platform Name
            </label>
            <input
              type="text"
              defaultValue="CreatorHub"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Support Email
            </label>
            <input
              type="email"
              defaultValue="support@creatorhub.com"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Default Timezone
            </label>
            <select
              defaultValue="America/Los_Angeles"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="Europe/London">London (GMT)</option>
              <option value="Asia/Tokyo">Tokyo (JST)</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Default Language
            </label>
            <select
              defaultValue="en"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
          Platform Features
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'Enable user registration', description: 'Allow new users to create accounts', enabled: true },
            { label: 'Require email verification', description: 'Users must verify email before accessing content', enabled: true },
            { label: 'Enable creator applications', description: 'Allow users to apply to become creators', enabled: true },
            { label: 'Maintenance mode', description: 'Show maintenance page to all visitors', enabled: false },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                background: '#f9fafb',
                borderRadius: '8px'
              }}
            >
              <div>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#111827', marginBottom: '2px' }}>
                  {feature.label}
                </p>
                <p style={{ fontSize: '13px', color: '#6b7280' }}>{feature.description}</p>
              </div>
              <label style={{ position: 'relative', display: 'inline-block', width: '48px', height: '26px' }}>
                <input
                  type="checkbox"
                  defaultChecked={feature.enabled}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: feature.enabled ? '#f59e0b' : '#d1d5db',
                  borderRadius: '26px',
                  transition: '0.3s'
                }}>
                  <span style={{
                    position: 'absolute',
                    content: '',
                    height: '20px',
                    width: '20px',
                    left: feature.enabled ? '25px' : '3px',
                    bottom: '3px',
                    background: 'white',
                    borderRadius: '50%',
                    transition: '0.3s'
                  }} />
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBrandingSettings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
          Logo & Favicon
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div style={{ padding: '24px', background: '#f9fafb', borderRadius: '12px', border: '2px dashed #d1d5db', textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              borderRadius: '16px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '32px',
              fontWeight: 700
            }}>
              C
            </div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '4px' }}>Platform Logo</p>
            <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>PNG, SVG up to 2MB</p>
            <button style={{
              padding: '8px 16px',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '13px',
              color: '#374151',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Upload size={14} />
              Upload New
            </button>
          </div>
          <div style={{ padding: '24px', background: '#f9fafb', borderRadius: '12px', border: '2px dashed #d1d5db', textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              borderRadius: '8px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: 700
            }}>
              C
            </div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '4px' }}>Favicon</p>
            <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>ICO, PNG 32x32px</p>
            <button style={{
              padding: '8px 16px',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '13px',
              color: '#374151',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Upload size={14} />
              Upload New
            </button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
          Brand Colors
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { label: 'Primary Color', color: '#f59e0b' },
            { label: 'Secondary Color', color: '#8b5cf6' },
            { label: 'Accent Color', color: '#3b82f6' },
          ].map((item, index) => (
            <div key={index}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
                {item.label}
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  background: item.color,
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb'
                }} />
                <input
                  type="text"
                  defaultValue={item.color}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: 'monospace'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
          Authentication Settings
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'Require 2FA for admins', description: 'All admin accounts must enable two-factor authentication', enabled: true },
            { label: 'Force password reset (90 days)', description: 'Users must reset password every 90 days', enabled: false },
            { label: 'Allow social login', description: 'Enable Google, GitHub, and other OAuth providers', enabled: true },
            { label: 'Session timeout', description: 'Auto-logout after 30 minutes of inactivity', enabled: true },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                background: '#f9fafb',
                borderRadius: '8px'
              }}
            >
              <div>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#111827', marginBottom: '2px' }}>
                  {feature.label}
                </p>
                <p style={{ fontSize: '13px', color: '#6b7280' }}>{feature.description}</p>
              </div>
              <label style={{ position: 'relative', display: 'inline-block', width: '48px', height: '26px' }}>
                <input type="checkbox" defaultChecked={feature.enabled} style={{ opacity: 0, width: 0, height: 0 }} />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: feature.enabled ? '#f59e0b' : '#d1d5db',
                  borderRadius: '26px',
                  transition: '0.3s'
                }}>
                  <span style={{
                    position: 'absolute',
                    height: '20px',
                    width: '20px',
                    left: feature.enabled ? '25px' : '3px',
                    bottom: '3px',
                    background: 'white',
                    borderRadius: '50%',
                    transition: '0.3s'
                  }} />
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
          Password Policy
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Minimum Length
            </label>
            <select
              defaultValue="8"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            >
              <option value="6">6 characters</option>
              <option value="8">8 characters</option>
              <option value="10">10 characters</option>
              <option value="12">12 characters</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Password Expiry
            </label>
            <select
              defaultValue="never"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            >
              <option value="never">Never</option>
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIntegrationsSettings = () => (
    <div>
      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
        Connected Services
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {integrations.map((integration, index) => (
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
                <span style={{ fontSize: '28px' }}>{integration.icon}</span>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#111827' }}>{integration.name}</h4>
                  <p style={{ fontSize: '13px', color: '#6b7280' }}>{integration.description}</p>
                </div>
              </div>
              <span style={{
                padding: '4px 10px',
                background: integration.status === 'connected' ? '#dcfce7' : '#f3f4f6',
                color: integration.status === 'connected' ? '#16a34a' : '#6b7280',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 500,
                textTransform: 'capitalize'
              }}>
                {integration.status}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                {integration.status === 'connected' ? `Last sync: ${integration.lastSync}` : 'Not connected'}
              </span>
              <button style={{
                padding: '6px 14px',
                background: integration.status === 'connected' ? 'white' : '#f59e0b',
                border: integration.status === 'connected' ? '1px solid #e5e7eb' : 'none',
                borderRadius: '6px',
                fontSize: '13px',
                color: integration.status === 'connected' ? '#374151' : 'white',
                cursor: 'pointer'
              }}>
                {integration.status === 'connected' ? 'Configure' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderApiSettings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>API Keys</h3>
          <button style={{
            padding: '8px 16px',
            background: '#f59e0b',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Plus size={14} />
            Generate New Key
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {apiKeys.map((apiKey, index) => (
            <div
              key={index}
              style={{
                padding: '16px 20px',
                background: '#f9fafb',
                borderRadius: '10px',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>
                    {apiKey.name}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <code style={{
                      padding: '4px 8px',
                      background: '#e5e7eb',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      color: '#374151'
                    }}>
                      {apiKey.key}
                    </code>
                    <button style={{
                      padding: '4px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#6b7280'
                    }}>
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
                <span style={{
                  padding: '4px 10px',
                  background: '#dcfce7',
                  color: '#16a34a',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 500,
                  textTransform: 'capitalize'
                }}>
                  {apiKey.status}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>Created: {apiKey.created}</span>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>Last used: {apiKey.lastUsed}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{
                    padding: '6px 12px',
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: '#374151',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <RotateCcw size={12} />
                    Regenerate
                  </button>
                  <button style={{
                    padding: '6px 12px',
                    background: 'white',
                    border: '1px solid #fee2e2',
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: '#ef4444',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Trash2 size={12} />
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>
          Webhooks
        </h3>
        <div style={{
          padding: '24px',
          background: '#f9fafb',
          borderRadius: '12px',
          border: '2px dashed #d1d5db',
          textAlign: 'center'
        }}>
          <Database size={32} color="#9ca3af" style={{ marginBottom: '12px' }} />
          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
            No webhooks configured yet
          </p>
          <button style={{
            padding: '8px 16px',
            background: '#f59e0b',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            color: 'white',
            cursor: 'pointer'
          }}>
            Add Webhook Endpoint
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings();
      case 'branding':
        return renderBrandingSettings();
      case 'security':
        return renderSecuritySettings();
      case 'integrations':
        return renderIntegrationsSettings();
      case 'api':
        return renderApiSettings();
      default:
        return (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6b7280' }}>
            <Settings size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
            <p style={{ fontSize: '16px', fontWeight: 500 }}>
              {tabs.find(t => t.id === activeTab)?.label} settings coming soon
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
            Settings
          </h1>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            Configure platform settings and preferences
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          style={{
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
            gap: '8px',
            opacity: isSaving ? 0.7 : 1
          }}
        >
          {isSaving ? (
            <>
              <RefreshCw size={16} className="animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save size={16} />
              Save Changes
            </>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', gap: '24px' }}>
        {/* Sidebar */}
        <div style={{
          width: '240px',
          flexShrink: 0,
          background: 'white',
          borderRadius: '12px',
          padding: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          height: 'fit-content'
        }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: isActive ? '#fef3c7' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <Icon size={18} color={isActive ? '#d97706' : '#6b7280'} />
                <span style={{
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#92400e' : '#374151'
                }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          background: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          {renderContent()}
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
