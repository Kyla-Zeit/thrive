import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "../components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thrive Social Services" },
      { name: "description", content: "Reach out to Thrive Social Services for support, partnership or general questions." },
      { property: "og:title", content: "Contact Thrive" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-32 grid lg:grid-cols-2 gap-16">
      <div>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95]">
          Let's <span className="serif-italic text-coral">connect.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
          We'd love to hear from you. Whether you're looking for services, want to get involved, or have a question — reach out.
        </p>
        <div className="mt-12 space-y-6">
          {[
            { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Victoria, British Columbia" },
            { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@thrivevictoria.org", href: "mailto:info@thrivevictoria.org" },
            { icon: <Mail className="w-5 h-5" />, label: "Foundry Inquiries", value: "foundry@thrivevictoria.org", href: "mailto:foundry@thrivevictoria.org" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-coral-soft text-coral flex items-center justify-center shrink-0">{c.icon}</div>
              <div>
                <p className="font-medium text-ink">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-coral hover:underline">{c.value}</a>
                ) : (
                  <p className="text-muted-foreground">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-10">
        <h2 className="font-display text-3xl mb-8">Send us a message</h2>
        {sent ? (
          <p className="serif-italic text-2xl text-coral">Thank you — we'll be in touch soon.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="First Name" placeholder="Jane" />
              <Field label="Last Name" placeholder="Doe" />
            </div>
            <Field label="Email" type="email" placeholder="jane@example.com" />
            <div>
              <label className="font-mono-label block mb-2">How can we help?</label>
              <textarea required rows={5} placeholder="Tell us a bit about what you're looking for…" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral" />
            </div>
            <button type="submit" className="w-full rounded-full bg-coral py-4 text-xs tracking-[0.18em] uppercase font-semibold text-primary-foreground hover:bg-coral/90 transition-colors">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono-label block mb-2">{label}</label>
      <input required type={type} placeholder={placeholder} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral" />
    </div>
  );
}
