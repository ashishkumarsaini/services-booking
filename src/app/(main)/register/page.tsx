import Link from "next/link";
import { Surface } from "../../components/ui";

export default function RegisterPage() {
  return (
    <section className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1fr]">
      <Surface className="p-6">
        <h1 className="text-3xl font-semibold text-[#111827]">
          Create your account
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Register as a customer, a service provider, or both. The selected role
          can drive onboarding after backend auth is connected.
        </p>
        <form className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-[#111827]">
              First name
              <input className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#111827]">
              Last name
              <input className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-medium text-[#111827]">
            Email
            <input
              type="email"
              className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#111827]">
            Password
            <input
              type="password"
              className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]"
            />
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="rounded-md border border-[#24483b] bg-[#eef6f1] p-4">
              <input
                type="radio"
                name="role"
                defaultChecked
                className="accent-[#24483b]"
              />
              <span className="ml-3 text-sm font-semibold text-[#111827]">
                Customer
              </span>
              <span className="mt-2 block text-xs leading-5 text-slate-600">
                Book and manage trusted services.
              </span>
            </label>
            <label className="rounded-md border border-slate-200 bg-white p-4">
              <input type="radio" name="role" className="accent-[#24483b]" />
              <span className="ml-3 text-sm font-semibold text-[#111827]">
                Service provider
              </span>
              <span className="mt-2 block text-xs leading-5 text-slate-600">
                Publish services and accept bookings.
              </span>
            </label>
          </div>
          <button className="min-h-12 rounded-md bg-[#24483b] text-sm font-semibold text-white">
            Create account
          </button>
          <p className="text-center text-sm text-slate-600">
            Already registered?{" "}
            <Link href="/login" className="font-semibold text-[#24483b]">
              Login
            </Link>
          </p>
        </form>
      </Surface>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#24483b]">
          Join the marketplace
        </p>
        <h2 className="mt-4 max-w-2xl text-5xl font-semibold tracking-tight text-[#111827]">
          A single onboarding path for people who book and people who sell
          services.
        </h2>
        <div className="mt-8 grid gap-4">
          {[
            "Customer dashboard with saved and upcoming services.",
            "Provider dashboard with listings, metrics, and booking requests.",
            "Mock-ready UI that can connect to authentication and database models.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-md border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
