// app/page.tsx
"use client";

import Link from "next/link";
import { Button } from "../components/ui/button"; // adjust path if yours differs
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO */}
      <header className="bg-gradient-to-r from-sky-600 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold">Incubation Hub</h1>
              <p className="mt-4 text-lg leading-relaxed opacity-95">
                A central place to apply for programs, connect with mentors, track progress and grow your startup.
                Apply for curated programs, book mentor sessions, and manage your startup journey — all in one place.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/auth">
                  <Button className="flex items-center gap-2 px-5 py-3">
                    Get started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link href="/auth">
                  <Button variant="outline" className="px-5 py-3">
                    Create account
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick feature panel */}
            <aside className="hidden md:block w-96">
              <div className="bg-white rounded-xl p-5 shadow-lg text-slate-900">
                <h3 className="font-semibold mb-2">What you can do</h3>
                <ul className="text-sm space-y-2">
                  <li>• Apply to curated accelerator programs</li>
                  <li>• Book 1:1 mentorship sessions</li>
                  <li>• Upload pitch decks & resources</li>
                  <li>• Track progress and milestones</li>
                </ul>
                <div className="mt-4 text-xs text-muted-foreground">
                  Secure, private, and built for founders.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* DESCRIPTION / FEATURES */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg shadow">
            <h4 className="font-semibold">Programs</h4>
            <p className="mt-2 text-sm text-muted-foreground">Explore training, funding and accelerator programs.</p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow">
            <h4 className="font-semibold">Mentorship</h4>
            <p className="mt-2 text-sm text-muted-foreground">Connect with experienced mentors in business, design and tech.</p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow">
            <h4 className="font-semibold">Resources</h4>
            <p className="mt-2 text-sm text-muted-foreground">Templates, pitch-decks, legal guides and more.</p>
          </div>
        </section>

        {/* small intro paragraph */}
        <section className="mt-8 text-sm text-muted-foreground">
          <p>
            The Incubation Hub is designed to simplify the founder journey — from applying to programs to tracking outcomes.
            Join a community of builders, get actionable feedback and grow faster.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t bg-background">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Incubation Hub. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">Terms of Service</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}