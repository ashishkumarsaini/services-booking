import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "../components/site-shell";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
