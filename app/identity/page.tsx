import Link from "next/link";
import { ShieldCheck, BadgeCheck, ArrowRight } from "lucide-react";

export default function IdentityPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-sm text-black/60">Mushee ID</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Reputation that feels calm, not creepy.
        </h1>
        <p className="mt-4 text-black/70">
          Mushee ID is a privacy-first identity and reputation layer for finance apps on Pharos —
          useful for payments, DeFi access control, and RWA onboarding.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Verified human", desc: "Sybil resistance for grants, voting, and rewards.", icon: <ShieldCheck className="h-5 w-5" /> },
          { title: "Wallet reputation", desc: "A simple score apps can use safely.", icon: <BadgeCheck className="h-5 w-5" /> },
          { title: "Reusable proofs", desc: "Verify once, reuse across Pharos apps.", icon: <ShieldCheck className="h-5 w-5" /> },
        ].map((c) => (
          <div key={c.title} className="card rounded-[28px] p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/90 text-white">
              {c.icon}
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-black/70">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="card rounded-[28px] p-7 md:p-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">Demo dashboard</h2>
        <p className="mt-3 text-black/70">
          This is a front-end demo. Plug your real proof flow + on-chain registry later.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] border border-black/10 bg-white/70 p-6 shadow-soft">
            <p className="text-xs font-medium text-black/50">Handle</p>
            <p className="mt-1 font-display text-2xl font-semibold">innocent.pharos</p>

            <div className="mt-5">
              <div className="flex items-center justify-between text-xs text-black/60">
                <span>Reputation</span>
                <span className="font-medium text-black/70">82</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-black/10">
                <div className="h-2 w-[82%] rounded-full bg-black/80" />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Payments-ready", "DeFi-safe", "RWA-onboarded"].map((b) => (
                <span key={b} className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-black/10 bg-white/70 p-6 shadow-soft">
            <p className="text-xs font-medium text-black/50">Suggested integrations</p>
            <ul className="mt-3 space-y-2 text-sm text-black/75">
              <li>• Lending: reputation-based limits</li>
              <li>• Payments: fraud & chargeback reputation</li>
              <li>• Launchpad: creator verification & risk labels</li>
              <li>• Governance: verified voting</li>
            </ul>

            <Link
              href="/launchpad"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              Go to Launchpad <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
