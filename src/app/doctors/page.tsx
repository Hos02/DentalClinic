"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageProvider";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "General Dentist",
    bio: "Gentle comprehensive care with a focus on prevention, restorative treatments, and patient comfort.",
    image: "/images/doctor1.jpg",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Orthodontist",
    bio: "Creates confident smiles with clear aligners and braces, tailoring plans to every lifestyle.",
    image: "/images/doctor2.jpg",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Oral Surgeon",
    bio: "Expert in surgical care, extractions, and implants with precise, minimally invasive techniques.",
    image: "/images/doctor3.jpg",
  },
  {
    name: "Dr. Laura Patel",
    specialty: "Pediatric Dentist",
    bio: "Makes visits fun and stress-free for kids while building healthy habits for life.",
    image: "/images/doctor4.png",
  },
];

export default function DoctorsPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            {t.footer.ourTeam}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            {t.nav.doctors}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            {t.doctors.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{doctor.name}</h2>
                  <p className="font-medium text-emerald-700">{doctor.specialty}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{doctor.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

