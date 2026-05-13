import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "../components/SiteLayout";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import hero from "../assets/hero.jpg";
import seedling from "../assets/seedling.jpg";
import coast from "../assets/coast.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thrive Social Services — Thrive Together" },
      { name: "description", content: "We provide strength-based services to individuals and families, creating opportunities to build skills, strengths and resourcefulness." },
      { property: "og:title", content: "Thrive Social Services — Thrive Together" },
      { property: "og:description", content: "Strength-based community programs across Greater Victoria and the Westshore." },
    ],
  }),
  component: Home,
});

const programs = [
  { tag: "8 Programs", title: "Children, Youth & Families", desc: "Family preservation, parenting support, mental health outreach, youth services and more.", to: "/family-services" as const },
  { tag: "4 Programs", title: "Adults with Disabilities", desc: "Community inclusion, employment support, day programs, and social dinner groups.", to: "/adult-services" as const },
  { tag: "Opening 2028", title: "Foundry Westshore", desc: "Integrated youth services including mental health, substance use, and peer support for ages 12–24.", to: "/foundry" as const },
  { tag: "Ages 15–25", title: "Rise Up Employment", desc: "Employment services for youth facing barriers. No experience needed — we meet you where you are.", to: "/family-services" as const },
];

const stats = [
  { num: "40+", label: "Years Serving Victoria", sub: "Since the mid-1980s" },
  { num: "12", label: "Active Programs", sub: "Across all services" },
  { num: "1000+", label: "Lives Impacted Annually", sub: "Children, youth & adults" },
  { num: "CARF", label: "Accredited Since 2004", sub: "Highest standards of care" },
];

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroFade = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-end overflow-hidden">
        <motion.img
          src={hero}
          alt="Community members sharing a joyful moment together in nature"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{ y: heroY, scale: heroScale }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <motion.div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pb-32 pt-32" style={{ opacity: heroFade }}>
          <div className="max-w-2xl text-cream">
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block w-8 h-px bg-coral" />
              <span className="font-mono-label !text-cream/80">Thrive Social Services</span>
            </motion.div>
            <h1 className="font-display text-7xl md:text-8xl lg:text-[8.5rem] !text-cream font-bold overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Thrive
              </motion.span>
              <motion.span
                className="block serif-italic font-medium text-cream/85 mt-2"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              >
                Together
              </motion.span>
            </h1>
            <motion.p
              className="mt-10 max-w-md text-base leading-relaxed text-cream/85"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
            >
              We provide strength-based services to individuals and families, creating
              opportunities to build skills, strengths, and resourcefulness.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0 }}
            >
              <Link to="/get-help" className="group inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-primary-foreground hover:bg-coral/90 transition-colors hover:gap-3">
                Get Support <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-full border border-cream/40 px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-cream hover:bg-cream/10 transition-colors">
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <SectionLabel>Our Mission</SectionLabel>
          <p className="serif-italic text-2xl text-coral">Since the 1980s</p>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={0.15}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            We help individuals and families build the skills, strengths, and resourcefulness to live <span className="serif-italic text-coral">empowered</span> and fulfilling lives.
          </h2>
          <p className="mt-10 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Thrive Social Services Society delivers a broad portfolio of community-based programs
            supporting children, youth, families, and adults across Greater Victoria and the
            Westshore — including family and parenting supports, youth mental health and outreach,
            employment and life skills programming, and adult services.
          </p>
        </Reveal>
      </section>

      {/* Programs */}
      <section className="bg-cream/0 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-display text-5xl md:text-6xl">Our Programs</h2>
            </div>
            <Link to="/get-help" className="serif-italic text-xl text-coral hover:underline underline-offset-4">
              Find the right support →
            </Link>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Link
                    to={p.to}
                    className="group relative block rounded-3xl border border-border bg-card p-10 hover:border-coral hover:shadow-[0_20px_50px_-20px_rgba(225,120,86,0.35)] transition-all"
                  >
                    <div className="flex justify-between items-start mb-12">
                      <span className="font-mono-label">{p.tag}</span>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-coral group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="font-display text-3xl mb-3">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Impact */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <Reveal className="lg:col-span-7">
              <SectionLabel>Our Impact</SectionLabel>
              <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
                Building <span className="serif-italic text-coral">stronger</span> communities, one person at a time.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.15}>
              <motion.img
                src={coast}
                alt="Peaceful contemplation by the coast"
                className="rounded-3xl w-full h-72 object-cover"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              />
            </Reveal>
          </div>
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border" stagger={0.1}>
            {stats.map((s) => (
              <StaggerItem key={s.label} className="bg-background p-8 lg:p-10">
                <p className="font-display text-5xl lg:text-6xl text-coral">{s.num}</p>
                <p className="mt-6 font-medium text-ink">{s.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <img src={seedling} alt="Hands nurturing a seedling — growth and resilience" className="rounded-3xl w-full h-[28rem] object-cover" loading="lazy" />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.15}>
            <p className="font-display text-7xl text-coral leading-none">"</p>
            <blockquote className="font-display text-3xl md:text-4xl leading-snug !text-cream mt-4">
              We believe in the inherent strength of every person. Our work is rooted in <span className="serif-italic text-coral">integrity, collaboration,</span> and <span className="serif-italic text-coral">courage.</span>
            </blockquote>
            <p className="mt-8 text-cream/75 max-w-xl leading-relaxed">
              We model honesty that embraces respect, trust and accountability. We build bridges
              through a strengths-based process fostering adaptability, inclusiveness and innovation.
              We celebrate resilience and advocate with empathy.
            </p>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-coral text-sm tracking-[0.18em] uppercase font-semibold hover:gap-3 transition-all">
              Read our full story <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" className="mx-auto max-w-7xl px-6 lg:px-10 py-32 text-center">
        <SectionLabel><span className="block mx-auto">Make a Difference</span></SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl max-w-3xl mx-auto leading-[1.05]">
          Your support helps build <span className="serif-italic text-coral">stronger futures.</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Every contribution helps us provide critical services to children, youth, families, and adults in Greater Victoria. Together, we can ensure no one walks alone.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-primary-foreground hover:bg-coral/90 transition-colors">
            Donate Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center rounded-full border border-ink/20 px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-ink hover:bg-ink hover:text-cream transition-colors">
            Get Involved
          </Link>
        </div>
      </Reveal>
    </>
  );
}
