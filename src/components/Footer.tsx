import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-stone-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind CSS.
        </p>
        <a href="#top" className="hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
