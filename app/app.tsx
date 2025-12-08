// app/page.tsx
import Link from "next/link";

export default function WelcomePage() {
  // demo counts — replace with client-side fetch components later
  const counts = { startups: 0, programs: 0, mentorsessions: 0 };

  return (
    <section className="welcome-page">
      <div className="welcome-hero">
        <div>
          <h2>Hello — welcome to the Incubation Hub</h2>
          <p className="muted">A central place to apply for programs, connect with mentors, and track progress.</p>

          <div className="welcome-actions">
            <Link href="/dashboard" className="primary">Get started</Link>
            <Link href="/programs" className="secondary">Explore programs</Link>
          </div>
        </div>

        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-value">{counts.startups}</div>
            <div className="metric-label">Startups</div>
          </div>
          <div className="metric">
            <div className="metric-value">{counts.programs}</div>
            <div className="metric-label">Programs</div>
          </div>
          <div className="metric">
            <div className="metric-value">{counts.mentorsessions}</div>
            <div className="metric-label">Mentor sessions</div>
          </div>
        </div>
      </div>

      <div className="welcome-cards">
        <div className="panel">
          <div className="panel-header">Quick Links</div>
          <div className="panel-body">
            <ul>
              <li>Apply to a program</li>
              <li>Book an office hour</li>
              <li>Upload your pitch deck</li>
            </ul>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">Next event</div>
          <div className="panel-body">
            <strong>Pitch Night — 22 Jan 2026</strong>
            <p className="muted">Join other founders for a live feedback session and investor intros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
