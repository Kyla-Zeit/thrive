import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Phone } from "lucide-react";
import { SectionLabel } from "../components/SiteLayout";

export const Route = createFileRoute("/get-help")({
  head: () => ({
    meta: [
      { title: "Get Help — Thrive Social Services" },
      { name: "description", content: "Looking for support? We help you find the right starting point through community and agency referrals." },
      { property: "og:title", content: "Get Help — Thrive Social Services" },
      { property: "og:description", content: "Find the right support through community or MCFD/CLBC referrals." },
    ],
  }),
  component: GetHelp,
});

const resources = [
  { name: "BC 211", desc: "A great starting point — provides information and referral services for specialized help lines through the 211 Online Directory.", href: "https://bc211.ca/" },
  { name: "Online Distress Services", desc: "Free, confidential, nonjudgmental online support from 12 noon to 1 am daily in BC. Youth (12-25) via YouthInBC.com and adults via CrisisCentreChat.ca.", href: "https://youthinbc.com/" },
  { name: "Foundry Victoria", desc: "Young people ages 12 to 24 can access mental health and substance use support, primary care, peer support and social services.", href: "https://foundrybc.ca/victoria/" },
  { name: "BounceBack", desc: "A free skill-building program to help adults and youth 15+ manage low mood, mild to moderate depression, anxiety, stress or worry.", href: "https://bouncebackbc.ca/" },
  { name: "Parents Together Program", desc: "Facilitated education and support group for parents of teens. Skills development for respectful communication and boundaries.", href: "https://bgcsvi.org/programs/parenting/" },
];

function GetHelp() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20">
        <SectionLabel>Get Help</SectionLabel>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
          Looking for a place to <span className="serif-italic text-coral">start?</span>
        </h1>
        <p className="mt-10 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          We wish to help you along your journey by providing as much information and guidance as we can. If you don't find what you're looking for, please contact us and we will do our best to help.
        </p>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <SectionLabel>Two Ways to Connect</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl mb-12">How we can help</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-border p-10 bg-background">
              <p className="font-mono-label mb-8">01</p>
              <h3 className="font-display text-3xl mb-4">Community Referral</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Your community professional can contact us directly and our staff will listen and help determine if our services are a good fit for your needs.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-coral text-sm tracking-[0.18em] uppercase font-semibold">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-border p-10 bg-background">
              <p className="font-mono-label mb-8">02</p>
              <h3 className="font-display text-3xl mb-4">MCFD or CLBC Referral</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Some services require a referral from the Ministry for Children and Family Development (MCFD) or Community Living BC (CLBC).
              </p>
              <a href="https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/children-and-family-development" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-coral text-sm tracking-[0.18em] uppercase font-semibold">
                Learn about MCFD <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <SectionLabel>Community Resources</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl mb-4">Other services that may help</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">If you are not eligible for our services, there are other organizations that may be able to support you.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r) => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-border bg-card p-7 hover:border-coral transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-xl">{r.name}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-coral" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="font-mono-label !text-coral mb-3">Crisis Line</p>
            <h2 className="font-display text-3xl md:text-4xl !text-cream">Need immediate support?</h2>
            <p className="text-cream/70 mt-3 max-w-md">If you are in crisis, please call 9-1-1 or the BC Crisis Line.</p>
          </div>
          <a href="tel:18007842433" className="inline-flex items-center gap-3 rounded-full bg-coral px-8 py-5 text-base tracking-wider font-semibold text-primary-foreground">
            <Phone className="w-5 h-5" /> 1-800-784-2433
          </a>
        </div>
      </section>
    </>
  );
}
