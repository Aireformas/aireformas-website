import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

type ContactCTAProps = {
  id?: string;
  label: string;
  title: string;
  description: string;
  variant?: "light" | "dark";
};

export function ContactCTA({
  id = "contacto",
  label,
  title,
  description,
  variant = "light",
}: ContactCTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={
        isDark
          ? "section-y bg-stone text-white"
          : "section-y border-t border-ink/8 bg-paper-warm text-ink"
      }
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel variant={isDark ? "dark" : "light"}>{label}</SectionLabel>
            <InView>
              <h2 className="heading-display text-title-section mt-8">{title}</h2>
            </InView>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-current/60">
              {description}
            </p>
            <ul className="mt-8 space-y-2 text-sm text-current/70">
              <li>
                <a href={site.phoneHref} className="hover:text-accent">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              isDark
                ? "lg:col-span-7 rounded-[var(--radius-card)] bg-paper p-6 text-ink shadow-[0_24px_64px_-32px_rgba(27,44,74,0.35)] sm:p-8 lg:p-10"
                : "lg:col-span-7 rounded-[var(--radius-card)] border border-ink/10 border-t-2 border-t-accent bg-paper p-6 text-ink shadow-[0_28px_72px_-36px_rgba(27,44,74,0.28)] sm:p-8 lg:p-10"
            }
          >
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
