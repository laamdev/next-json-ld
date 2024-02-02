import { Product, WithContext } from "schema-dts";

export const JsonLdProduct = ({
  name,
  description,
  review,
  aggregateRating,
}: Product) => {
  const productSchema: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    review: review,
    aggregateRating: aggregateRating,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
};
