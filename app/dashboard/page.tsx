"use client";

export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827", marginBottom: "16px" }}>
        Dashboard
      </h1>
      <p style={{ color: "#6b7280" }}>
        Welcome back! Here is what is happening.
      </p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "16px",
        marginTop: "24px"
      }}>
        <div style={{ 
          backgroundColor: "white", 
          padding: "24px", 
          borderRadius: "12px", 
          border: "1px solid #e5e7eb" 
        }}>
          <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>24</p>
          <p style={{ color: "#6b7280", margin: "4px 0 0 0" }}>Active Startups</p>
        </div>
        
        <div style={{ 
          backgroundColor: "white", 
          padding: "24px", 
          borderRadius: "12px", 
          border: "1px solid #e5e7eb" 
        }}>
          <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>8</p>
          <p style={{ color: "#6b7280", margin: "4px 0 0 0" }}>Programs</p>
        </div>
        
        <div style={{ 
          backgroundColor: "white", 
          padding: "24px", 
          borderRadius: "12px", 
          border: "1px solid #e5e7eb" 
        }}>
          <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>45</p>
          <p style={{ color: "#6b7280", margin: "4px 0 0 0" }}>Mentors</p>
        </div>
        
        <div style={{ 
          backgroundColor: "white", 
          padding: "24px", 
          borderRadius: "12px", 
          border: "1px solid #e5e7eb" 
        }}>
          <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>$2.4M</p>
          <p style={{ color: "#6b7280", margin: "4px 0 0 0" }}>Total Funding</p>
        </div>
      </div>
    </div>
  );
}