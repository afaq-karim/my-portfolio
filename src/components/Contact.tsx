import { ArrowRight, Clock } from "lucide-react";
import { site } from "@/data/site";
import { CopyEmail } from "./CopyEmail";
import { Reveal } from "./Reveal";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent(
  "Hi Afaq,\n\nI'm working on...\n\nTimeline:\nBudget range:\n\nThanks!",
)}`;

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Let&apos;s talk</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Have a product in mind?{" "}
              <span className="font-serif font-normal italic text-gradient">Let&apos;s build it.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-stone-400">
              Tell me about your idea, your timeline and where you&apos;re stuck. I reply to every message
              within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={mailto}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-bg transition hover:bg-white"
              >
                {site.email}
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
              <CopyEmail email={site.email} />
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-stone-400">
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Github className="size-4" /> GitHub
              </a>
              <a href={site.socials.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <XIcon className="size-3.5" /> X / Twitter
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4" /> {site.timezone}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
