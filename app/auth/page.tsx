"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Users,
  GraduationCap,
  Shield,
  Video,
  BookOpen,
  TrendingUp,
  Globe,
  Check,
  ArrowRight,
  Play,
  Star,
  Zap,
  Target,
  Award,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User
} from "lucide-react";
import { isAmplifyConfigured } from "../providers/AmplifyProvider";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Role Selection Component
function RoleSelection({ onRoleSelect }: { onRoleSelect: (role: string) => void }) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const roles = [
    {
      id: "creator",
      title: "Creator / Mentor",
      description: "Create courses, build your audience, and monetize your expertise",
      icon: Video,
      color: "#8b5cf6",
      gradient: "from-violet-500 to-purple-600",
      features: [
        "Create unlimited courses & content",
        "Build your student community",
        "Cross-post to social platforms",
        "Track revenue & analytics"
      ],
      cta: "Start Creating"
    },
    {
      id: "student",
      title: "Student / Learner",
      description: "Access world-class content from expert creators and mentors",
      icon: GraduationCap,
      color: "#3b82f6",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Browse 1000+ courses",
        "Learn from top creators",
        "Track your progress",
        "Get certified"
      ],
      cta: "Start Learning"
    }
  ];

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background */}
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none"
      }}>
        <div style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 20s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 25s ease-in-out infinite reverse"
        }} />
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        * { font-family: 'Manrope', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Archivo', sans-serif; }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
      `}</style>

      {/* Logo */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{
          width: "48px",
          height: "48px",
          background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)"
        }}>
          <Sparkles size={28} color="white" />
        </div>
        <span style={{
          fontSize: "28px",
          fontWeight: 700,
          fontFamily: "Archivo, sans-serif",
          background: "linear-gradient(135deg, #fff, #94a3b8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          CreatorHub
        </span>
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: "clamp(28px, 5vw, 42px)",
        fontWeight: 800,
        color: "white",
        textAlign: "center",
        marginBottom: "8px",
        position: "relative",
        zIndex: 10
      }}>
        How will you use CreatorHub?
      </h1>
      <p style={{
        fontSize: "18px",
        color: "#94a3b8",
        textAlign: "center",
        marginBottom: "48px",
        maxWidth: "500px",
        position: "relative",
        zIndex: 10
      }}>
        Choose your path to get a personalized experience
      </p>

      {/* Role Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
        maxWidth: "720px",
        width: "100%",
        position: "relative",
        zIndex: 10
      }}>
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;
          const isHovered = hoveredRole === role.id;

          return (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              onMouseEnter={() => setHoveredRole(role.id)}
              onMouseLeave={() => setHoveredRole(null)}
              style={{
                background: isSelected 
                  ? `linear-gradient(135deg, ${role.color}15, ${role.color}25)`
                  : "rgba(255, 255, 255, 0.03)",
                border: isSelected 
                  ? `2px solid ${role.color}`
                  : "2px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "32px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                boxShadow: isSelected 
                  ? `0 20px 40px ${role.color}30`
                  : isHovered 
                    ? "0 20px 40px rgba(0,0,0,0.3)"
                    : "none",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Selection Indicator */}
              {isSelected && (
                <div style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "28px",
                  height: "28px",
                  background: role.color,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Check size={16} color="white" />
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: "64px",
                height: "64px",
                background: `linear-gradient(135deg, ${role.color}, ${role.color}aa)`,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                boxShadow: `0 8px 24px ${role.color}40`
              }}>
                <Icon size={32} color="white" />
              </div>

              {/* Title & Description */}
              <h3 style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "white",
                marginBottom: "8px",
                fontFamily: "Archivo, sans-serif"
              }}>
                {role.title}
              </h3>
              <p style={{
                fontSize: "15px",
                color: "#94a3b8",
                marginBottom: "24px",
                lineHeight: 1.6
              }}>
                {role.description}
              </p>

              {/* Features */}
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}>
                {role.features.map((feature, index) => (
                  <li key={index} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    color: "#cbd5e1"
                  }}>
                    <div style={{
                      width: "20px",
                      height: "20px",
                      background: `${role.color}30`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <Check size={12} color={role.color} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedRole}
        style={{
          marginTop: "40px",
          padding: "16px 48px",
          fontSize: "16px",
          fontWeight: 600,
          color: "white",
          background: selectedRole 
            ? "linear-gradient(135deg, #8b5cf6, #3b82f6)"
            : "rgba(255, 255, 255, 0.1)",
          border: "none",
          borderRadius: "12px",
          cursor: selectedRole ? "pointer" : "not-allowed",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.3s ease",
          opacity: selectedRole ? 1 : 0.5,
          boxShadow: selectedRole ? "0 8px 32px rgba(139, 92, 246, 0.4)" : "none",
          position: "relative",
          zIndex: 10
        }}
      >
        Continue
        <ArrowRight size={20} />
      </button>

      {/* Admin Link */}
      <p style={{
        marginTop: "24px",
        fontSize: "14px",
        color: "#64748b",
        position: "relative",
        zIndex: 10
      }}>
        Are you an administrator?{" "}
        <button
          onClick={() => onRoleSelect("admin")}
          style={{
            background: "none",
            border: "none",
            color: "#8b5cf6",
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "14px"
          }}
        >
          Admin Login
        </button>
      </p>
    </div>
  );
}

// Auth Redirect Component - Only used when Amplify is configured
function AmplifyAuthRedirect({ role }: { role: string }) {
  const router = useRouter();
  const { authStatus, user } = useAuthenticator((context) => [context.authStatus, context.user]);

  useEffect(() => {
    console.log("Auth status:", authStatus, "Role:", role, "User:", user?.username);
    
    if (authStatus === "authenticated") {
      // Small delay to ensure auth state is fully settled
      const timer = setTimeout(() => {
        switch (role) {
          case "admin":
            router.push("/admin");
            break;
          case "creator":
            router.push("/creator");
            break;
          case "student":
            router.push("/student");
            break;
          default:
            router.push("/");
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [authStatus, role, router, user]);

  // Show loading state while redirecting
  if (authStatus === "authenticated") {
    return (
      <div style={{ 
        textAlign: "center", 
        padding: "40px",
        color: "#6b7280"
      }}>
        <div style={{
          width: "40px",
          height: "40px",
          border: "3px solid #e5e7eb",
          borderTopColor: "#8b5cf6",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto 16px"
        }} />
        <p>Redirecting to dashboard...</p>
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return null;
}

// Demo Auth Form for when AWS Cognito is not configured
function DemoAuthForm({ role, config, onBack }: { role: string; config: any; onBack: () => void }) {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Store demo session
    localStorage.setItem("demo_auth", JSON.stringify({ 
      role, 
      email: formData.email,
      name: formData.name || formData.email.split("@")[0]
    }));
    
    // Redirect based on role
    switch (role) {
      case "admin":
        router.push("/admin");
        break;
      case "creator":
        router.push("/creator");
        break;
      case "student":
        router.push("/student");
        break;
      default:
        router.push("/");
    }
  };

  const Icon = config.icon;

  return (
    <div style={{
      width: "100%",
      maxWidth: "400px",
      background: "white",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    }}>
      {/* Demo Mode Banner */}
      <div style={{
        background: "#fef3c7",
        border: "1px solid #f59e0b",
        borderRadius: "8px",
        padding: "12px 16px",
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <Zap size={16} color="#d97706" />
        <span style={{ fontSize: "13px", color: "#92400e" }}>
          <strong>Demo Mode:</strong> No AWS credentials configured. Using local auth.
        </span>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div style={{
          width: "56px",
          height: "56px",
          background: `linear-gradient(135deg, ${config.color}, ${config.color}aa)`,
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px"
        }}>
          <Icon size={28} color="white" />
        </div>
        <h2 style={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0f172a",
          marginBottom: "8px",
          fontFamily: "Archivo"
        }}>
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <p style={{ fontSize: "14px", color: "#64748b" }}>
          {isSignUp ? `Sign up as a ${config.title}` : `Sign in to your ${config.title}`}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {isSignUp && (
          <div>
            <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#374151", marginBottom: "6px" }}>
              Full Name
            </label>
            <div style={{ position: "relative" }}>
              <User size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                style={{
                  width: "100%",
                  padding: "12px 12px 12px 42px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box"
                }}
              />
            </div>
          </div>
        )}

        <div>
          <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#374151", marginBottom: "6px" }}>
            Email Address
          </label>
          <div style={{ position: "relative" }}>
            <Mail size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              required
              style={{
                width: "100%",
                padding: "12px 12px 12px 42px",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box"
              }}
            />
          </div>
        </div>

        <div>
          <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#374151", marginBottom: "6px" }}>
            Password
          </label>
          <div style={{ position: "relative" }}>
            <Lock size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              required
              style={{
                width: "100%",
                padding: "12px 42px 12px 42px",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box"
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9ca3af"
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "14px",
            background: `linear-gradient(135deg, ${config.color}, ${config.color}dd)`,
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.7 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "8px"
          }}
        >
          {isLoading ? (
            <>
              <div style={{
                width: "18px",
                height: "18px",
                border: "2px solid white",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }} />
              {isSignUp ? "Creating Account..." : "Signing In..."}
            </>
          ) : (
            <>
              {isSignUp ? "Create Account" : "Sign In"}
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      {/* Toggle Sign In/Up */}
      <p style={{ textAlign: "center", marginTop: "24px", fontSize: "14px", color: "#64748b" }}>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          style={{
            background: "none",
            border: "none",
            color: config.color,
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>

      {/* Footer */}
      <p style={{
        textAlign: "center",
        marginTop: "24px",
        fontSize: "13px",
        color: "#94a3b8"
      }}>
        By continuing, you agree to our{" "}
        <a href="/terms" style={{ color: config.color }}>Terms</a>
        {" "}and{" "}
        <a href="/privacy" style={{ color: config.color }}>Privacy Policy</a>
      </p>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Main Auth Form Component
function AuthForm({ role, onBack }: { role: string; onBack: () => void }) {
  const roleConfig = {
    creator: {
      title: "Creator Account",
      subtitle: "Start building your content empire",
      color: "#8b5cf6",
      gradient: "from-violet-500 to-purple-600",
      icon: Video,
      features: [
        { icon: Video, text: "Upload unlimited content" },
        { icon: Users, text: "Build your audience" },
        { icon: TrendingUp, text: "Track your growth" },
        { icon: Globe, text: "Cross-post everywhere" }
      ]
    },
    student: {
      title: "Student Account",
      subtitle: "Start your learning journey",
      color: "#3b82f6",
      gradient: "from-blue-500 to-cyan-500",
      icon: GraduationCap,
      features: [
        { icon: BookOpen, text: "Access 1000+ courses" },
        { icon: Star, text: "Learn from experts" },
        { icon: Target, text: "Track your progress" },
        { icon: Award, text: "Earn certificates" }
      ]
    },
    admin: {
      title: "Admin Login",
      subtitle: "Platform management access",
      color: "#f59e0b",
      gradient: "from-amber-500 to-orange-500",
      icon: Shield,
      features: [
        { icon: Users, text: "Manage all users" },
        { icon: Shield, text: "Content moderation" },
        { icon: TrendingUp, text: "Platform analytics" },
        { icon: Zap, text: "System configuration" }
      ]
    }
  };

  const config = roleConfig[role as keyof typeof roleConfig];
  const Icon = config.icon;

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      background: "#0f172a"
    }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        * { font-family: 'Manrope', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Archivo', sans-serif; }
        
        [data-amplify-authenticator] {
          --amplify-components-authenticator-router-box-shadow: none;
          --amplify-components-authenticator-router-border-width: 0;
          --amplify-components-button-primary-background-color: ${config.color};
          --amplify-components-button-primary-hover-background-color: ${config.color}dd;
          --amplify-components-tabs-item-active-color: ${config.color};
          --amplify-components-tabs-item-active-border-color: ${config.color};
          --amplify-components-fieldcontrol-focus-border-color: ${config.color};
          background: transparent !important;
        }
        
        [data-amplify-authenticator] [data-amplify-router] {
          background: white;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          padding: 32px;
          max-width: 400px;
          width: 100%;
        }
        
        [data-amplify-authenticator] button[type="submit"] {
          border-radius: 10px;
          font-weight: 600;
          padding: 12px 24px;
          font-size: 15px;
        }
        
        [data-amplify-authenticator] input {
          border-radius: 10px;
          padding: 14px 16px;
          font-size: 15px;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
      `}</style>

      {/* Left Panel - Branding */}
      <div style={{
        flex: 1,
        background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, ${config.color}30 100%)`,
        display: "none",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px",
        position: "relative",
        overflow: "hidden"
      }} className="hidden lg:flex">
        {/* Animated Blobs */}
        <div style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${config.color}30 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "float 20s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 25s ease-in-out infinite reverse"
        }} />

        {/* Logo */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "48px",
          position: "relative",
          zIndex: 10
        }}>
          <div style={{
            width: "48px",
            height: "48px",
            background: `linear-gradient(135deg, ${config.color}, #3b82f6)`,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Sparkles size={28} color="white" />
          </div>
          <span style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "white",
            fontFamily: "Archivo, sans-serif"
          }}>
            CreatorHub
          </span>
        </div>

        {/* Hero Content */}
        <div style={{
          position: "relative",
          zIndex: 10
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: `${config.color}20`,
            borderRadius: "100px",
            marginBottom: "24px"
          }}>
            <Icon size={18} color={config.color} />
            <span style={{ color: config.color, fontSize: "14px", fontWeight: 600 }}>
              {config.title}
            </span>
          </div>

          <h1 style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
            lineHeight: 1.2,
            fontFamily: "Archivo, sans-serif"
          }}>
            Welcome to Your<br />
            <span style={{ color: config.color }}>{role === "creator" ? "Creative" : role === "student" ? "Learning" : "Admin"}</span> Journey
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#94a3b8",
            marginBottom: "40px",
            lineHeight: 1.6
          }}>
            {config.subtitle}
          </p>

          {/* Features */}
          <div style={{
            display: "grid",
            gap: "16px"
          }}>
            {config.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 20px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    background: `${config.color}20`,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <FeatureIcon size={20} color={config.color} />
                  </div>
                  <span style={{ color: "#e2e8f0", fontSize: "15px" }}>
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: "40px",
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "white", fontFamily: "Archivo" }}>
                10K+
              </div>
              <div style={{ fontSize: "14px", color: "#64748b" }}>Active Creators</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "white", fontFamily: "Archivo" }}>
                500K+
              </div>
              <div style={{ fontSize: "14px", color: "#64748b" }}>Students</div>
            </div>
            <div>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "white", fontFamily: "Archivo" }}>
                $5M+
              </div>
              <div style={{ fontSize: "14px", color: "#64748b" }}>Creator Earnings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)"
      }}>
        {/* Mobile Logo */}
        <div className="lg:hidden" style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px"
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            background: `linear-gradient(135deg, ${config.color}, #3b82f6)`,
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Sparkles size={24} color="white" />
          </div>
          <span style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "white",
            fontFamily: "Archivo"
          }}>
            CreatorHub
          </span>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            padding: "10px 16px",
            background: "rgba(255, 255, 255, 0.1)",
            border: "none",
            borderRadius: "8px",
            color: "#94a3b8",
            cursor: "pointer",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          ← Back
        </button>

        {/* Role Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          background: `${config.color}20`,
          borderRadius: "100px",
          marginBottom: "16px"
        }}>
          <Icon size={16} color={config.color} />
          <span style={{ color: config.color, fontSize: "14px", fontWeight: 600 }}>
            {config.title}
          </span>
        </div>

        {/* Auth Form - Demo or Amplify */}
        {isAmplifyConfigured ? (
          <Authenticator
            initialState="signIn"
            components={{
              Header() {
                return (
                  <div style={{
                    textAlign: "center",
                    marginBottom: "24px"
                  }}>
                    <h2 style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: "8px",
                      fontFamily: "Archivo"
                    }}>
                      {config.title}
                    </h2>
                    <p style={{
                      fontSize: "14px",
                      color: "#64748b"
                    }}>
                      {config.subtitle}
                    </p>
                  </div>
                );
              }
            }}
          >
            {() => <AmplifyAuthRedirect role={role} />}
          </Authenticator>
        ) : (
          <DemoAuthForm role={role} config={config} onBack={onBack} />
        )}

        {/* Footer Links - Only show for Amplify mode */}
        {isAmplifyConfigured && (
          <div style={{
            marginTop: "32px",
            textAlign: "center"
          }}>
            <p style={{
              fontSize: "13px",
              color: "#64748b"
            }}>
              By continuing, you agree to our{" "}
              <a href="/terms" style={{ color: config.color }}>Terms</a>
              {" "}and{" "}
              <a href="/privacy" style={{ color: config.color }}>Privacy Policy</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Main Page Component
export default function AuthPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  if (!selectedRole) {
    return <RoleSelection onRoleSelect={setSelectedRole} />;
  }

  return <AuthForm role={selectedRole} onBack={() => setSelectedRole(null)} />;
}
