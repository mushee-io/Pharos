import Link from "next/link";

export function FeatureCard({
  icon,
  title,
  subtitle,
  bullets,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bullets: string[];
  cta: { href: string; label: string };
}) {
  return (
    <div className="card rounded-[28px] p-7 md:p-8">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/90 text-white shadow-soft">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-black/70">{subtitle}</p>

      <ul className="mt-5 space-y-2 text-sm text-black/75">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <Link
        href={cta.href}
        className="mt-6 inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
      >
        {cta.label}
      </Link>
    </div>
  );
}
