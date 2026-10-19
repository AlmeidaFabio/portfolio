"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { site } from "@/data/site";

export function ContactActions() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="w-full">
      <a
        href={"mailto:" + site.email + "?subject=Vamos%20conversar"}
        className="btn btn-primary group w-full justify-between px-6 py-4"
      >
        <span className="flex items-center gap-2.5">
          <Mail className="size-4" aria-hidden="true" />
          {site.email}
        </span>
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost justify-between px-5 py-3.5"
        >
          WhatsApp
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost justify-between px-5 py-3.5"
        >
          LinkedIn
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <button
        type="button"
        onClick={copyEmail}
        className="mt-3 flex w-full items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-3.5 text-left transition-colors duration-300 hover:border-accent/25 hover:bg-white/[0.04]"
        aria-live="polite"
      >
        <span className="flex items-center gap-2.5 text-[13px] text-white/55">
          {copied ? (
            <Check className="size-4 text-accent" aria-hidden="true" />
          ) : (
            <Copy className="size-4" aria-hidden="true" />
          )}
          {copied ? "E-mail copiado" : "Copiar e-mail"}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
          clique para copiar
        </span>
      </button>
    </div>
  );
}