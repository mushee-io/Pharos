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
            <span className="text-sm text-black/80">Trust is infrastructure.</span>
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

      <section className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Mushee ID"
          subtitle="Prove you’re real without exposing who you are."
          bullets={[
            "Wallet reputation score (human-readable, app-friendly)",
            "Sybil resistance for grants, voting, and rewards",
            "Contribution badges (bounties, launches, reviews)",
            "Privacy-first proofs you can reuse across Pharos apps",
          ]}
          cta={{ href: "/identity", label: "Open Identity Dashboard" }}
        />

        <FeatureCard
          icon={<Rocket className="h-5 w-5" />}
          title="Mushee Launchpad"
          subtitle="Launch projects the ecosystem can trust."
          bullets={[
            "Creator verification + visible trust signals",
            "Milestone updates and post-launch transparency",
            "Templates for RWA, payments, DeFi, and infra teams",
            "Clear risk labels (verified vs. unverified)",
          ]}
          cta={{ href: "/launchpad", label: "Explore Launchpad" }}
        />
      </section>

      <section className="card rounded-[28px] p-7 md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
            <p className="mt-3 text-black/70">
              A simple flow: verify once, earn reputation through real actions, and launch with credibility built-in.
            </p>
            <ol className="mt-6 space-y-3 text-sm text-black/75">
              <li className="flex gap-3"><span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/90 text-white">1</span> Verify with a private proof (lightweight, privacy-first).</li>
              <li className="flex gap-3"><span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/90 text-white">2</span> Earn reputation from contributions (ship, review, participate).</li>
              <li className="flex gap-3"><span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/90 text-white">3</span> Launch projects with trust signals people understand.</li>
              <li className="flex gap-3"><span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/90 text-white">4</span> Apps reuse Mushee ID across Pharos — trust compounds.</li>
            </ol>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-black/50">Profile preview</p>
                <p className="mt-1 font-display text-xl font-semibold">innocent.pharos</p>
                <p className="mt-1 text-sm text-black/60">Privacy-first reputation for finance apps.</p>
              </div>
              <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">Verified</span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-black/60">
                  <span>Reputation</span>
                  <span className="font-medium text-black/70">82</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-black/10">
                  <div className="h-2 w-[82%] rounded-full bg-black/80" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Builder", "Contributor", "Grant-ready", "Low risk"].map((b) => (
                  <span key={b} className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70">
                    {b}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                <p className="text-xs font-medium text-black/60">Proofs</p>
                <ul className="mt-2 space-y-1 text-sm text-black/70">
                  <li>• Completed 12 tasks</li>
                  <li>• 3 launches published</li>
                  <li>• 0 chargebacks recorded</li>
                </ul>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 p-4">
              <div>
                <p className="text-xs font-medium text-black/60">Privacy</p>
                <p className="text-sm text-black/70">Show proofs, hide details</p>
              </div>
              <div className="h-7 w-12 rounded-full bg-black/10 p-1">
                <div className="h-5 w-5 rounded-full bg-black/70 translate-x-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
