"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { doctors as doctorsList } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";

const doctorRatings: Record<string, { rating: number; reviews: number }> = {
  "sarah-johnson": { rating: 4.9, reviews: 127 },
  "michael-chen": { rating: 4.8, reviews: 89 },
  "emily-rodriguez": { rating: 4.7, reviews: 156 },
  "laura-patel": { rating: 4.9, reviews: 94 },
};

function useVisibleCount() {
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setCount(3);
      else if (window.matchMedia("(min-width: 768px)").matches) setCount(2);
      else setCount(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

interface DoctorCardProps {
  doctor: (typeof doctorsList)[number];
}

function DoctorCard({ doctor }: DoctorCardProps) {
  const { t } = useTranslation();
  const meta = doctorRatings[doctor.id] ?? { rating: 5, reviews: 0 };
  const fullName = `Dr. ${doctor.firstName} ${doctor.lastName}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <Image
          src={doctor.image}
          alt={fullName}
          fill
          className="object-contain object-center p-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{fullName}</h3>
        <p className="mt-1 font-medium text-emerald-700">{doctor.specialization}</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < Math.floor(meta.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">{meta.rating}</span>
          <span className="text-sm text-gray-500">
            ({meta.reviews} {t.doctors.reviews})
          </span>
        </div>
        </div>
    </article>
  );
}

export function DoctorsSection() {
  const { t } = useTranslation();
  const visibleCount = useVisibleCount();
  const [index, setIndex] = React.useState(0);

  const maxIndex = Math.max(0, doctorsList.length - visibleCount);

  React.useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goPrev = () => setIndex((current) => Math.max(current - 1, 0));
  const goNext = () => setIndex((current) => Math.min(current + 1, maxIndex));

  const trackWidthPercent = (doctorsList.length / visibleCount) * 100;
  const cardWidthPercent = 100 / doctorsList.length;
  const translatePercent = (index * 100) / doctorsList.length;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t.doctors.sectionTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t.doctors.sectionSubtitle}
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={goPrev}
            disabled={index === 0}
            className="absolute -left-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-gray-200 bg-white shadow-md sm:-left-5 lg:h-12 lg:w-12"
            aria-label={t.doctors.previousDoctor}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="overflow-hidden px-8 sm:px-10">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                width: `${trackWidthPercent}%`,
                transform: `translateX(-${translatePercent}%)`,
              }}
            >
              {doctorsList.map((doctor) => (
                <div
                  key={doctor.id}
                  className="shrink-0"
                  style={{ width: `${cardWidthPercent}%` }}
                >
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={goNext}
            disabled={index >= maxIndex}
            className="absolute -right-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-gray-200 bg-white shadow-md sm:-right-5 lg:h-12 lg:w-12"
            aria-label={t.doctors.nextDoctor}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link href="/appointment">{t.nav.bookAppointment}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
