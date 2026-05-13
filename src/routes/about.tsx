import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "../components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Thrive Social Services" },
      { name: "description", content: "A team of social service professionals helping individuals and families live empowered, fulfilling lives across Greater Victoria." },
      { property: "og:title", content: "About Thrive Social Services" },
      { property: "og:description", content: "Strength-based programs since the 1980s. CARF accredited since 2004." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Integrity", body: "We model and encourage honesty that embraces respect, trust and accountability for ourselves, service participants and the broader community." },
  { title: "Collaboration", body: "We build bridges to improve outcomes through a strengths-based process fostering adaptability, inclusiveness and innovation." },
  { title: "Courage", body: "We celebrate resilience and advocate with empathy for perseverance and bravery in challenging adversity." },
];

const board = [
  ["HM", "Hazel Meredith", "President"],
  ["VW", "Vanessa White", "Vice President"],
  ["CR", "Clemens Rettich", "Secretary"],
  ["BK", "Bill King", "Treasurer"],
  ["JW", "Jack Watson", "Director"],
  ["JS", "Jessica Sidhu", "Director"],
  ["HF", "Hana Felix", "Director"],
  ["VB", "Vanessa Butler", "Director"],
  ["JC", "Joe Cardle", "Director"],
];

const staff = [
  ["SB", "Scott Bradford", "Executive Director"],
  ["GB", "Gail Bajaj", "Director of Programs"],
  ["KE", "Kathy Easton", "Director of Implementation — Foundry"],
  ["JC", "Joan Chalmers", "Director of Finance and Operations"],
];

function PersonCard({ initials, name, role }: { initials: string; name: string; role: string }) {
  return (
    <div className="rounded-2xl border border-border p-6 bg-card text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-coral-soft text-coral flex items-center justify-center font-display text-xl font-bold mb-4">{initials}</div>
      <p className="font-medium text-ink">{name}</p>
      <p className="text-sm text-muted-foreground mt-0.5">{role}</p>
    </div>
  );
}

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <SectionLabel>About Thrive</SectionLabel>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            Bringing your potential to <span className="serif-italic text-coral">life.</span>
          </h1>
          <p className="mt-10 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We are a team of social service professionals with a mission to help the children, youth, adults and families we serve live their best lives by providing high-quality services through a variety of programs.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right text-muted-foreground/70">
          <p className="font-mono-label">CARF Accredited</p>
          <p className="font-mono-label mt-1">Since 2004</p>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono-label text-coral mb-4">Mission</p>
            <p className="font-display text-3xl md:text-4xl leading-snug">
              We provide services to individuals and families that create opportunities to build skills, strengths and resourcefulness.
            </p>
          </div>
          <div>
            <p className="font-mono-label text-coral mb-4">Vision</p>
            <p className="font-display text-3xl md:text-4xl leading-snug">
              Diverse individuals and families living empowered and fulfilling lives.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <SectionLabel>Our Values</SectionLabel>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border p-10 bg-card">
              <h3 className="font-display text-3xl text-coral mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32">
        <SectionLabel>Our History</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl mb-8">Since the mid-1980s</h2>
        <div className="grid md:grid-cols-2 gap-10 text-muted-foreground leading-relaxed text-[0.97rem]">
          <p>
            THRIVE has been doing amazing work in the greater Victoria area since the mid-1980s. We are a registered non-profit. In April 2022, the agency changed its name to THRIVE Social Services, reflecting our ongoing mission of helping those we serve find and reach their full potential.
          </p>
          <p>
            The agency has maintained its high standards, consistently receiving program accreditation from the Commission on Accreditation for Rehabilitation Facilities (CARF) since 2004. The vibrant atmosphere and commitment to service quality inspire a sense of belonging for employees and clients alike.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl mb-12">Board of Directors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {board.map(([i, n, r]) => <PersonCard key={n} initials={i} name={n} role={r} />)}
          </div>
          <h3 className="font-display text-3xl md:text-4xl mt-20 mb-10">Staff Directors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {staff.map(([i, n, r]) => <PersonCard key={n} initials={i} name={n} role={r} />)}
          </div>
        </div>
      </section>
    </>
  );
}
