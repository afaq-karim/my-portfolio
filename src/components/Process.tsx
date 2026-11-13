import { Check } from "lucide-react";
import { engagements, process } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How we'll work"
        title={
          <>
            A clear process,{" "}
            <span className="font-serif font-normal italic text-accent">no surprises</span>
          </>
        }
        body="Transparent communication and predictable delivery — so you can focus on your business while the product gets built."
      />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.06} className="bg-bg">
            <div className="h-full p-8">
              <p className="font-serif text-5xl italic text-accent/70">{p.step}</p>
              <h3 className="mt-6 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-4 lg:grid-cols-3">
        {engagements.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <div
              className={`relative h-full rounded-3xl p-8 ${
                e.highlight ? "border border-accent/40 bg-accent/[0.06]" : "card"
              }`}
            >
              {e.highlight && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-bg">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{e.body}</p>
              <ul className="mt-6 space-y-2.5">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-stone-300">
                    <Check className="size-4 shrink-0 text-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
