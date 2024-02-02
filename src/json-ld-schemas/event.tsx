import { Event, WithContext } from "schema-dts";

export const JsonLdEvent = ({
  name,
  startDate,
  endDate,
  eventAttendanceMode,
  eventStatus,
  location,
  image,
  description,
  offers,
  performer,
  organizer,
}: Event) => {
  const faqSchema: WithContext<Event> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: name,
    startDate: startDate,
    endDate: endDate,
    eventAttendanceMode: eventAttendanceMode,
    eventStatus: eventStatus,
    location: location,
    image: image,
    description: description,
    offers: offers,
    performer: performer,
    organizer: organizer,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};
