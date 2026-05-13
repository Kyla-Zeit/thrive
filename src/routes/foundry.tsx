import { createFileRoute } from "@tanstack/react-router";
import { Heart, Mail } from "lucide-react";
import { SectionLabel } from "../components/SiteLayout";
import foundry from "../assets/foundry.jpg";

export const Route = createFileRoute("/foundry")({
  head: () => ({
    meta: [
      { title: "Foundry Westshore — A new home for youth wellness" },
      { name: "description", content: "Coming in 2028. Foundry offers youth ages 12–24 connection, tools and support across the Westshore, Sooke and Port Renfrew." },
      { property: "og:title", content: "Foundry Westshore" },
      { property: "og:description", content: "A new home for youth wellness — opening 2028." },
      { property: "og:image", content: foundry },
    ],
  }),
  component: Foundry,
});

const services = [
  "Mental health",
  "Substance use health",
  "Physical & Sexual Health",
  "Peer support",
  "Work, Education & Community services",
  "Drop-in Counselling",
];

function Foundry() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionLabel>Foundry Westshore</SectionLabel>
          <h1 className="font-display text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95]">
            A new home for youth <span className="serif-italic text-coral">wellness.</span>
          </h1>
          <p className="mt-10 text-lg text-muted-foreground max-w-md leading-relaxed">
            Coming in 2028 — Foundry offers youth ages 12–24 (and the folks who love them) connection, tools and support in living a good life.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://www.canadahelps.org/en/dn/104254" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-primary-foreground">
              <Heart className="w-4 h-4" /> Donate to Foundry
            </a>
            <a href="mailto:foundry@thrivevictoria.org" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-xs tracking-[0.18em] uppercase font-semibold">
              <Mail className="w-4 h-4" /> Contact Us
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <img src={foundry} alt="Modern community wellness centre — Foundry Westshore" className="rounded-3xl w-full h-[32rem] object-cover" loading="lazy" />
          <span className="absolute bottom-5 right-5 rounded-full bg-coral text-primary-foreground px-5 py-2 font-mono-label !text-primary-foreground">Opening 2028</span>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <SectionLabel>Land Acknowledgement</SectionLabel>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            We acknowledge with gratitude that Foundry West Shore, Sooke, and Port Renfrew will operate on the traditional and unceded territories of the Coast Salish Peoples, including the Nations of Esquimalt (Xwsepsum/Kosapsum), Songhees, T'Sou-ke, Sc'ianew (Beecher Bay), and NuuChahNulth Peoples of Pacheedaht. We honour and respect Metis, Inuit, First Nations, and commit to fostering culturally safe and inclusive spaces for all youth and families.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionLabel>Integrated Services</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Everything <span className="serif-italic text-coral">under one roof.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Hosted by Thrive Social Services Society, Foundry West Shore will unite multiple partner organizations to support the health and wellness of young people and their families across the region.
          </p>
        </div>
        <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-3 self-center">
          {services.map((s) => (
            <li key={s} className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5">
              <span className="w-2.5 h-2.5 rounded-full bg-coral" />
              <span className="font-medium">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 text-center">
          <h2 className="font-display text-4xl md:text-5xl !text-cream max-w-3xl mx-auto leading-[1.1]">
            Help us build a brighter future for <span className="serif-italic text-coral">youth.</span>
          </h2>
          <p className="mt-6 text-cream/75 max-w-xl mx-auto">
            Your donation helps create welcoming spaces and accessible services for young people in the West Shore, Sooke, and Port Renfrew.
          </p>
          <a href="https://www.canadahelps.org/en/dn/104254" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-primary-foreground">
            Donate Now
          </a>
        </div>
      </section>
    </>
  );
}
