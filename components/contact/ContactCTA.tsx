import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { chrome } from "@/content/chrome";
import { site } from "@/content/site";
import type { ContactService } from "@/lib/contact-inquiry";
import { getLocale } from "@/lib/locale.server";

type ContactCTAProps = {
  id?: string;
  label: string;
  title: string;
  description: string;
  variant?: "light" | "dark" | "brand" | "landing";
  service?: ContactService;
};

export async function ContactCTA({
  id = "contacto",
  label,
  title,
  description,
  variant = "light",
  service,
}: ContactCTAProps) {
  const ui = chrome[await getLocale()];
  const isLanding = variant === "landing" || variant === "brand";
  const isDark = variant === "dark";
  const onColor = isLanding || isDark;

  return (
    <section
      id={id}
      className={
        isLanding
          ? "bg-slate-accent px-margin-mobile py-12 text-surface md:px-margin md:py-14"
          : isDark
            ? "bg-stone px-margin-mobile py-12 text-white md:px-margin md:py-14"
            : "border-t border-outline/15 bg-sand-container px-margin-mobile py-12 text-ink-primary md:px-margin md:py-14"
      }
    >
      <div className="mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-12 lg:gap-10">
        <div className={onColor ? "text-white lg:col-span-4" : "lg:col-span-4"}>
          <span
            className={
              isLanding
                ? "mb-2 block text-label-uppercase text-primary-fixed"
                : "mb-2 block text-label-uppercase text-warm-label"
            }
          >
            {label}
          </span>
          <h2 className={`text-headline-sm mb-3 ${onColor ? "text-white" : ""}`}>{title}</h2>
          <p
            className={
              onColor
                ? "mb-4 text-body-sm font-light text-surface/90"
                : "mb-4 text-body-sm text-on-surface-variant"
            }
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-body-sm">
            <a
              href={site.phoneHref}
              className={onColor ? "hover:text-primary-fixed" : "hover:text-slate-deep"}
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className={onColor ? "hover:text-primary-fixed" : "hover:text-slate-deep"}
            >
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={
                onColor
                  ? "inline-flex items-center gap-1.5 hover:text-primary-fixed"
                  : "inline-flex items-center gap-1.5 hover:text-slate-deep"
              }
            >
              <WhatsAppIcon branded className="h-4 w-4" />
              {ui.whatsapp}
            </a>
          </div>
        </div>

        <div
          className={
            isLanding
              ? "rounded-editorial bg-sand-container p-4 text-ink-primary sm:p-5 lg:col-span-8"
              : "rounded-editorial border border-outline/10 bg-cream-base p-4 sm:p-5 lg:col-span-8"
          }
        >
          <ContactForm variant={isLanding ? "landing" : "default"} service={service} />
        </div>
      </div>
    </section>
  );
}
