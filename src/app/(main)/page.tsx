import { CategoryCard, ServiceCard } from "../components/cards";
import { ButtonLink, SectionHeader, Surface } from "../components/ui";
import {
  categories,
  faqs,
  providers,
  services,
  testimonials,
  tickerItems,
  workSteps,
} from "../mocks/data";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const newServices = services.slice(2, 5);

  return (
    <div className="bg-white">
      <section className="bg-[#eaf3ee]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex rounded-sm bg-white px-3 py-2 text-xs font-black text-[#111827] shadow-sm">
              Freelance Marketplace
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-[#111827] md:text-6xl">
              On-Demand <span className="text-[#24483b]">Services</span> for
              Your Every Need
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Connect with skilled professionals, receive verified proposals,
              browse trusted local service providers, read reviews, and compare
              prices.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/category">Explore Services</ButtonLink>
              <ButtonLink href="/register" variant="secondary">
                Start Selling
              </ButtonLink>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((item) => (
                  <span
                    key={item}
                    className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#24483b] text-xs font-black text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-black text-[#111827]">4.8/5</p>
                <p className="text-xs text-slate-500">
                  Trusted by 10,000 customers
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <div className="absolute right-6 top-5 h-72 w-72 rounded-full bg-[#24483b]" />
            <div className="absolute right-0 top-12 h-[340px] w-[300px] rounded-md border-[10px] border-white bg-gradient-to-br from-slate-100 via-white to-emerald-100 shadow-2xl">
              <div className="absolute bottom-8 left-8 right-8 rounded-md bg-white p-4 shadow-lg">
                <p className="text-xs font-black text-[#111827]">Top seller</p>
                <p className="mt-1 text-xs text-slate-500">
                  Fast response, verified identity, 4.9 rating
                </p>
              </div>
            </div>
            <div className="absolute left-8 top-24 rounded-md bg-white p-4 shadow-xl">
              <p className="text-xs font-black text-[#111827]">Trustpilot</p>
              <p className="mt-1 text-sm font-black text-[#24483b]">
                Excellent
              </p>
              <p className="text-xs text-slate-500">Based on 456 reviews</p>
            </div>
            <div className="absolute right-64 top-2 flex size-20 items-center justify-center rounded-full bg-[#111827] text-center text-[10px] font-black uppercase text-white">
              Verified Expert
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-10 max-w-5xl px-5 pb-10">
          <Surface className="p-3 shadow-xl">
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
              {["Category", "Location", "Keyword"].map((label) => (
                <label
                  key={label}
                  className="grid gap-1 rounded-md px-4 py-3 text-xs font-black text-[#111827]"
                >
                  {label}
                  <input
                    placeholder={label === "Location" ? "Enter Location" : "Select"}
                    className="text-sm font-medium text-slate-500 outline-none"
                  />
                </label>
              ))}
              <button className="min-h-14 rounded-full bg-[#050505] px-6 text-sm font-black text-white">
                Search
              </button>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeader
          eyebrow="Popular Categories"
          title="Unlock a world of opportunities and take control of your future"
          align="center"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionHeader
            eyebrow="Featured Services for You"
            title="Unlock a world of opportunities and take control of your future"
            align="center"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/category" variant="secondary">
              View All Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="How it Works"
            title="Focusing on the positive experience of buying and selling"
          />
          <div className="mt-8 grid gap-4">
            {workSteps.map((step) => (
              <Surface key={step.id} className="flex gap-4 p-4">
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-md text-lg font-black ${step.color}`}
                >
                  {step.id}
                </span>
                <div>
                  <h3 className="font-black text-[#111827]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              </Surface>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {["from-emerald-100", "from-emerald-100", "from-sky-100", "from-rose-100"].map(
            (tone, index) => (
              <div
                key={tone}
                className={`min-h-44 rounded-md bg-gradient-to-br ${tone} via-white to-slate-100 p-5 shadow-sm ${
                  index === 1 ? "mt-10" : ""
                } ${index === 2 ? "-mt-6" : ""}`}
              >
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#24483b]">
                  Step {index + 1}
                </span>
              </div>
            ),
          )}
        </div>
      </section>

      <div className="overflow-hidden bg-[#050505] py-4 text-white">
        <div className="flex min-w-max gap-8 text-sm font-black">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8">
              {item}
              <span className="text-[#24483b]">+</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeader
          eyebrow="Our New Services"
          title="Unlock a world of opportunities and take control of your future"
          align="center"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {newServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionHeader
            eyebrow="Meet the Next Generation of Masterful Providers"
            title="Connect with the next wave of expert service professionals"
            align="center"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {providers.map((provider) => (
              <Surface key={provider.name} className="p-5 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#eaf3ee] text-sm font-black text-[#24483b]">
                  {provider.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <h3 className="mt-4 font-black text-[#111827]">
                  {provider.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{provider.role}</p>
                <p className="mt-3 text-xs font-bold text-[#24483b]">
                  {provider.country} - Total Gigs: {provider.gigs}
                </p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl font-black">
              What Makes <span className="text-[#24483b]">Servana</span>{" "}
              Different
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Local expertise, fast service, and a clean marketplace system that
              lets buyers compare confidently and sellers manage work with less
              friction.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["01", "Trusted Services"],
              ["02", "Transparent Pricing"],
              ["03", "Verified Users"],
            ].map(([number, title]) => (
              <div key={title} className="rounded-md bg-white p-5 text-[#111827]">
                <p className="text-3xl font-black text-slate-200">{number}</p>
                <h3 className="mt-6 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Browse, compare, and book with clear details before checkout.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Happy Students Say About Our Services"
              title="Real feedback from service buyers"
            />
            <p className="mt-5 text-sm text-slate-500">
              We have 120K global customers using marketplace-style workflows.
            </p>
          </div>
          <div className="grid gap-5">
            {testimonials.map((testimonial) => (
              <Surface key={testimonial.name} className="p-5">
                <p className="text-sm leading-7 text-slate-600">
                  {testimonial.quote}
                </p>
                <p className="mt-4 font-black text-[#111827]">
                  {testimonial.name}
                </p>
                <p className="text-xs font-bold text-[#24483b]">5.0 rating</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid overflow-hidden rounded-lg bg-[#24483b] text-white md:grid-cols-[1fr_1.2fr]">
          <div className="min-h-56 bg-gradient-to-br from-emerald-200 via-white/30 to-emerald-700" />
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-black">
              Find the right service for your needs
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Over 745 listings of gigs available today for you.
            </p>
            <div className="mt-6">
              <ButtonLink href="/category" variant="secondary">
                View All Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid grid-cols-2 gap-4">
          {["from-cyan-100", "from-emerald-100", "from-lime-100", "from-sky-100"].map(
            (tone) => (
              <div
                key={tone}
                className={`min-h-40 rounded-md bg-gradient-to-br ${tone} via-white to-slate-100 shadow-sm`}
              />
            ),
          )}
        </div>
        <div>
          <SectionHeader
            eyebrow="Your Frequently Added Questions"
            title="Do not find the answer? We can help you"
          />
          <div className="mt-8 grid gap-3">
            {faqs.map((faq, index) => (
              <Surface key={faq} className="flex items-center gap-4 p-4">
                <span className="text-xs font-black text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="flex-1 text-sm font-bold text-[#111827]">{faq}</p>
                <span className="text-slate-400">+</span>
              </Surface>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
