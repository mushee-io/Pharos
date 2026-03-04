import Link from "next/link";
import { Filter, ShieldCheck, Flame, Rocket } from "lucide-react";
import { projects } from "@/lib/projects";

const chips = ["Verified", "New", "Trending", "RWA", "Payments", "DeFi", "Infrastructure", "Public Goods"];

export default function LaunchpadPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-sm text-black/60">Mushee Launchpad</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Launch financial infrastructure with trust built-in.
        </h1>
        <p className="mt-4 text-black/70">
          Explore projects across RWAs, payments, DeFi, and next-gen infrastructure — with clear verification and calm risk labels.
        </p>
      </header>

      <section className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c}
              className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-soft transition hover:-translate-y-0.5"
              type="button"
            >
              {c}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/70 shadow-soft transition hover:-translate-y-0.5"
        >
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/launchpad/${p.slug}`}
            className="card group rounded-[28px] p-6 transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-black/70">{p.tagline}</p>
              </div>

              {p.verified ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-black/15 bg-white/70 px-3 py-1 text-xs font-medium text-black/70">
                  <Flame className="h-3.5 w-3.5" />
                  Unverified
                </span>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 p-4">
              <div>
                <p className="text-xs font-medium text-black/50">Creator reputation</p>
                <p className="mt-1 text-sm text-black/75">{p.creatorHandle} · {p.creatorScore}/100</p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-black">
                View <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
