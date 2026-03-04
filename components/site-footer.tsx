export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[rgba(255,252,248,0.55)]">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-black/60 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-base font-semibold text-black/80">Mushee</p>
            <p className="mt-1">Identity + Launchpad infrastructure for Pharos builders.</p>
          </div>
          <div className="text-xs">
            <p>Website: mushee.cloud · X: x.com/m</p>
            <p className="mt-1">© {new Date().getFullYear()} Mushee</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
