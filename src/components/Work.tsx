import { ArrowUpRight, Check } from "lucide-react";
import { projects, type Project } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-stone-400">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectLink({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-white"
    >
      Visit <ArrowUpRight className="size-4" />
    </a>
  );
}

function Featured({ p }: { p: Project }) {
  return (
    <Reveal>
      <article className="card relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-stone-500">
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-bg">Featured</span>
              {p.client} · {p.year}
            </div>
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{p.title}</h3>
            <p className="mt-5 text-lg leading-relaxed text-stone-400">{p.summary}</p>
            <ul className="mt-8 space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-stone-300">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <Tags items={p.stack} />
              <ProjectLink url={p.url} />
            </div>
          </div>
          {p.metric && (
            <div className="flex flex-col justify-center rounded-2xl border border-line bg-bg/60 p-10 text-center">
              <p className="text-gradient text-7xl font-semibold tracking-tight sm:text-8xl">{p.metric.value}</p>
              <p className="mt-3 text-stone-400">{p.metric.label}</p>
              <p className="mt-8 text-sm text-stone-500">500K+ downloads on Google Play · Web, iOS & Android</p>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  const [featured, ...rest] = projects;
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Products used by{" "}
            <span className="font-serif font-normal italic text-accent">real people</span>
          </>
        }
        body="A selection of platforms I've architected, built and shipped — from consumer marketplaces to AI-powered B2B tools."
      />
      <Featured p={featured} />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 0.05}
            className={rest.length % 2 === 1 && i === rest.length - 1 ? "md:col-span-2" : undefined}
          >
            <article className="card group flex h-full flex-col rounded-3xl p-8 transition hover:border-accent/30">
              <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-stone-500">
                <span>{p.client}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{p.summary}</p>
              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-stone-300">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                <Tags items={p.stack} />
                <ProjectLink url={p.url} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
