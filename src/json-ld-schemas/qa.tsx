import { QAPage, WithContext } from "schema-dts";

export const JsonLdQa = ({ mainEntity }: QAPage) => {
  const qaSchema: WithContext<QAPage> = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }}
    />
  );
};
