import Link from "next/link";
import { ButtonLink } from "./ui";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/category", label: "Gigs" },
  { href: "/about", label: "Pages" },
  { href: "/profile", label: "My Services" },
  { href: "/provider/dashboard", label: "Dashboard" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="bg-[#07111f] px-5 py-2 text-center text-xs font-semibold text-white">
        Find the best instant services marketplace
      </div>
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#24483b] text-sm font-black text-white">
              S
            </span>
            <span className="text-base font-black text-[#111827]">Servana</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#24483b]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-[#111827] transition hover:border-[#24483b] hover:text-[#24483b] sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="rounded-md bg-[#24483b] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#1d3a31]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto -mb-10 max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-5 rounded-lg bg-[#050505] px-6 py-7 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black">Start As Seller</h2>
            <p className="mt-2 text-sm text-white/65">
              Launch your seller profile today and manage every booking in one place.
            </p>
          </div>
          <ButtonLink href="/register">Join with us</ButtonLink>
        </div>
      </div>
      <div className="bg-[#fafafa] pt-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#24483b] text-sm font-black text-white">
                S
              </span>
              <span className="font-black text-[#111827]">Servana</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              A practical marketplace for customers to find expert services and
              for sellers to grow with organized bookings.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-black text-[#111827]">Company</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-500">
              <Link href="/about">About us</Link>
              <Link href="/category">Categories</Link>
              <Link href="/profile">My services</Link>
              <Link href="/login">Login</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-[#111827]">Categories</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-500">
              <Link href="/category/home-care">Home Care</Link>
              <Link href="/category/business">Business</Link>
              <Link href="/category/design">Design</Link>
              <Link href="/category/events">Photography</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-[#111827]">Contact us</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-500">
              <p>367 Hillcrest Lane, Irvine, California</p>
              <p>+1 987 654 3210</p>
              <p>hello@servana.example</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-5">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>Copyright © 2026 Servana. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/about">Privacy Policy</Link>
              <Link href="/about">Terms & Conditions</Link>
              <Link href="/about">Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
