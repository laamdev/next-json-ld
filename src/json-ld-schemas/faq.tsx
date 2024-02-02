import { FAQPage, WithContext } from "schema-dts";

export const JsonLdFaq = ({ mainEntity }: FAQPage) => {
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};
