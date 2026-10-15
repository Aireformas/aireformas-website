import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { chrome } from "@/content/chrome";
import { site } from "@/content/site";
import { getLocale } from "@/lib/locale.server";

type ContactCTAProps = {
  id?: string;
  label: string;
  title: string;
  description: string;
  variant?: "light" | "dark" | "brand" | "landing";
};

export async function ContactCTA({
  id = "contacto",
  label,
  title,
  description,
  variant = "light",
}: ContactCTAProps) {
  const ui = chrome[await getLocale()];
  const isLanding = variant === "landing" || variant === "brand";

  if (isLanding) {
    return (
      <section
        id={id}
        className="bg-slate-accent py-space-2xl text-surface px-margin-mobile md:px-margin"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          <div className="text-white lg:col-span-5">
            <span className="mb-3 block text-label-uppercase text-primary-fixed">
              {label}
            </span>
            <h2 className="text-headline-lg mb-6 leading-tight text-white">
              {title}
            </h2>
            <p className="mb-10 max-w-md text-body-lg font-light text-surface/90">
              {description}
            </p>
            <div className="space-y-6 border-t border-white/20 pt-8">
              <div>
                <span className="mb-1 block text-label-uppercase text-surface/70">
                  {ui.phone}
                </span>
                <a
                  href={site.phoneHref}
                  className="text-headline-sm font-light transition-colors hover:text-primary-fixed"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <span className="mb-1 block text-label-uppercase text-surface/70">
                  {ui.email}
                </span>
                <a
                  href={site.emailHref}
                  className="text-headline-sm font-light transition-colors hover:text-primary-fixed"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <span className="mb-1 block text-label-uppercase text-surface/70">
                  WhatsApp
                </span>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-headline-sm font-light transition-colors hover:text-primary-fixed"
                >
                  <WhatsAppIcon branded className="h-5 w-5" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-editorial bg-sand-container p-8 text-ink-primary shadow-2xl md:p-12">
              <ContactForm variant="landing" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={
        isDark
          ? "bg-stone py-space-2xl text-white px-margin-mobile md:px-margin"
          : "border-t border-outline/15 bg-sand-container py-space-2xl text-ink-primary px-margin-mobile md:px-margin"
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-3 block text-label-uppercase text-warm-label">
            {label}
          </span>
          <h2 className="text-headline-lg mb-5">{title}</h2>
          <p className="max-w-md text-body-md text-on-surface-variant">
            {description}
          </p>
        </div>
        <div className="rounded-editorial border border-outline/10 bg-cream-base p-8 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
