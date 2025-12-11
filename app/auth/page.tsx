"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Sparkles, Rocket, Users, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

function AuthRedirect() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter();

  useEffect(() => {
    if (authStatus === "authenticated") {
      router.push("/dashboard");
    }
  }, [authStatus, router]);

  return null;
}

export default function AuthPage() {
  const features = [
    { icon: Rocket, text: "Access 12+ accelerator programs" },
    { icon: Users, text: "Connect with 120+ expert mentors" },
    { icon: TrendingUp, text: "Track your startup growth" },
    { icon: Shield, text: "Secure & private platform" },
  ];

  const stats = [
    { value: "500+", label: "Startups" },
    { value: "120+", label: "Mentors" },
    { value: "$50M+", label: "Raised" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Archivo', sans-serif;
        }

        [data-amplify-authenticator] {
          --amplify-components-button-primary-background-color: #2563eb;
          --amplify-components-button-primary-hover-background-color: #1d4ed8;
          --amplify-components-button-primary-focus-background-color: #1d4ed8;
          --amplify-components-button-primary-active-background-color: #1e40af;
          --amplify-components-fieldcontrol-focus-border-color: #3b82f6;
          --amplify-components-tabs-item-active-color: #2563eb;
          --amplify-components-tabs-item-active-border-color: #2563eb;
          --amplify-components-authenticator-router-border-width: 0;
          --amplify-components-authenticator-router-box-shadow: none;
          --amplify-components-fieldcontrol-border-radius: 10px;
          --amplify-components-button-border-radius: 10px;
          --amplify-fonts-default-static: 'Manrope', sans-serif;
        }

        [data-amplify-authenticator] [data-amplify-router] {
          background: transparent;
          border: none;
          box-shadow: none;
        }

        [data-amplify-authenticator] .amplify-input {
          padding: 14px 16px;
          font-size: 15px;
        }

        [data-amplify-authenticator] .amplify-button--primary {
          padding: 14px 24px;
          font-weight: 600;
          font-size: 15px;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transition: all 0.3s ease;
        }

        [data-amplify-authenticator] .amplify-button--primary:hover {
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
          transform: translateY(-1px);
        }

        [data-amplify-authenticator] .amplify-tabs__item {
          font-weight: 600;
          padding: 12px 20px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .floating-blob {
          animation: float 6s ease-in-out infinite;
        }

        .floating-blob-2 {
          animation: float 8s ease-in-out infinite reverse;
        }

        @media (min-width: 1024px) {
          .lg-show {
            display: flex !important;
          }
          .mobile-logo {
            display: none !important;
          }
        }
      `}</style>

      {/* Left Panel - Branding (Desktop Only) */}
      <div className="lg-show" style={{
        flex: 1,
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)",
        display: "none",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Blobs */}
        <div className="floating-blob" style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)"
        }} />
        <div className="floating-blob-2" style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)"
        }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: "500px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "48px", textDecoration: "none" }}>
            <div style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #3b82f6, #f97316)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)"
            }}>
              <Sparkles style={{ width: "32px", height: "32px", color: "white" }} />
            </div>
            <div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "white" }}>PNG Incubation Hub</span>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0 }}>Empowering Founders</p>
            </div>
          </Link>

          {/* Hero Text */}
          <h1 style={{ fontSize: "42px", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "20px" }}>
            Welcome to Your
            <br />
            <span style={{ 
              background: "linear-gradient(90deg, #fb923c, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Startup Journey
            </span>
          </h1>

          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "40px" }}>
            Sign in to access your dashboard, connect with mentors, apply to programs, and track your startup growth.
          </p>

          {/* Features */}
          <div style={{ marginBottom: "40px" }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "16px"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <feature.icon style={{ width: "20px", height: "20px", color: "#fbbf24" }} />
                </div>
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px", fontWeight: 500 }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: "32px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.1)"
          }}>
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "white" }}>{stat.value}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)"
      }}>
        {/* Mobile Logo */}
        <div className="mobile-logo" style={{ marginBottom: "32px", textAlign: "center" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px", textDecoration: "none" }}>
            <div style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, #2563eb, #f97316)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Sparkles style={{ width: "28px", height: "28px", color: "white" }} />
            </div>
            <span style={{ fontSize: "22px", fontWeight: 800, color: "#111827" }}>PNG Incubation Hub</span>
          </Link>
          <p style={{ color: "#6b7280", fontSize: "15px" }}>Sign in to continue to your dashboard</p>
        </div>

        {/* Auth Form */}
        <div style={{
          width: "100%",
          maxWidth: "420px",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          border: "1px solid #e5e7eb"
        }}>
          <Authenticator
            signUpAttributes={["email"]}
            components={{
              Header() {
                return (
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>
                      Get Started
                    </h2>
                    <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                      Create an account or sign in
                    </p>
                  </div>
                );
              },
            }}
          >
            {({ signOut, user }) => (
              <AuthRedirect />
            )}
          </Authenticator>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: "#9ca3af" }}>
            By continuing, you agree to our{" "}
            <Link href="/auth" style={{ color: "#2563eb", textDecoration: "none" }}>Terms</Link>
            {" "}and{" "}
            <Link href="/auth" style={{ color: "#2563eb", textDecoration: "none" }}>Privacy Policy</Link>
          </p>
          <Link href="/" style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "6px",
            marginTop: "16px",
            color: "#6b7280",
            fontSize: "14px",
            textDecoration: "none"
          }}>
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}