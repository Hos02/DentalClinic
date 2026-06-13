"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { doctorImages } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function DoctorsPageContent() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            {t.footer.ourTeam}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t.doctors.sectionTitle}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {t.doctors.sectionSubtitle}
          </p>
        </div>

  
        <div className="mx-auto max-w-6xl space-y-12 lg:space-y-20">
          {t.doctors.team.map((doctor, index) => {
            const isLead = index === 0;
            const imageOnLeft = index % 2 === 0;

            return (
              <article
                key={doctor.name}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl lg:rounded-3xl",
                  isLead
                    ? "border-emerald-200 ring-1 ring-emerald-100"
                    : "border-gray-200"
                )}
              >
                <div
                  className={cn(
                    "grid items-center gap-0 lg:grid-cols-2",
                    !imageOnLeft && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div
                    className={cn(
                      "relative bg-gradient-to-br from-emerald-50/80 to-white",
                      isLead ? "min-h-[320px] lg:min-h-[420px]" : "min-h-[280px] lg:min-h-[360px]"
                    )}
                  >
                    <div className="absolute inset-4 sm:inset-6 lg:inset-8">
                      <Image
                        src={doctorImages[index]}
                        alt={doctor.name}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={index < 2}
                      />
                    </div>
                    {isLead && (
                      <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-md sm:text-sm">
                          <Stethoscope className="h-3.5 w-3.5" />
                          {t.doctors.leadSpecialist}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
                    <span className="mb-3 inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 sm:text-sm">
                      {doctor.specialty}
                    </span>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                      {doctor.name}
                    </h2>
                    <p className="mb-6 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
                      {doctor.bio}
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-emerald-600 text-white hover:bg-emerald-700 sm:w-auto"
                    >
                      <Link href="/appointment">
                        <Calendar className="h-4 w-4" />
                        {t.doctors.bookWith.replace("{name}", doctor.name)}
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl lg:mt-24">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-10 text-center shadow-xl sm:px-10 sm:py-14 lg:rounded-3xl">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative">
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                {t.doctors.ctaTitle}
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base text-emerald-50 sm:text-lg">
                {t.doctors.ctaSubtitle}
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white px-8 text-emerald-700 hover:bg-emerald-50"
              >
                <Link href="/appointment">{t.nav.bookAppointment}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
