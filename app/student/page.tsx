"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Star,
  Users,
  Clock,
  Play,
  Heart,
  TrendingUp,
  Zap,
  Award,
  ChevronRight,
  BookOpen,
  Video,
  Sparkles
} from "lucide-react";

export default function StudentDiscover() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [savedCourses, setSavedCourses] = useState<number[]>([]);

  const categories = [
    { id: "all", label: "All", icon: Sparkles },
    { id: "tech", label: "Technology", icon: Video },
    { id: "business", label: "Business", icon: TrendingUp },
    { id: "creative", label: "Creative", icon: Zap },
    { id: "personal", label: "Personal Dev", icon: Award },
    { id: "marketing", label: "Marketing", icon: Users }
  ];

  const featuredCreators = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "AI & Machine Learning Expert",
      avatar: "SC",
      color: "#8b5cf6",
      students: "45K",
      courses: 12,
      rating: 4.9
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Full-Stack Developer",
      avatar: "MJ",
      color: "#3b82f6",
      students: "32K",
      courses: 8,
      rating: 4.8
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Business Strategist",
      avatar: "ER",
      color: "#10b981",
      students: "28K",
      courses: 15,
      rating: 4.9
    },
    {
      id: 4,
      name: "David Park",
      title: "UX/UI Designer",
      avatar: "DP",
      color: "#f59e0b",
      students: "22K",
      courses: 6,
      rating: 4.7
    }
  ];

  const popularCourses = [
    {
      id: 1,
      title: "Complete AI & Machine Learning Bootcamp 2025",
      creator: "Dr. Sarah Chen",
      thumbnail: "🤖",
      price: 49.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 2340,
      students: 12847,
      duration: "42h 30m",
      level: "Beginner",
      bestseller: true
    },
    {
      id: 2,
      title: "The Complete Web Developer Course",
      creator: "Marcus Johnson",
      thumbnail: "🌐",
      price: 39.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 1567,
      students: 8932,
      duration: "56h 15m",
      level: "All Levels",
      bestseller: true
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      creator: "Emily Rodriguez",
      thumbnail: "📈",
      price: 29.99,
      originalPrice: 59.99,
      rating: 4.7,
      reviews: 892,
      students: 5621,
      duration: "28h 45m",
      level: "Intermediate",
      bestseller: false
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      creator: "David Park",
      thumbnail: "🎨",
      price: 34.99,
      originalPrice: 69.99,
      rating: 4.9,
      reviews: 1234,
      students: 7845,
      duration: "32h 20m",
      level: "Beginner",
      bestseller: true
    },
    {
      id: 5,
      title: "Python for Data Science",
      creator: "Dr. Sarah Chen",
      thumbnail: "🐍",
      price: 44.99,
      originalPrice: 89.99,
      rating: 4.8,
      reviews: 1890,
      students: 9234,
      duration: "38h 10m",
      level: "Intermediate",
      bestseller: false
    },
    {
      id: 6,
      title: "Business Strategy & Leadership",
      creator: "Emily Rodriguez",
      thumbnail: "💼",
      price: 54.99,
      originalPrice: 109.99,
      rating: 4.9,
      reviews: 756,
      students: 4123,
      duration: "24h 30m",
      level: "Advanced",
      bestseller: false
    }
  ];

  const toggleSaved = (courseId: number) => {
    setSavedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: "60px 24px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 60%)",
          borderRadius: "50%",
          pointerEvents: "none"
        }} />

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10
        }}>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
            fontFamily: "Archivo"
          }}>
            What will you learn today?
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#94a3b8",
            marginBottom: "32px",
            maxWidth: "600px"
          }}>
            Explore thousands of courses from world-class creators and start your learning journey.
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: "600px",
            position: "relative"
          }}>
            <Search size={22} color="#94a3b8" style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)"
            }} />
            <input
              type="text"
              placeholder="Search for courses, topics, or creators..."
              style={{
                width: "100%",
                padding: "18px 20px 18px 56px",
                background: "white",
                border: "none",
                borderRadius: "14px",
                fontSize: "16px",
                outline: "none",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
              }}
            />
            <button style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              padding: "12px 24px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: "64px",
        zIndex: 30
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          gap: "12px",
          overflowX: "auto"
        }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  background: isActive ? "#3b82f6" : "#f1f5f9",
                  color: isActive ? "white" : "#64748b",
                  fontWeight: 500,
                  fontSize: "14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s"
                }}
              >
                <Icon size={16} />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 24px"
      }}>
        {/* Featured Creators */}
        <section style={{ marginBottom: "48px" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px"
          }}>
            <div>
              <h2 style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "4px",
                fontFamily: "Archivo"
              }}>
                Featured Creators
              </h2>
              <p style={{ color: "#64748b", fontSize: "14px" }}>
                Learn from the best in the industry
              </p>
            </div>
            <Link href="/student/creators" style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#3b82f6",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none"
            }}>
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px"
          }}>
            {featuredCreators.map((creator) => (
              <div
                key={creator.id}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  padding: "24px",
                  transition: "all 0.2s",
                  cursor: "pointer"
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "20px"
                }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    background: `linear-gradient(135deg, ${creator.color}, ${creator.color}aa)`,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "18px"
                  }}>
                    {creator.avatar}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "4px"
                    }}>
                      {creator.name}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#64748b" }}>
                      {creator.title}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  gap: "24px",
                  paddingTop: "16px",
                  borderTop: "1px solid #f1f5f9"
                }}>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a", fontFamily: "Archivo" }}>
                      {creator.students}
                    </div>
                    <div style={{ fontSize: "12px", color: "#94a3b8" }}>Students</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a", fontFamily: "Archivo" }}>
                      {creator.courses}
                    </div>
                    <div style={{ fontSize: "12px", color: "#94a3b8" }}>Courses</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a", fontFamily: "Archivo", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Star size={14} fill="#f59e0b" color="#f59e0b" /> {creator.rating}
                    </div>
                    <div style={{ fontSize: "12px", color: "#94a3b8" }}>Rating</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Courses */}
        <section>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px"
          }}>
            <div>
              <h2 style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "4px",
                fontFamily: "Archivo"
              }}>
                Popular Courses
              </h2>
              <p style={{ color: "#64748b", fontSize: "14px" }}>
                Trending courses loved by students
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 16px",
                background: "#f1f5f9",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                color: "#64748b",
                cursor: "pointer"
              }}>
                <Filter size={16} />
                Filters
              </button>
              <Link href="/student/courses" style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#3b82f6",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none"
              }}>
                View All <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px"
          }}>
            {popularCourses.map((course) => (
              <div
                key={course.id}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  transition: "all 0.2s"
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  height: "180px",
                  background: "linear-gradient(135deg, #3b82f615, #06b6d415)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}>
                  <span style={{ fontSize: "72px" }}>{course.thumbnail}</span>
                  
                  {/* Badges */}
                  {course.bestseller && (
                    <span style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      padding: "4px 12px",
                      background: "#f59e0b",
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 700,
                      borderRadius: "6px",
                      textTransform: "uppercase"
                    }}>
                      Bestseller
                    </span>
                  )}

                  {/* Save Button */}
                  <button
                    onClick={() => toggleSaved(course.id)}
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      border: "none",
                      background: "white",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Heart 
                      size={18} 
                      color={savedCourses.includes(course.id) ? "#ef4444" : "#94a3b8"}
                      fill={savedCourses.includes(course.id) ? "#ef4444" : "none"}
                    />
                  </button>

                  {/* Play Button Overlay */}
                  <button style={{
                    position: "absolute",
                    inset: 0,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.2s"
                  }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
                    }}>
                      <Play size={24} color="#3b82f6" fill="#3b82f6" />
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <h3 style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#0f172a",
                    marginBottom: "8px",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {course.title}
                  </h3>
                  <p style={{
                    fontSize: "13px",
                    color: "#64748b",
                    marginBottom: "12px"
                  }}>
                    {course.creator}
                  </p>

                  {/* Rating & Stats */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "12px",
                    fontSize: "13px"
                  }}>
                    <span style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontWeight: 600,
                      color: "#0f172a"
                    }}>
                      <Star size={14} fill="#f59e0b" color="#f59e0b" />
                      {course.rating}
                      <span style={{ fontWeight: 400, color: "#94a3b8" }}>
                        ({course.reviews.toLocaleString()})
                      </span>
                    </span>
                    <span style={{ color: "#94a3b8" }}>
                      {course.students.toLocaleString()} students
                    </span>
                  </div>

                  {/* Duration & Level */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                    fontSize: "12px",
                    color: "#64748b"
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={12} /> {course.duration}
                    </span>
                    <span style={{
                      padding: "2px 8px",
                      background: "#f1f5f9",
                      borderRadius: "4px"
                    }}>
                      {course.level}
                    </span>
                  </div>

                  {/* Price */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    paddingTop: "16px",
                    borderTop: "1px solid #f1f5f9"
                  }}>
                    <span style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#0f172a",
                      fontFamily: "Archivo"
                    }}>
                      ${course.price}
                    </span>
                    <span style={{
                      fontSize: "16px",
                      color: "#94a3b8",
                      textDecoration: "line-through"
                    }}>
                      ${course.originalPrice}
                    </span>
                    <span style={{
                      marginLeft: "auto",
                      padding: "4px 10px",
                      background: "#10b98115",
                      color: "#10b981",
                      fontSize: "12px",
                      fontWeight: 600,
                      borderRadius: "6px"
                    }}>
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
