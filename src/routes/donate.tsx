import { createFileRoute } from "@tanstack/react-router";
import { Heart, ArrowRight } from "lucide-react";
import { SectionLabel } from "../components/SiteLayout";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Thrive Social Services" },
      { name: "description", content: "Your gift helps Thrive provide critical services to children, youth, families and adults across Greater Victoria." },
      { property: "og:title", content: "Donate to Thrive" },
      { property: "og:description", content: "Help build stronger futures." },
    ],
  }),
  component: Donate,
});

const amounts = ["$25", "$50", "$100", "$250"];

function Donate() {
  return (
    <section className="mx-auto max-w-4xl px-6 lg:px-10 pt-24 pb-32 text-center">
      <SectionLabel><span className="block mx-auto">Make a Difference</span></SectionLabel>
      <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
        Build <span className="serif-italic text-coral">stronger</span> futures.
      </h1>
      <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
        Every contribution helps us provide critical services to children, youth, families, and adults in Greater Victoria. Together, we can ensure no one walks alone.
      </p>

      <div className="mt-14 rounded-3xl border border-border bg-card p-10 text-left">
        <p className="font-mono-label mb-4">Choose an amount</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {amounts.map((a) => (
            <button key={a} className="rounded-2xl border border-border py-5 font-display text-2xl hover:border-coral hover:text-coral transition-colors">{a}</button>
          ))}
        </div>
        <a href="https://www.canadahelps.org/en/dn/104254" target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-coral py-5 text-xs tracking-[0.18em] uppercase font-semibold text-primary-foreground hover:bg-coral/90 transition-colors">
          <Heart className="w-4 h-4" /> Continue to Donate <ArrowRight className="w-4 h-4" />
        </a>
        <p className="mt-5 text-xs text-muted-foreground text-center">
          Donations are securely processed through CanadaHelps. Tax receipts issued for gifts of $20 or more.
        </p>
      </div>
    </section>
  );
}
