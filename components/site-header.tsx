import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-[rgba(255,252,248,0.65)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white shadow-soft">
            M
          </span>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold tracking-tight">Mushee</p>
            <p className="text-xs text-black/55">for Pharos</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <Link href="/identity" className="rounded-2xl px-4 py-2 text-sm text-black/70 transition hover:bg-black/5 hover:text-black">
            Identity
          </Link>
          <Link href="/launchpad" className="rounded-2xl px-4 py-2 text-sm text-black/70 transition hover:bg-black/5 hover:text-black">
            Launchpad
          </Link>

          <a
            href="https://mushee.cloud"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/70 shadow-soft transition hover:-translate-y-0.5"
          >
            mushee.cloud <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href="https://x.com/m"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/70 shadow-soft transition hover:-translate-y-0.5"
          >
            X <ExternalLink className="h-4 w-4" />
          </a>
        </nav>

        <div className="md:hidden">
          <a
            href="https://mushee.cloud"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-black/70 shadow-soft"
          >
            <ExternalLink className="h-4 w-4" />
            Links
          </a>
        </div>
      </div>
    </header>
  );
}
