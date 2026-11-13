import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-relaxed text-stone-400">{body}</p>}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className}`}>
      {children}
    </section>
  );
}
