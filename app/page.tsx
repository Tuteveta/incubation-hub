"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Users,
  Video,
  TrendingUp,
  Star,
  ArrowRight,
  Check,
  Globe,
  Zap,
  BookOpen,
  DollarSign,
  Share2,
  BarChart3,
  Award,
  ChevronRight,
  Menu,
  X,
  Youtube,
  Instagram,
  Twitter,
  MessageCircle
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "10K+", label: "Active Creators", icon: Users },
    { value: "500K+", label: "Students Learning", icon: BookOpen },
    { value: "$5M+", label: "Creator Earnings", icon: DollarSign },
    { value: "50K+", label: "Courses Published", icon: Video }
  ];

  const features = [
    {
      icon: Video,
      title: "Create & Publish",
      description: "Build beautiful courses with videos, PDFs, quizzes, and interactive content. Our intuitive editor makes creation effortless.",
      color: "#8b5cf6"
    },
    {
      icon: Share2,
      title: "Cross-Platform Publishing",
      description: "Distribute content to YouTube, Instagram, TikTok, LinkedIn, and more with one click. Reach your audience everywhere.",
      color: "#3b82f6"
    },
    {
      icon: Users,
      title: "Student Management",
      description: "Track student progress, manage cohorts, send announcements, and build a thriving learning community.",
      color: "#10b981"
    },
    {
      icon: DollarSign,
      title: "Monetization",
      description: "Set your own prices, manage subscriptions, and receive payments directly. Keep 100% of your earnings minus processing fees.",
      color: "#f59e0b"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Understand your audience with detailed insights on engagement, revenue, completion rates, and growth trends.",
      color: "#ef4444"
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description: "Get smart recommendations, content suggestions, and automated insights to grow your creator business faster.",
      color: "#ec4899"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 29,
      description: "Perfect for new creators getting started",
      features: [
        "Up to 50 students",
        "10GB storage",
        "Basic analytics",
        "2 social platforms",
        "Email support"
      ],
      color: "#64748b",
      popular: false
    },
    {
      name: "Standard",
      price: 79,
      description: "For growing creators building their audience",
      features: [
        "Up to 200 students",
        "50GB storage",
        "Advanced analytics",
        "5 social platforms",
        "Custom branding",
        "Email campaigns",
        "Priority support"
      ],
      color: "#8b5cf6",
      popular: true
    },
    {
      name: "Premium",
      price: 199,
      description: "For professional creators at scale",
      features: [
        "Unlimited students",
        "200GB storage",
        "AI-powered insights",
        "All social platforms",
        "Custom domain",
        "Advanced automation",
        "API access",
        "Dedicated support"
      ],
      color: "#f59e0b",
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "CreatorHub transformed my teaching business. I went from scattered content across platforms to a unified, professional learning experience.",
      author: "Sarah Chen",
      role: "AI & ML Educator",
      avatar: "SC",
      color: "#8b5cf6",
      students: "15K students"
    },
    {
      quote: "The cross-posting feature alone saves me 10+ hours a week. Now I can focus on creating content instead of managing platforms.",
      author: "Marcus Johnson",
      role: "Fitness Coach",
      avatar: "MJ",
      color: "#3b82f6",
      students: "8K students"
    },
    {
      quote: "Finally, a platform that lets me keep 100% of my earnings. The analytics help me understand exactly what my students need.",
      author: "Emily Rodriguez",
      role: "Business Strategist",
      avatar: "ER",
      color: "#10b981",
      students: "22K students"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif; box-sizing: border-box; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Archivo', sans-serif; }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(15, 23, 42, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        transition: "all 0.3s ease"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none"
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)"
            }}>
              <Sparkles size={26} color="white" />
            </div>
            <span style={{
              fontSize: "24px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #fff, #94a3b8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              CreatorHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "40px"
          }} className="hidden md:flex">
            {["Features", "Pricing", "Creators", "Resources"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href="/auth" style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              padding: "10px 20px",
              borderRadius: "10px",
              transition: "all 0.2s"
            }}>
              Sign In
            </Link>
            <Link href="/auth" style={{
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
              padding: "12px 24px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}>
              Get Started <ArrowRight size={18} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "none",
                padding: "8px",
                background: "transparent",
                border: "none",
                cursor: "pointer"
              }}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{
            position: "absolute",
            top: "-30%",
            left: "-10%",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 60%)",
            borderRadius: "50%",
            animation: "float 20s ease-in-out infinite"
          }} />
          <div style={{
            position: "absolute",
            bottom: "-30%",
            right: "-10%",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 60%)",
            borderRadius: "50%",
            animation: "float 25s ease-in-out infinite reverse"
          }} />
          <div style={{
            position: "absolute",
            top: "20%",
            right: "20%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 60%)",
            borderRadius: "50%",
            animation: "float 15s ease-in-out infinite"
          }} />
        </div>

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 10
        }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            background: "rgba(139, 92, 246, 0.2)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            borderRadius: "100px",
            marginBottom: "32px"
          }}>
            <Zap size={16} color="#8b5cf6" />
            <span style={{ color: "#a78bfa", fontSize: "14px", fontWeight: 600 }}>
              The #1 Platform for Content Creators
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.02em"
          }}>
            Build, Monetize &{" "}
            <span style={{
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6, #ec4899)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient-shift 5s ease infinite"
            }}>
              Scale
            </span>
            <br />
            Your Creator Empire
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: "clamp(18px, 2.5vw, 22px)",
            color: "#94a3b8",
            maxWidth: "700px",
            margin: "0 auto 48px",
            lineHeight: 1.6
          }}>
            The all-in-one platform for content creators, coaches, and mentors to create courses, 
            grow their audience, and monetize their expertise—while keeping 100% of their earnings.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            marginBottom: "64px"
          }}>
            <Link href="/auth" style={{
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: 600,
              padding: "18px 36px",
              borderRadius: "14px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 12px 40px rgba(139, 92, 246, 0.4)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}>
              Start Creating Free <ArrowRight size={20} />
            </Link>
            <button style={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: "18px",
              fontWeight: 600,
              padding: "18px 36px",
              borderRadius: "14px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}>
              <Play size={20} fill="white" /> Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "32px",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} style={{ textAlign: "center" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "8px"
                  }}>
                    <Icon size={24} color="#8b5cf6" />
                    <span style={{
                      fontSize: "36px",
                      fontWeight: 800,
                      color: "white",
                      fontFamily: "Archivo"
                    }}>
                      {stat.value}
                    </span>
                  </div>
                  <span style={{ fontSize: "14px", color: "#64748b" }}>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(59, 130, 246, 0.2)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              borderRadius: "100px",
              marginBottom: "24px"
            }}>
              <Star size={16} color="#3b82f6" />
              <span style={{ color: "#60a5fa", fontSize: "14px", fontWeight: 600 }}>
                Powerful Features
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "16px"
            }}>
              Everything You Need to Succeed
            </h2>
            <p style={{
              fontSize: "18px",
              color: "#94a3b8",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              From content creation to cross-platform distribution, we provide all the tools 
              you need to build a thriving creator business.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "24px"
          }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "20px",
                    padding: "32px",
                    transition: "all 0.3s ease",
                    cursor: "default"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 20px 40px ${feature.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: "56px",
                    height: "56px",
                    background: `${feature.color}20`,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                  }}>
                    <Icon size={28} color={feature.color} />
                  </div>
                  <h3 style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "12px"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: "15px",
                    color: "#94a3b8",
                    lineHeight: 1.7
                  }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section style={{
        padding: "100px 24px",
        background: "#0f172a"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px"
          }}>
            Publish Everywhere at Once
          </h2>
          <p style={{
            fontSize: "18px",
            color: "#94a3b8",
            marginBottom: "48px",
            maxWidth: "600px",
            margin: "0 auto 48px"
          }}>
            Connect your social accounts and distribute content to all platforms with a single click.
          </p>
          
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center"
          }}>
            {[
              { name: "YouTube", color: "#FF0000", icon: Youtube },
              { name: "Instagram", color: "#E4405F", icon: Instagram },
              { name: "TikTok", color: "#00F2EA", icon: Video },
              { name: "LinkedIn", color: "#0A66C2", icon: Users },
              { name: "Twitter/X", color: "#1DA1F2", icon: Twitter },
              { name: "Facebook", color: "#1877F2", icon: Globe }
            ].map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div
                  key={index}
                  style={{
                    width: "140px",
                    padding: "24px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = platform.color;
                    e.currentTarget.style.boxShadow = `0 0 30px ${platform.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon size={32} color={platform.color} />
                  <span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 500 }}>
                    {platform.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(245, 158, 11, 0.2)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              borderRadius: "100px",
              marginBottom: "24px"
            }}>
              <DollarSign size={16} color="#f59e0b" />
              <span style={{ color: "#fbbf24", fontSize: "14px", fontWeight: 600 }}>
                Simple Pricing
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "16px"
            }}>
              Choose Your Plan
            </h2>
            <p style={{
              fontSize: "18px",
              color: "#94a3b8",
              maxWidth: "500px",
              margin: "0 auto"
            }}>
              Start free, upgrade as you grow. Cancel anytime.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "stretch"
          }}>
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                style={{
                  background: plan.popular 
                    ? "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))"
                    : "rgba(255, 255, 255, 0.03)",
                  border: plan.popular
                    ? "2px solid #8b5cf6"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "24px",
                  padding: "40px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                    padding: "8px 20px",
                    borderRadius: "100px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "white"
                  }}>
                    Most Popular
                  </div>
                )}

                <h3 style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "8px"
                }}>
                  {plan.name}
                </h3>
                <p style={{
                  fontSize: "14px",
                  color: "#94a3b8",
                  marginBottom: "24px"
                }}>
                  {plan.description}
                </p>

                <div style={{ marginBottom: "32px" }}>
                  <span style={{
                    fontSize: "48px",
                    fontWeight: 800,
                    color: "white",
                    fontFamily: "Archivo"
                  }}>
                    ${plan.price}
                  </span>
                  <span style={{ color: "#64748b", fontSize: "16px" }}>/month</span>
                </div>

                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px 0",
                  flex: 1
                }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                      color: "#e2e8f0",
                      fontSize: "15px"
                    }}>
                      <Check size={18} color={plan.popular ? "#8b5cf6" : "#10b981"} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/auth" style={{
                  display: "block",
                  textAlign: "center",
                  padding: "16px 32px",
                  background: plan.popular 
                    ? "linear-gradient(135deg, #8b5cf6, #7c3aed)"
                    : "rgba(255, 255, 255, 0.1)",
                  border: plan.popular ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  transition: "all 0.2s"
                }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="creators" style={{
        padding: "120px 24px",
        background: "#0f172a"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(16, 185, 129, 0.2)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "100px",
              marginBottom: "24px"
            }}>
              <Award size={16} color="#10b981" />
              <span style={{ color: "#34d399", fontSize: "14px", fontWeight: 600 }}>
                Success Stories
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "16px"
            }}>
              Loved by Creators Worldwide
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "24px"
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  padding: "32px"
                }}
              >
                <div style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "20px"
                }}>
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={18} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>
                <p style={{
                  fontSize: "17px",
                  color: "#e2e8f0",
                  lineHeight: 1.7,
                  marginBottom: "24px"
                }}>
                  "{testimonial.quote}"
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px"
                }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}aa)`,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "16px"
                  }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 600, marginBottom: "2px" }}>
                      {testimonial.author}
                    </div>
                    <div style={{ color: "#64748b", fontSize: "14px" }}>
                      {testimonial.role} • {testimonial.students}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "120px 24px",
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />
        
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 10
        }}>
          <h2 style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "24px",
            lineHeight: 1.2
          }}>
            Ready to Build Your<br />
            Creator Empire?
          </h2>
          <p style={{
            fontSize: "20px",
            color: "#94a3b8",
            marginBottom: "40px"
          }}>
            Join thousands of creators who are growing their audience and income with CreatorHub.
          </p>
          <Link href="/auth" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: 600,
            padding: "20px 48px",
            borderRadius: "16px",
            boxShadow: "0 16px 48px rgba(139, 92, 246, 0.4)",
            transition: "transform 0.2s"
          }}>
            Get Started for Free <ArrowRight size={24} />
          </Link>
          <p style={{
            marginTop: "20px",
            color: "#64748b",
            fontSize: "14px"
          }}>
            No credit card required • Free 14-day trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "64px 24px 32px",
        background: "#0f172a",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "64px"
          }}>
            {/* Brand */}
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Sparkles size={22} color="white" />
                </div>
                <span style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "white"
                }}>
                  CreatorHub
                </span>
              </div>
              <p style={{
                color: "#64748b",
                fontSize: "14px",
                lineHeight: 1.6
              }}>
                Empowering content creators to build, monetize, and scale their educational businesses.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Product",
                links: [
                  { name: "Features", href: "#features" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Integrations", href: "#" },
                  { name: "API", href: "#" }
                ]
              },
              {
                title: "Company",
                links: [
                  { name: "About", href: "#" },
                  { name: "Blog", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Press", href: "#" }
                ]
              },
              {
                title: "Resources",
                links: [
                  { name: "Documentation", href: "#" },
                  { name: "Help Center", href: "#" },
                  { name: "Community", href: "#" },
                  { name: "Contact", href: "#" }
                ]
              },
              {
                title: "Legal",
                links: [
                  { name: "Privacy", href: "/privacy" },
                  { name: "Terms", href: "/terms" },
                  { name: "Security", href: "#" },
                  { name: "Cookies", href: "#" }
                ]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 style={{
                  color: "white",
                  fontWeight: 600,
                  marginBottom: "16px",
                  fontSize: "15px"
                }}>
                  {section.title}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.links.map((link, i) => (
                    <li key={i} style={{ marginBottom: "12px" }}>
                      <Link href={link.href} style={{
                        color: "#64748b",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s"
                      }}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div style={{
            paddingTop: "32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px"
          }}>
            <p style={{ color: "#64748b", fontSize: "14px" }}>
              © 2025 CreatorHub. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              {[Twitter, Instagram, Youtube, MessageCircle].map((Icon, index) => (
                <a key={index} href="#" style={{ color: "#64748b", transition: "color 0.2s" }}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
