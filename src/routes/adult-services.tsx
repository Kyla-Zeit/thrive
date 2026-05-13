import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/SiteLayout";
import adults from "../assets/adults.jpg";

export const Route = createFileRoute("/adult-services")({
  head: () => ({
    meta: [
      { title: "Adults with Developmental Disabilities — Thrive" },
      { name: "description", content: "Community inclusion, employment, day programs and dinner groups for adults with developmental disabilities." },
      { property: "og:title", content: "Adults with Developmental Disabilities — Thrive" },
      { property: "og:description", content: "CLBC-referral programs supporting adults across Greater Victoria." },
      { property: "og:image", content: adults },
    ],
  }),
  component: AdultServices,
});

const programs = [
  ["Dinner Groups", "Three longstanding social and dinner groups. Each group is facilitated by two staff with six to eight participants, for a 9-month session."],
  ["Employment", "Helps adults over 19 with developmental disabilities achieve success with employers and fuller participation in their community."],
  ["Community Inclusion", "Supports individuals with developmental disabilities to access and contribute to their community while encouraging welcoming environments."],
  ["Day Program", "Three different programs available to adults 19 and older who have been diagnosed with a developmental disability."],
] as const;

function AdultServices() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Adults with <span className="serif-italic text-coral">Developmental</span> Disabilities
          </h1>
          <p className="mt-10 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Once we receive a referral from Community Living BC, our team will contact you to begin services and answer any questions you have.
          </p>
        </div>
        <div className="lg:col-span-6">
          <img src={adults} alt="Adults gathered around a table in a community art studio" className="rounded-3xl w-full h-[28rem] object-cover" loading="lazy" />
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-6">
          {programs.map(([title, desc], i) => (
            <div key={title} className="group rounded-3xl border border-border bg-background p-10 hover:border-coral transition-colors">
              <div className="flex justify-between items-start mb-8">
                <p className="font-mono-label">{String(i + 1).padStart(2, "0")}</p>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-coral" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <span className="font-mono-label !text-coral">CLBC Referral</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
