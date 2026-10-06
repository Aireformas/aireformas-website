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
          ? "section-y bg-brand-secondary text-white"
          : "section-y border-t border-ink/5 bg-paper text-ink"
      }
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel variant={isDark ? "dark" : "light"}>{label}</SectionLabel>
            <InView>
              <h2 className="heading-display text-title-section mt-6">
                {title}
              </h2>
            </InView>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-current/70">
              {description}
            </p>
            <ul className="mt-8 space-y-2 text-sm text-current/80">
              <li>
                <a href={site.phoneHref} className="hover:underline">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              isDark
                ? "rounded-[var(--radius-card)] bg-paper p-6 text-ink sm:p-8"
                : "rounded-[var(--radius-card)] border border-ink/8 bg-paper p-6 sm:p-8"
            }
          >
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
