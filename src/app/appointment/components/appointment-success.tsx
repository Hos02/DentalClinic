"use client";

import { Button } from "@/components/ui/button";
import { formatScheduleDate } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";

interface AppointmentSuccessProps {
  doctorName: string;
  date: Date;
  time: string;
  fullName: string;
  phone: string;
  onReset: () => void;
}

export function AppointmentSuccess({
  doctorName,
  date,
  time,
  fullName,
  phone,
  onReset,
}: AppointmentSuccessProps) {
  const { t, language } = useTranslation();
  const { day, dateLabel } = formatScheduleDate(date, language);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-12">
      <section className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
          <h1 className="mb-3 text-2xl font-semibold text-gray-900">
            {t.appointment.requested}
          </h1>
          <p className="mb-6 text-gray-700">
            {t.appointment.thanks.replace("{name}", fullName)}
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1">
              <strong>{t.appointment.doctor}:</strong> {doctorName}
            </p>
            <p className="mb-1">
              <strong>{t.appointment.date}:</strong> {day}, {dateLabel}
            </p>
            <p className="mb-1">
              <strong>{t.appointment.time}:</strong> {time}
            </p>
            <p className="mb-1">
              <strong>{t.appointment.phone}:</strong> {phone}
            </p>
          </div>
          <div className="mt-6">
            <Button onClick={onReset} className="w-full sm:w-auto">
              {t.appointment.makeAnother}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
