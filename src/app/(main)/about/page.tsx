import { SectionHeader, Surface } from "../../components/ui";

const values = [
  "Transparent booking details before a provider accepts work.",
  "Simple tools for providers to manage services, orders, and reviews.",
  "A calm interface that helps customers make confident decisions.",
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <SectionHeader
            eyebrow="About us"
            title="A marketplace built around trust, clarity, and repeatable service work."
            description="Servana is a mock service booking product designed for local commerce: customers can discover skilled providers, and providers can turn demand into organized bookings."
          />
          <Surface className="p-6">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                ["450+", "Providers"],
                ["12k", "Bookings"],
                ["4.8", "Average rating"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md bg-[#f7f7f7] p-4">
                  <p className="text-2xl font-semibold text-[#24483b]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value, index) => (
            <Surface key={value} className="p-6">
              <span className="flex size-10 items-center justify-center rounded-md bg-[#eaf3ee] text-sm font-semibold text-[#24483b]">
                {index + 1}
              </span>
              <p className="mt-6 leading-7 text-slate-700">{value}</p>
            </Surface>
          ))}
        </div>
      </section>
      <section className="bg-[#24483b]">
        <div className="mx-auto max-w-7xl px-5 py-14 text-white">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight">
            We help local service work feel as organized as modern ecommerce.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/75">
            The product is structured for real marketplace growth: categories,
            listings, booking requests, customer profiles, and provider
            operations can all connect to backend services later.
          </p>
        </div>
      </section>
    </div>
  );
}
