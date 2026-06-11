"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageProvider";

const doctorImages = [
  "/images/MelqonyanHrant.jpg",
  "/images/Heghine.jpg",
  "/images/MushexyanKaren.jpg",
  "/images/MelqumyanMilena.jpg",
  "/images/AnnaGevorgyan.jpg",
];

function DoctorCard({
  name,
  specialty,
  image,
  priority,
}: {
  name: string;
  specialty: string;
  image: string;
  priority?: boolean;
}) {
  return (
    <article className="mx-auto w-full max-w-[280px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg sm:max-w-none">
      <div className="relative aspect-[3/4] w-full min-h-[220px] overflow-hidden bg-gray-50 sm:min-h-[240px] lg:min-h-[260px]">
        <div className="absolute inset-2 sm:inset-3">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
          />
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="mb-1 text-lg font-bold text-gray-900 sm:text-xl">{name}</h3>
        <p className="text-sm font-medium text-emerald-700 sm:text-base">{specialty}</p>
      </div>
    </article>
  );
}

export function DoctorsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t.doctors.sectionTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.doctors.sectionSubtitle}</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {t.doctors.team.map((doctor, index) => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctorImages[index]}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
