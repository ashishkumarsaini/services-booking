import Link from "next/link";
import { Surface } from "../../components/ui";

export default function LoginPage() {
  return (
    <section className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_440px]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#24483b]">
          Welcome back
        </p>
        <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-tight text-[#111827]">
          Sign in to manage bookings, saved services, and provider requests.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          One account can book as a customer and operate as a provider when the
          business profile is enabled.
        </p>
      </div>
      <Surface className="p-6">
        <h2 className="text-2xl font-semibold text-[#111827]">Login</h2>
        <form className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-[#111827]">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#111827]">
            Password
            <input
              type="password"
              placeholder="Enter password"
              className="min-h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-[#24483b]"
            />
          </label>
          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="accent-[#24483b]" />
              Remember me
            </label>
            <Link href="/register" className="font-semibold text-[#24483b]">
              Create account
            </Link>
          </div>
          <button className="min-h-12 rounded-md bg-[#24483b] text-sm font-semibold text-white">
            Sign in
          </button>
        </form>
      </Surface>
    </section>
  );
}
