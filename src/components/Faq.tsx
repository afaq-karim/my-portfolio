import { Plus } from "lucide-react";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Faq() {
  return (
    <Section id="faq" className="max-w-4xl">
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-5 shrink-0 text-accent transition group-open:rotate-45" />
              </summary>
              <p className="mt-4 leading-relaxed text-stone-400">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
