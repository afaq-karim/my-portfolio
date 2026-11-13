"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3.5 text-sm text-stone-300 transition hover:border-white/30 hover:text-white"
    >
      {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
