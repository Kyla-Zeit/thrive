import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Menu, X, ChevronDown } from "lucide-react";
import thriveLogo from "../assets/thrive-logo.png";

const services = [
  { to: "/family-services", label: "Children, Youth & Families" },
  { to: "/adult-services", label: "Adults with Disabilities" },
  { to: "/foundry", label: "Foundry Westshore" },
];

type SocialIconName = "facebook" | "instagram" | "linkedin";

const socialLinks: {
  label: string;
  href: string;
  icon: SocialIconName;
}[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ThriveSocialServices/",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thrivesocialservices/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://ca.linkedin.com/company/thrivesocialservices",
    icon: "linkedin",
  },
];

const desktopNavItem =
  "inline-flex h-6 cursor-pointer items-center gap-1.5 text-[0.78rem] font-medium uppercase leading-none tracking-[0.18em] text-ink hover:text-coral transition-colors";

const socialButton =
  "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-coral/25 bg-cream text-coral shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-coral hover:text-primary-foreground hover:shadow-md focus:outline-none focus:ring-2 focus:ring-coral/30 focus:ring-offset-2 focus:ring-offset-background";

function SocialIcon({ icon }: { icon: SocialIconName }) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 21v-7.5H16l.45-3h-2.95V8.56c0-.86.42-1.7 1.78-1.7h1.34V4.3S15.4 4.1 14.24 4.1c-2.43 0-4.02 1.47-4.02 4.13v2.27H7.5v3h2.72V21h3.28Z"
        />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.25-2.15a1.15 1.15 0 1 1 0 2.3a1.15 1.15 0 0 1 0-2.3Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.94 8.98H3.72V20h3.22V8.98ZM5.33 4a1.87 1.87 0 1 0 0 3.74a1.87 1.87 0 0 0 0-3.74Zm5.36 4.98H7.6V20h3.22v-5.78c0-1.52.29-2.99 2.17-2.99c1.85 0 1.87 1.73 1.87 3.08V20h3.22v-6.4c0-3.14-.67-5.55-4.34-5.55a3.8 3.8 0 0 0-3.43 1.88h-.04l.42-.95Z"
      />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center" aria-label="Thrive home">
          <img
            src={thriveLogo}
            alt="Thrive"
            className="h-[38px] w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/about" className={desktopNavItem}>
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button type="button" className={desktopNavItem}>
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 translate-y-[0.5px]" />
            </button>

            {svcOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="bg-card border border-border rounded-2xl shadow-xl py-3 min-w-[260px]">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block cursor-pointer px-5 py-2.5 text-[0.72rem] hover:bg-coral-soft hover:text-coral transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/foundry" className={desktopNavItem}>
            Foundry
          </Link>

          <Link to="/get-help" className={desktopNavItem}>
            Get Help
          </Link>

          <Link to="/contact" className={desktopNavItem}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 pr-4 mr-1 border-r border-border/70">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={socialButton}
                aria-label={social.label}
                title={social.label}
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>

          <Link
            to="/donate"
            className="hidden sm:inline-flex cursor-pointer items-center rounded-full bg-coral px-7 py-3 text-[0.78rem] tracking-[0.18em] uppercase font-semibold text-primary-foreground shadow-sm hover:bg-coral/90 transition-colors"
          >
            Donate
          </Link>

          <button
            className="lg:hidden cursor-pointer p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm tracking-[0.15em] uppercase font-medium">
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <div className="pl-2 border-l-2 border-coral-soft flex flex-col gap-3">
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="text-xs"
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <Link to="/foundry" onClick={() => setOpen(false)}>
              Foundry
            </Link>

            <Link to="/get-help" onClick={() => setOpen(false)}>
              Get Help
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="text-coral"
            >
              Donate
            </Link>

            <div className="pt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={socialButton}
                  aria-label={social.label}
                  title={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream/85 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono-label text-cream/55 mb-5">
            Land Acknowledgement
          </p>

          <p className="text-[0.95rem] leading-relaxed text-cream/75 max-w-xl">
            Our Thrive team acknowledges that our agency stands and works on the
            unceded territory of the Lək̓ʷəŋən people and the Songhees and
            Esquimalt Nations. We also acknowledge the five W̱SÁNEĆ communities,
            as well as the Sc'ianew, T'Sou-ke, and Pacheedaht Nations and the
            Spune'laxutth' tribe where our work extends.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-5 mb-6">
            <div className="h-px flex-1 bg-coral/60" />
            <p className="serif-italic text-2xl text-cream">
              All are welcome here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <div>
              <p className="font-mono-label text-cream/55 mb-3">Contact</p>

              <a
                href="mailto:info@thrivevictoria.org"
                className="block text-sm hover:text-coral"
              >
                info@thrivevictoria.org
              </a>

              <p className="text-sm text-cream/55 mt-2">
                Victoria, British Columbia
              </p>
            </div>

            <div>
              <p className="font-mono-label text-cream/55 mb-3">Quick Links</p>

              <Link to="/get-help" className="block text-sm hover:text-coral">
                Get Help
              </Link>

              <Link to="/donate" className="block text-sm hover:text-coral">
                Donate
              </Link>

              <Link to="/contact" className="block text-sm hover:text-coral">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} Thrive Social Services Society. CARF
            Accredited since 2004.
          </p>

          <p className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-coral" />
            Strength-based since the 1980s.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="block w-8 h-px bg-coral" />
      <span className="font-mono-label">{children}</span>
    </div>
  );
}