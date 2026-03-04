import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck, TriangleAlert, ExternalLink } from "lucide-react";
import { projectsBySlug } from "@/lib/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projectsBySlug[params.slug];
  if (!p) return notFound();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between gap-4">
        <Link href="/launchpad" className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black">
          <ArrowLeft className="h-4 w-4" />
          Back to Launchpad
        </Link>

        {p.verified ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
            <ShieldCheck className="h-4 w-4" /> Verified project
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-4 py-2 text-xs font-medium text-black/70">
            <TriangleAlert className="h-4 w-4" /> Unverified (demo label)
          </span>
        )}
      </div>

      <header className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">{p.name}</h1>
        <p className="mt-3 text-black/70">{p.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-soft">
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card rounded-[28px] p-6 md:col-span-2">
          <h2 className="font-display text-xl font-semibold">About</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/70">{p.description}</p>

          <h3 className="mt-6 font-display text-lg font-semibold">Milestones</h3>
          <div className="mt-3 space-y-2">
            {p.milestones.map((m) => (
              <div key={m.title} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/70 p-4">
                <div className={`mt-0.5 h-5 w-5 rounded-md border ${m.done ? "bg-black/90" : "bg-transparent"} border-black/20`} />
                <div>
                  <p className="text-sm font-medium text-black/80">{m.title}</p>
                  <p className="mt-1 text-xs text-black/60">{m.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card rounded-[28px] p-6">
            <p className="text-xs font-medium text-black/50">Creator</p>
            <p className="mt-1 font-display text-xl font-semibold">{p.creatorHandle}</p>
            <p className="mt-1 text-sm text-black/70">Reputation score: <span className="font-medium text-black/80">{p.creatorScore}/100</span></p>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-4">
              <p className="text-xs font-medium text-black/60">Trust signals</p>
              <ul className="mt-2 space-y-1 text-sm text-black/70">
                <li>• Identity proof: {p.verified ? "present" : "missing"}</li>
                <li>• Risk label: {p.verified ? "low" : "unknown"}</li>
                <li>• Transparency: milestones enabled</li>
              </ul>
            </div>
          </div>

          <div className="card rounded-[28px] p-6">
            <h3 className="font-display text-lg font-semibold">Links</h3>
            <div className="mt-3 space-y-2 text-sm">
              <a className="inline-flex items-center gap-2 text-black/80 hover:text-black" href={p.links.website} target="_blank" rel="noreferrer">
                Website <ExternalLink className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center gap-2 text-black/80 hover:text-black" href={p.links.twitter} target="_blank" rel="noreferrer">
                X <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-2xl bg-black px-4 py-3 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              Support (demo)
            </button>
            <p className="mt-2 text-xs text-black/55">
              Demo button only — connect your real on-chain flow later.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
