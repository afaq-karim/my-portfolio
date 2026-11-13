import { experience, stack } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Experience() {
  return (
    <Section id="experience">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                8+ years of{" "}
                <span className="font-serif font-normal italic text-accent">shipping</span>
              </>
            }
            body="From founding and scaling my own marketplace to leading frontend architecture and owning full platforms for international companies."
          />
          <ol className="relative space-y-10 border-l border-line pl-8">
            {experience.map((e, i) => (
              <Reveal key={e.company + e.role} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-bg bg-accent ring-4 ring-accent/15" />
                  <p className="font-mono text-xs uppercase tracking-widest text-stone-500">{e.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {e.role} <span className="text-accent">· {e.company}</span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-stone-400">{e.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="lg:pt-2">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">Toolkit</p>
            <h3 className="text-3xl font-semibold tracking-tight text-white">The right tool for the job</h3>
            <p className="mt-4 text-stone-400">
              Pragmatic, battle-tested choices — picked for your product&apos;s needs, not hype.
            </p>
          </Reveal>
          <div className="mt-10 space-y-4">
            {stack.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.04}>
                <div className="card rounded-2xl p-6">
                  <p className="mb-4 text-sm font-medium text-white">{g.group}</p>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-xs text-stone-400 transition hover:border-accent/40 hover:text-white"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
