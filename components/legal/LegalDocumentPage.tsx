import { CookieSettingsLink } from "@/components/consent/CookieSettingsLink";
import { LegalRelatedLinks } from "@/components/legal/LegalRelatedLinks";
import { PageIntro } from "@/components/shared/PageIntro";

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
    <article className="bg-cream-base pb-space-2xl text-ink-primary">
      <PageIntro label={label} title={title} description={intro}>
        {showCookieSettings ? (
          <p className="mt-6">
            <CookieSettingsLink className="text-label-uppercase text-primary underline underline-offset-4 hover:text-slate-deep">
              Configurar cookies
            </CookieSettingsLink>
          </p>
        ) : null}
      </PageIntro>
      <div className="mx-auto w-full max-w-7xl px-margin-mobile md:px-margin">
        <div className="max-w-3xl space-y-10 border-t border-outline-variant/30 pt-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-headline-sm text-ink-primary">{section.heading}</h2>
              <p className="mt-3 text-body-md font-light text-on-surface-variant">
                {section.body}
              </p>
            </section>
          ))}
          {currentPath ? <LegalRelatedLinks currentPath={currentPath} /> : null}
        </div>
      </div>
    </article>
  );
}
