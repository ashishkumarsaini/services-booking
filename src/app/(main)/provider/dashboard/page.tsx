import { MetricCard } from "../../../components/cards";
import { SectionHeader, Surface } from "../../../components/ui";
import { bookings, providerMetrics, services } from "../../../mocks/data";

export default function ProviderDashboardPage() {
  const providerServices = services.slice(0, 4);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <SectionHeader
            eyebrow="Provider dashboard"
            title="Manage services, orders, and performance"
            description="A service provider workspace for tracking bookings, listings, revenue, and customer requests."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {providerMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <Surface className="p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-[#111827]">
                Recent booking requests
              </h2>
              <button className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-[#24483b]">
                Export
              </button>
            </div>
            <div className="mt-5 overflow-hidden rounded-md border border-slate-200">
              <div className="grid grid-cols-4 bg-[#f7f7f7] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                <span>Customer</span>
                <span>Service</span>
                <span>Date</span>
                <span>Status</span>
              </div>
              {bookings.map((booking) => (
                <div
                  key={`${booking.customer}-${booking.date}`}
                  className="grid grid-cols-4 gap-3 border-t border-slate-200 px-4 py-4 text-sm"
                >
                  <span className="font-medium text-[#111827]">
                    {booking.customer}
                  </span>
                  <span className="text-slate-600">{booking.service}</span>
                  <span className="text-slate-600">{booking.date}</span>
                  <span className="font-semibold text-[#24483b]">
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </Surface>
          <Surface className="p-5">
            <h2 className="text-xl font-semibold text-[#111827]">
              Create service
            </h2>
            <form className="mt-5 grid gap-4">
              <input
                placeholder="Service title"
                className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]"
              />
              <select className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]">
                <option>Home Care</option>
                <option>Beauty & Wellness</option>
                <option>Events</option>
                <option>Business</option>
              </select>
              <input
                placeholder="Starting price"
                className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]"
              />
              <textarea
                rows={4}
                placeholder="Describe the service"
                className="rounded-md border border-slate-200 px-3 py-3 text-sm outline-none focus:border-[#24483b]"
              />
              <button className="min-h-11 rounded-md bg-[#24483b] px-4 text-sm font-semibold text-white">
                Save draft
              </button>
            </form>
          </Surface>
        </div>
        <Surface className="mt-8 p-5">
          <h2 className="text-xl font-semibold text-[#111827]">My listings</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {providerServices.map((service) => (
              <div
                key={service.slug}
                className="flex items-center justify-between gap-4 rounded-md border border-slate-200 p-4"
              >
                <div>
                  <p className="font-semibold text-[#111827]">{service.title}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {service.rating} rating - ${service.price}
                  </p>
                </div>
                <button className="rounded-md bg-[#f7f7f7] px-4 py-2 text-sm font-semibold text-[#24483b]">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </Surface>
      </section>
    </div>
  );
}
