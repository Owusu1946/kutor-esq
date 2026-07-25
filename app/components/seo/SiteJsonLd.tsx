const SITE = "https://www.wonderkutor.com";
const OG_IMAGE = `${SITE}/seo/og-1200x630.jpg`;

const graph = [
  {
    "@type": "WebSite" as const,
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "Wonder Victor Kutor, Esq.",
    description:
      "Official website of Wonder Victor Kutor, Esq. — Ghanaian legal practitioner, author of ‘The Immigration Formulae’, and public servant.",
    publisher: { "@id": `${SITE}/#person` },
    inLanguage: "en-GH",
  },
  {
    "@type": "Person" as const,
    "@id": `${SITE}/#person`,
    name: "Wonder Victor Kutor",
    alternateName: [
      "Wonder Kutor",
      "Wonder Victor Kutor, Esq.",
      "Wonder Victor Kutor Esq.",
      "Wonder Victor Kutor lawyer",
    ],
    url: SITE,
    jobTitle: "Barrister and Solicitor of the Superior Courts of Judicature of Ghana",
    description:
      "Wonder Victor Kutor, Esq. is a Ghanaian lawyer (barrister and solicitor), author, and public servant. This site documents his education, publications including ‘The Immigration Formulae’, and professional milestones.",
    image: {
      "@type": "ImageObject" as const,
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      caption:
        "Wonder Victor Kutor, Esq. in barrister’s wig and gown — Ghana School of Law.",
    },
    nationality: {
      "@type": "Country" as const,
      name: "Ghana",
    },
    alumniOf: {
      "@type": "EducationalOrganization" as const,
      name: "Ghana School of Law",
    },
    knowsAbout: [
      "Ghana law",
      "Legal practice",
      "Immigration law",
      "Public service",
      "Legal authorship",
      "Barrister and solicitor practice",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": graph,
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
