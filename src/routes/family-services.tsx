import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/SiteLayout";
import family from "../assets/family.jpg";

export const Route = createFileRoute("/family-services")({
  head: () => ({
    meta: [
      { title: "Children, Youth & Families — Thrive" },
      { name: "description", content: "Family preservation, parenting support, mental health outreach, youth services and more across Greater Victoria." },
      { property: "og:title", content: "Children, Youth & Families — Thrive" },
      { property: "og:description", content: "Self-referral and MCFD-referral programs for children, youth and families." },
      { property: "og:image", content: family },
    ],
  }),
  component: FamilyServices,
});

const programs = [
  ["Foundry West Shore & Sooke", "Opening 2028, a Foundry serving West Shore, Sooke & Port Renfrew will deliver integrated services for youth and young people aged 12-24 and their families.", "Self-referral"],
  ["Rise Up Youth Employment", "Employment services for youth aged 15 to 25 who are facing barriers to employment. No experience needed — we meet you where you are.", "Self-referral"],
  ["Children and Youth with Support Needs", "Works with children, youth, and families to develop skills and support community participation.", "MCFD Referral"],
  ["Child & Youth Mental Health Outreach", "Supports children and youth under 19 who have significant emotional and mental health issues.", "MCFD Referral"],
  ["Youth Services", "Supports youth 12-19 and their parents/caregivers who have an open file with MCFD through its protection or youth guardianship programs.", "MCFD Referral"],
  ["Foundations Parenting Program", "An intensive parenting program provided in a group setting and in the family home, running for 10 weeks.", "Self-referral"],
  ["Out-of-Care Support", "Serves non-parental caregivers who need help to ensure a safe living environment for the children in their care.", "MCFD Referral"],
  ["Family Development", "Serves individuals and families who require assistance to ensure safe living environments for their children.", "MCFD Referral"],
] as const;

function FamilyServices() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            Children, Youth <span className="serif-italic text-coral">& Families</span>
          </h1>
          <p className="mt-10 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Some programs are accessible directly through us (self-referral) and some require a referral from the Ministry for Children and Family Development (MCFD).
          </p>
        </div>
        <div className="lg:col-span-5">
          <img src={family} alt="A family walking together on a forested west coast trail" className="rounded-3xl w-full h-96 object-cover" loading="lazy" />
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-6">
          {programs.map(([title, desc, tag], i) => (
            <div key={title} className="group rounded-3xl border border-border bg-background p-10 hover:border-coral transition-colors">
              <div className="flex justify-between items-start mb-8">
                <p className="font-mono-label">{String(i + 1).padStart(2, "0")}</p>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-coral" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <span className="font-mono-label !text-coral">{tag}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
