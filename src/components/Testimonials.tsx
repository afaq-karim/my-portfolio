import { ArrowUpRight, BadgeCheck, Quote, Star } from "lucide-react";
import { site, testimonials, upworkStats } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="reviews">
      <SectionHeading
        eyebrow="Client reviews"
        title={
          <>
            Trusted by clients,{" "}
            <span className="font-serif font-normal italic text-accent">verified on Upwork</span>
          </>
        }
        body="Every review below is a real, public 5-star review from my Upwork profile, quoted word for word."
      />

      <Reveal>
        <a
          href={site.upwork}
          target="_blank"
          rel="noopener noreferrer"
          className="card group mb-10 flex flex-col gap-6 rounded-3xl p-8 transition hover:border-white/20 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <BadgeCheck className="size-8 text-emerald-400" />
            <div>
              <p className="font-semibold text-white">Top Rated on Upwork</p>
              <p className="text-sm text-stone-400">Identity verified · Gilgit, Pakistan</p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {upworkStats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-wider text-stone-500">{s.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
          <span className="inline-flex items-center gap-1 text-sm text-accent">
            View profile
            <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>

      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.quote} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
            <figure className="card rounded-3xl p-7">
              <div className="flex items-center justify-between">
                <Stars />
                <Quote className="size-5 text-accent/40" />
              </div>
              <blockquote className="mt-5 leading-relaxed text-stone-300">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="font-medium text-white">{t.name}</p>
                <p className="mt-0.5 text-sm text-stone-500">
                  {t.project} · {t.date}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
