import { notFound } from "next/navigation";
import { BookingPanel } from "../../../components/booking-panel";
import { ServiceCard } from "../../../components/cards";
import { Pill, SectionHeader, Surface } from "../../../components/ui";
import { getService, services } from "../../../mocks/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = services
    .filter(
      (item) =>
        item.categorySlug === service.categorySlug && item.slug !== service.slug,
    )
    .slice(0, 2);

  return (
    <div>
      <section className={`bg-gradient-to-br ${service.imageTone}`}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
            <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-[#111827]">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {service.description}
            </p>
            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              <Surface className="p-4">
                <p className="text-sm text-slate-500">Provider</p>
                <p className="mt-2 font-semibold text-[#111827]">
                  {service.provider}
                </p>
              </Surface>
              <Surface className="p-4">
                <p className="text-sm text-slate-500">Rating</p>
                <p className="mt-2 font-semibold text-[#111827]">
                  {service.rating} ({service.reviews})
                </p>
              </Surface>
              <Surface className="p-4">
                <p className="text-sm text-slate-500">Location</p>
                <p className="mt-2 font-semibold text-[#111827]">
                  {service.location}
                </p>
              </Surface>
            </div>
          </div>
          <BookingPanel service={service} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-6">
          <Surface className="p-6">
            <h2 className="text-2xl font-semibold text-[#111827]">
              What is included
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Pre-booking confirmation call",
                "Provider arrival window and notes",
                "Service completion review",
                "Secure booking request record",
              ].map((item) => (
                <div key={item} className="rounded-md bg-[#f7f7f7] p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </Surface>
          <Surface className="p-6">
            <h2 className="text-2xl font-semibold text-[#111827]">
              About the provider
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              {service.provider} is a {service.providerRole.toLowerCase()} with
              a strong track record for reliable communication, clean handoffs,
              and well-scoped service delivery.
            </p>
          </Surface>
        </div>
        <Surface className="h-max p-6">
          <h2 className="text-lg font-semibold text-[#111827]">
            Booking summary
          </h2>
          <dl className="mt-5 grid gap-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Duration</dt>
              <dd className="font-medium text-[#111827]">{service.duration}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Base price</dt>
              <dd className="font-medium text-[#111827]">${service.price}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Reviews</dt>
              <dd className="font-medium text-[#111827]">{service.reviews}</dd>
            </div>
          </dl>
        </Surface>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-7xl px-5 pb-16">
          <SectionHeader title="Related services" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
