import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Rocket, Layers, BadgeCheck } from "lucide-react";
import { StatPill } from "@/components/stat-pill";
import { FeatureCard } from "@/components/feature-card";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-soft">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm text-black/80">Infrastructure for trusted finance on Pharos.</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Identity + Launchpad for <span className="underline decoration-black/10 underline-offset-8">Pharos</span> builders.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
            Mushee helps Pharos apps verify real users, reward contributions, and launch new projects with confidence —
            privacy-first, calm by design, built for RWAs, payments, DeFi, and infrastructure.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/launchpad"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              Open Launchpad <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/identity"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-black shadow-soft transition hover:-translate-y-0.5"
            >
              Explore Mushee ID <ShieldCheck className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            <StatPill icon={<BadgeCheck className="h-4 w-4" />} label="ZK-ready identity" />
            <StatPill icon={<Layers className="h-4 w-4" />} label="Reusable reputation API" />
            <StatPill icon={<Rocket className="h-4 w-4" />} label="Launchpad with safe defaults" />
          </div>
        </div>
      </section>
