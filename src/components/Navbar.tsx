"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="grid size-8 place-items-center rounded-lg bg-accent font-serif text-lg italic text-bg">
            A
          </span>
          {site.name}
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-stone-400 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent md:inline-flex"
        >
          Start a project
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 px-6 pb-6 md:hidden">
          {[...links, { href: "#contact", label: "Start a project" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-stone-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
