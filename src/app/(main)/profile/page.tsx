import { ServiceCard } from "../../components/cards";
import { SectionHeader, Surface } from "../../components/ui";
import { bookings, services } from "../../mocks/data";

export default function ProfilePage() {
  const savedServices = services.slice(0, 3);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <SectionHeader
              eyebrow="Profile"
              title="My services and bookings"
              description="A customer profile view with saved services, active bookings, and account details ready for real data later."
            />
            <Surface className="p-5">
              <p className="text-sm text-slate-500">Customer</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
                Ash Saini
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                8 completed bookings since March
              </p>
            </Surface>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-2xl font-semibold text-[#111827]">
            My services
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {savedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
        <div className="grid h-max gap-5">
          <Surface className="p-5">
            <h2 className="text-lg font-semibold text-[#111827]">
              Upcoming bookings
            </h2>
            <div className="mt-5 grid gap-4">
              {bookings.slice(0, 2).map((booking) => (
                <div
                  key={`${booking.customer}-${booking.service}`}
                  className="rounded-md border border-slate-200 p-4"
                >
                  <p className="font-medium text-[#111827]">{booking.service}</p>
                  <p className="mt-1 text-sm text-slate-500">{booking.date}</p>
                  <p className="mt-3 text-xs font-semibold text-[#24483b]">
                    {booking.status}
                  </p>
                </div>
              ))}
            </div>
          </Surface>
          <Surface className="p-5">
            <h2 className="text-lg font-semibold text-[#111827]">
              Account preferences
            </h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-600">
              <label className="flex items-center justify-between gap-4">
                Email booking updates
                <input type="checkbox" defaultChecked className="accent-[#24483b]" />
              </label>
              <label className="flex items-center justify-between gap-4">
                SMS reminders
                <input type="checkbox" className="accent-[#24483b]" />
              </label>
            </div>
          </Surface>
        </div>
      </section>
    </div>
  );
}
