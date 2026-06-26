import { notFound } from "next/navigation";
import { ServiceCard } from "../../../components/cards";
import { ButtonLink, SectionHeader, Surface } from "../../../components/ui";
import {
  categories,
  getCategory,
  getServicesByCategory,
} from "../../../mocks/data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryServicesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryServices = getServicesByCategory(category.slug);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <ButtonLink href="/category" variant="ghost">
            Back to categories
          </ButtonLink>
          <div className="mt-8">
            <SectionHeader
              eyebrow="Category services"
              title={category.name}
              description={category.description}
            />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[280px_1fr]">
        <Surface className="h-max p-5">
          <h2 className="text-base font-semibold text-[#111827]">Refine</h2>
          <div className="mt-5 grid gap-4">
            {["Verified providers", "Available this week", "Highly rated"].map(
              (filter) => (
                <label
                  key={filter}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <input type="checkbox" className="size-4 accent-[#24483b]" />
                  {filter}
                </label>
              ),
            )}
          </div>
          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-sm font-medium text-[#111827]">Price range</p>
            <input
              type="range"
              min="25"
              max="500"
              className="mt-4 w-full accent-[#24483b]"
            />
          </div>
        </Surface>
        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              Showing {categoryServices.length} services
            </p>
            <select className="min-h-10 rounded-md border border-slate-200 bg-white px-3 text-sm">
              <option>Recommended</option>
              <option>Price low to high</option>
              <option>Highest rated</option>
            </select>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {categoryServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
