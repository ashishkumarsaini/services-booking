import Link from "next/link";
import type { Category, Service } from "../mocks/data";
import { Surface } from "./ui";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/category/${category.slug}`}>
      <Surface className="group h-full p-5 text-center transition hover:-translate-y-1 hover:border-[#24483b] hover:shadow-md">
        <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-slate-100 text-xs font-black text-[#111827] group-hover:bg-[#111827] group-hover:text-white">
          {category.icon}
        </span>
        <h3 className="mt-4 text-sm font-extrabold text-[#111827]">
          {category.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-slate-500">
          {category.serviceCount} Service
        </p>
      </Surface>
    </Link>
  );
}

export function FeaturedCategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/category/${category.slug}`}>
      <Surface className="h-full p-5 transition hover:-translate-y-1 hover:border-[#24483b] hover:shadow-md">
        <div className="flex items-center justify-between gap-4">
          <span className="flex size-11 items-center justify-center rounded-full bg-[#eaf3ee] text-xs font-black text-[#24483b]">
            {category.icon}
          </span>
          <span className={`rounded-md px-3 py-1 text-xs font-bold ${category.accent}`}>
            {category.serviceCount}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-extrabold text-[#111827]">
          {category.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {category.description}
        </p>
      </Surface>
    </Link>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Surface className="overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`relative h-48 bg-gradient-to-br ${service.imageTone}`}>
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-sm bg-[#24483b] px-2 py-1 text-[10px] font-black text-white">
            Featured
          </span>
          <span className="rounded-sm bg-emerald-700 px-2 py-1 text-[10px] font-black text-white">
            {service.level}
          </span>
        </div>
        <div className="absolute right-3 top-3 flex gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-white text-xs text-slate-500 shadow">
            S
          </span>
          <span className="flex size-7 items-center justify-center rounded-full bg-white text-xs text-slate-500 shadow">
            A
          </span>
        </div>
        <div className="absolute inset-x-8 bottom-6 h-20 rounded-full bg-white/35 blur-2xl" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold text-slate-500">
          <span>{service.categorySlug.replace("-", " & ")}</span>
          <span className="text-emerald-700">
            {service.rating} rating ({service.reviews})
          </span>
        </div>
        <h3 className="mt-3 min-h-12 text-base font-extrabold leading-6 text-[#111827]">
          {service.title}
        </h3>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#24483b] text-xs font-black text-white">
              {service.provider
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </span>
            <div>
              <p className="text-xs font-bold text-[#111827]">{service.provider}</p>
              <p className="text-[11px] text-slate-500">{service.location}</p>
            </div>
          </div>
          <p className="text-right text-base font-black text-[#111827]">
            ${service.price}
          </p>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="mt-4 inline-flex w-full items-center justify-between rounded-md border border-slate-200 px-4 py-3 text-xs font-bold text-slate-600 transition hover:border-[#24483b] hover:text-[#24483b]"
        >
          View details
          <span>{service.delivery}</span>
        </Link>
      </div>
    </Surface>
  );
}

export function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Surface className="p-5">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-black tracking-tight text-[#111827]">
        {value}
      </p>
      <p className="mt-2 text-sm font-semibold text-[#24483b]">{detail}</p>
    </Surface>
  );
}
