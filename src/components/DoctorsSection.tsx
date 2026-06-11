"use client";

import { DoctorCard } from "@/components/DoctorCard";
import { doctorImages } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";

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
