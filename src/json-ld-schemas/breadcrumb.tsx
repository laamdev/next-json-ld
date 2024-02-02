import { BreadcrumbList, WithContext } from "schema-dts";

export const JsonLdBreadcrumb = ({ itemListElement }: BreadcrumbList) => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};
