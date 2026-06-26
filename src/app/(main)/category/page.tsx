import { CategoryCard, ServiceCard } from "../../components/cards";
import { SectionHeader, Surface } from "../../components/ui";
import { categories, services } from "../../mocks/data";

export default function CategoryPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <SectionHeader
            eyebrow="Categories"
            title="Explore every service lane"
            description="Browse the marketplace by customer need, then open a category to compare providers and book."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <Surface className="p-5">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto_auto] md:items-end">
            <label className="grid gap-2 text-sm font-medium text-[#111827]">
              Search service
              <input
                placeholder="Cleaning, photography, makeup..."
                className="min-h-11 rounded-md border border-slate-200 px-3 outline-none focus:border-[#24483b]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#111827]">
              Location
              <select className="min-h-11 rounded-md border border-slate-200 px-3 outline-none focus:border-[#24483b]">
                <option>Any location</option>
                <option>Citywide</option>
                <option>Remote</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#111827]">
              Budget
              <select className="min-h-11 rounded-md border border-slate-200 px-3 outline-none focus:border-[#24483b]">
                <option>Any budget</option>
                <option>Under $100</option>
                <option>$100-$250</option>
              </select>
            </label>
            <button className="min-h-11 rounded-md bg-[#24483b] px-5 text-sm font-semibold text-white">
              Filter
            </button>
          </div>
        </Surface>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
