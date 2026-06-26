import { Service } from "../mocks/data";
import { Surface } from "./ui";

export function BookingPanel({ service }: { service: Service }) {
  return (
    <Surface className="p-5 lg:sticky lg:top-24">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <p className="text-sm text-slate-500">Starting at</p>
          <p className="mt-1 text-3xl font-semibold text-[#111827]">
            ${service.price}
          </p>
        </div>
        <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#24483b]">
          Available
        </span>
      </div>
      <form className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-[#111827]">
          Date
          <input
            type="date"
            className="min-h-11 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#24483b]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#111827]">
          Time
          <select className="min-h-11 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#24483b]">
            <option>10:00 AM</option>
            <option>12:30 PM</option>
            <option>3:00 PM</option>
            <option>6:00 PM</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#111827]">
          Address or meeting link
          <textarea
            rows={4}
            placeholder="Add booking details"
            className="rounded-md border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#24483b]"
          />
        </label>
        <button className="min-h-12 rounded-md bg-[#24483b] px-4 text-sm font-semibold text-white transition hover:bg-[#1d3a31]">
          Request booking
        </button>
      </form>
      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        You will not be charged until the provider confirms the booking.
      </p>
    </Surface>
  );
}
