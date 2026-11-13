import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, Star } from "lucide-react";
import { site, stats, clients } from "@/data/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="relative size-10 overflow-hidden rounded-full ring-1 ring-accent/40 lg:hidden">
              <Image src="/images/afaq.jpg" alt="Afaq Karim" fill sizes="40px" className="scale-[1.62] object-cover" />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-500">
              <MapPin className="size-3.5" /> {site.location} · Working remotely worldwide
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <Reveal delay={0.05}>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
              I build software that{" "}
              <span className="font-serif font-normal italic text-gradient">grows</span> with your
              business.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-400 sm:text-xl">
              Senior full-stack engineer with <span className="text-stone-200">8+ years</span> turning
              ideas into fast, scalable web, mobile and AI products — including a marketplace I took
              from zero to <span className="text-stone-200">800K+ users</span>.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-bg transition hover:bg-white"
              >
                Book a free intro call
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-medium text-white transition hover:border-white/30 hover:bg-white/5"
              >
                See my work
                <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <a
              href={site.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-stone-400 transition hover:text-white"
            >
              <Star className="size-4 fill-accent text-accent" />
              <span>
                <span className="text-stone-200">5.0</span> · Top Rated on Upwork · 100% Job Success
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-2xl" />
              <div className="relative size-72 overflow-hidden rounded-full ring-1 ring-accent/40 ring-offset-8 ring-offset-bg">
                <Image
                  src="/images/afaq.jpg"
                  alt="Portrait of Afaq Karim"
                  fill
                  priority
                  sizes="288px"
                  className="scale-[1.62] object-cover grayscale-[20%]"
                />
              </div>
              <div className="card absolute -bottom-6 -left-10 rounded-2xl px-5 py-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">800K+</p>
                <p className="text-xs text-stone-400">users on GilgitApp</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <dl className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg p-6 sm:p-8">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{s.value}</dd>
                <p className="mt-2 text-sm text-stone-500">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
          <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-stone-600 sm:text-xs sm:tracking-[0.25em]">
            Companies & products I&apos;ve built for
          </p>
          <div className="animate-marquee flex w-max gap-16">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="whitespace-nowrap text-xl font-medium text-stone-500">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
