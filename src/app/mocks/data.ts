export type Category = {
  slug: string;
  name: string;
  description: string;
  serviceCount: number;
  accent: string;
  icon: string;
};

export type Service = {
  slug: string;
  title: string;
  categorySlug: string;
  provider: string;
  providerRole: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  imageTone: string;
  tags: string[];
  description: string;
  level: string;
  delivery: string;
};

export const categories: Category[] = [
  {
    slug: "home-care",
    name: "Home Care",
    description: "Cleaning, repairs, appliance care, and move-in help.",
    serviceCount: 124,
    accent: "bg-emerald-50 text-[#24483b]",
    icon: "DM",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    description: "Salon, spa, grooming, and fitness appointments.",
    serviceCount: 92,
    accent: "bg-emerald-50 text-[#24483b]",
    icon: "PT",
  },
  {
    slug: "events",
    name: "Events",
    description: "Photography, catering, setup, music, and coordination.",
    serviceCount: 68,
    accent: "bg-emerald-50 text-[#24483b]",
    icon: "PH",
  },
  {
    slug: "business",
    name: "Business",
    description: "Admin support, design, consulting, and local marketing.",
    serviceCount: 77,
    accent: "bg-emerald-50 text-[#24483b]",
    icon: "AI",
  },
  {
    slug: "design",
    name: "Design",
    description: "Brand, graphics, landing pages, and visual systems.",
    serviceCount: 63,
    accent: "bg-emerald-50 text-[#24483b]",
    icon: "DS",
  },
  {
    slug: "marketing-sales",
    name: "Marketing & Sales",
    description: "Campaigns, growth plans, ads, and conversion support.",
    serviceCount: 90,
    accent: "bg-emerald-50 text-[#24483b]",
    icon: "MS",
  },
  {
    slug: "music-audio",
    name: "Music & Audio",
    description: "Voiceover, editing, mixing, and short-form audio.",
    serviceCount: 98,
    accent: "bg-emerald-50 text-[#24483b]",
    icon: "MA",
  },
  {
    slug: "social-media",
    name: "Social Media",
    description: "Content calendars, reels, posts, and channel setup.",
    serviceCount: 125,
    accent: "bg-emerald-50 text-[#24483b]",
    icon: "SM",
  },
];

export const services: Service[] = [
  {
    slug: "deep-home-cleaning",
    title: "Deep Home Cleaning",
    categorySlug: "home-care",
    provider: "Nora Bright Co.",
    providerRole: "Verified cleaning team",
    location: "Downtown",
    price: 89,
    rating: 4.9,
    reviews: 218,
    duration: "3-4 hours",
    imageTone: "from-emerald-100 via-slate-100 to-white",
    tags: ["Supplies included", "Same week", "Eco products"],
    description:
      "Detailed kitchen, bath, living area, and bedroom cleaning with a team lead inspection before handoff.",
    level: "Pro",
    delivery: "Delivery in 1 day",
  },
  {
    slug: "ac-maintenance",
    title: "AC Tune-up & Maintenance",
    categorySlug: "home-care",
    provider: "CoolNest Services",
    providerRole: "Licensed HVAC partner",
    location: "Citywide",
    price: 59,
    rating: 4.8,
    reviews: 176,
    duration: "90 minutes",
    imageTone: "from-cyan-100 via-slate-100 to-white",
    tags: ["Warranty safe", "Filter check", "Weekend slots"],
    description:
      "Seasonal inspection, coil cleaning, performance check, and simple maintenance recommendations.",
    level: "Certified",
    delivery: "Delivery in 2 days",
  },
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup Session",
    categorySlug: "beauty-wellness",
    provider: "Amara Studio",
    providerRole: "Top rated stylist",
    location: "At your venue",
    price: 145,
    rating: 4.9,
    reviews: 143,
    duration: "2 hours",
    imageTone: "from-rose-100 via-slate-100 to-white",
    tags: ["Trial available", "Travel ready", "Premium kit"],
    description:
      "A polished bridal look with skin prep, hair touch-up, setting, and day-of timing support.",
    level: "Top rated",
    delivery: "Delivery in 1 day",
  },
  {
    slug: "event-photography",
    title: "Event Photography",
    categorySlug: "events",
    provider: "Frame & Field",
    providerRole: "Creative photo team",
    location: "Metro area",
    price: 220,
    rating: 4.7,
    reviews: 97,
    duration: "4 hours",
    imageTone: "from-emerald-100 via-slate-100 to-white",
    tags: ["Edited gallery", "48h preview", "Two shooters"],
    description:
      "Warm documentary-style coverage for parties, launches, and small weddings with quick preview delivery.",
    level: "Featured",
    delivery: "Delivery in 4 days",
  },
  {
    slug: "brand-identity-kit",
    title: "Brand Identity Kit",
    categorySlug: "business",
    provider: "Northline Design",
    providerRole: "Small business specialist",
    location: "Remote",
    price: 320,
    rating: 4.8,
    reviews: 84,
    duration: "5 days",
    imageTone: "from-sky-100 via-slate-100 to-white",
    tags: ["Logo system", "Palette", "Social kit"],
    description:
      "A starter brand package with logo direction, color palette, type pairing, and ready-to-use social templates.",
    level: "Featured",
    delivery: "Delivery in 5 days",
  },
  {
    slug: "personal-training",
    title: "Personal Training Plan",
    categorySlug: "beauty-wellness",
    provider: "Pulse Method",
    providerRole: "Certified coach",
    location: "Hybrid",
    price: 75,
    rating: 4.8,
    reviews: 112,
    duration: "60 minutes",
    imageTone: "from-lime-100 via-slate-100 to-white",
    tags: ["Assessment", "Meal notes", "Progress plan"],
    description:
      "A guided session and four-week plan shaped around goals, schedule, equipment, and current routine.",
    level: "Hot",
    delivery: "Delivery in 2 days",
  },
];

export const providerMetrics = [
  { label: "Revenue", value: "$12.8k", detail: "+18% this month" },
  { label: "Bookings", value: "186", detail: "42 pending" },
  { label: "Rating", value: "4.9", detail: "328 reviews" },
  { label: "Response", value: "12m", detail: "Median reply time" },
];

export const bookings = [
  {
    customer: "Maya Patel",
    service: "Deep Home Cleaning",
    date: "Today, 2:00 PM",
    status: "Confirmed",
  },
  {
    customer: "Leo Carter",
    service: "AC Tune-up & Maintenance",
    date: "Tomorrow, 10:30 AM",
    status: "Pending",
  },
  {
    customer: "Iris Morgan",
    service: "Event Photography",
    date: "Fri, 6:00 PM",
    status: "Deposit paid",
  },
];

export const testimonials = [
  {
    quote:
      "The booking flow felt clear, and the provider arrived with everything already confirmed.",
    name: "Samira W.",
    role: "Homeowner",
  },
  {
    quote:
      "I can manage inquiries, services, and reviews without juggling three different tools.",
    name: "Andre L.",
    role: "Service provider",
  },
];

export const workSteps = [
  {
    id: "01",
    title: "Create a gig",
    text: "Post a focused service with clear pricing, delivery timing, and expectations.",
    color: "text-violet-600 bg-violet-50",
  },
  {
    id: "02",
    title: "Deliver great work",
    text: "Manage customer questions, booking notes, and delivery milestones in one flow.",
    color: "text-sky-600 bg-sky-50",
  },
  {
    id: "03",
    title: "We are here for you 24/7",
    text: "Keep customers confident with fast responses and helpful status updates.",
    color: "text-pink-600 bg-pink-50",
  },
  {
    id: "04",
    title: "Stay updated",
    text: "Track bookings, reviews, revenue, and service performance as the marketplace grows.",
    color: "text-emerald-600 bg-emerald-50",
  },
];

export const providers = [
  { name: "Sophia Chen", role: "UX/UI Designer", country: "Switzerland", gigs: 45 },
  { name: "Ethan Reynolds", role: "Software Engineer", country: "Malaysia", gigs: 12 },
  { name: "Isabella Martinez", role: "Cybersecurity Analyst", country: "USA", gigs: 15 },
  { name: "Liam Carter", role: "Fullstack Innovator", country: "Turkey", gigs: 22 },
  { name: "Noah Patel", role: "Data Analyst", country: "UAE", gigs: 39 },
  { name: "Ava Thompson", role: "Copywriter", country: "Switzerland", gigs: 22 },
  { name: "James Lawson", role: "Designer", country: "India", gigs: 16 },
  { name: "Elva Rivera", role: "Finance Manager", country: "Singapore", gigs: 21 },
];

export const faqs = [
  "What are website development services?",
  "What are the stages of a project?",
  "What types of service can I pick?",
  "How much does it cost to develop a basic project?",
  "What are the most popular development platforms?",
];

export const tickerItems = [
  "Google Analytics",
  "Sales force",
  "React & PHP",
  "Photography",
  "Graphic Designing",
  "Business",
  "Google Ads",
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(slug: string) {
  return services.filter((service) => service.categorySlug === slug);
}
