import { Bot, Cloud, Layers, Palette, Rocket, Smartphone, type LucideIcon } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const icons: Record<string, LucideIcon> = {
  rocket: Rocket,
  bot: Bot,
  layers: Layers,
  smartphone: Smartphone,
  cloud: Cloud,
  palette: Palette,
};

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            One senior engineer.{" "}
            <span className="font-serif font-normal italic text-accent">The whole stack.</span>
          </>
        }
        body="Skip the agency overhead. You work directly with the person designing, building and shipping your product — frontend, backend, mobile, AI and infrastructure."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card group h-full rounded-2xl p-7 transition hover:border-accent/30">
                <div className="mb-6 grid size-11 place-items-center rounded-xl border border-line bg-white/5 text-accent transition group-hover:bg-accent group-hover:text-bg">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="rounded-full border border-line px-3 py-1 text-xs text-stone-400">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
