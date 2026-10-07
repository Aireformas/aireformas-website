import { CookieSettingsLink } from "@/components/consent/CookieSettingsLink";
import { LegalRelatedLinks } from "@/components/legal/LegalRelatedLinks";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type LegalSection = {
  heading: string;
  body: string;
};

type LegalDocumentPageProps = {
  label: string;
  title: string;
  intro: string;
  sections: readonly LegalSection[];
  showCookieSettings?: boolean;
  currentPath?: string;
};

export function LegalDocumentPage({
  label,
  title,
  intro,
  sections,
  showCookieSettings = false,
  currentPath,
}: LegalDocumentPageProps) {
  return (
    <article className="bg-paper pb-20 pt-28 text-ink md:pb-28 md:pt-32">
      <Container className="max-w-2xl">
        <SectionLabel variant="light">{label}</SectionLabel>
        <h1 className="heading-display text-title-page mt-8">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">{intro}</p>
        {showCookieSettings ? (
          <p className="mt-4">
            <CookieSettingsLink className="text-sm font-medium underline underline-offset-2 hover:text-ink/80">
              Configurar cookies
            </CookieSettingsLink>
          </p>
        ) : null}
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="heading-editorial text-xl uppercase tracking-[0.12em]">
                {section.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">{section.body}</p>
            </section>
          ))}
        </div>
        {currentPath ? <LegalRelatedLinks currentPath={currentPath} /> : null}
      </Container>
    </article>
  );
}
