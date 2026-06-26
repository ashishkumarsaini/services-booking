import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const styles = {
    primary:
      "bg-[#24483b] text-white shadow-sm hover:bg-[#1d3a31] border-[#24483b]",
    secondary:
      "bg-white text-[#111827] border-slate-200 hover:border-[#24483b]/40 hover:text-[#24483b]",
    ghost: "bg-transparent text-[#111827] border-transparent hover:bg-slate-100",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#24483b]">
          <span className="size-2 rounded-full bg-[#24483b]" />
          {eyebrow}
          <span className="size-2 rounded-full bg-[#24483b]" />
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
      ) : null}
    </div>
  );
}

export function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-md border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
      {children}
    </span>
  );
}

export function DotLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#111827]">
      <span className="size-2 rounded-full bg-[#24483b]" />
      {children}
      <span className="size-2 rounded-full bg-[#24483b]" />
    </span>
  );
}
