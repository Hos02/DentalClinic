"use client";

import Image from "next/image";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getDoctorWeekSchedule,
  getWeekRangeLabel,
  type DaySchedule,
  type Doctor,
} from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";

export interface SelectedSlot {
  doctorId: string;
  day: string;
  date: string;
  time: string;
}

interface DoctorWeekScheduleProps {
  doctor: Doctor;
  weekOffset: number;
  onWeekChange: (offset: number) => void;
  onSlotSelect: (slot: SelectedSlot) => void;
  onClose: () => void;
}

export function DoctorWeekSchedule({
  doctor,
  weekOffset,
  onWeekChange,
  onSlotSelect,
  onClose,
}: DoctorWeekScheduleProps) {
  const { t, language } = useTranslation();
  const schedule = getDoctorWeekSchedule(doctor.id, weekOffset, language);
  const weekLabel = getWeekRangeLabel(weekOffset, language);

  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-white shadow-lg">
      <div className="border-b border-emerald-100 bg-white/80 px-4 py-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md sm:h-16 sm:w-16">
              <Image
                src={doctor.image}
                alt={`${doctor.firstName} ${doctor.lastName}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {doctor.firstName} {doctor.lastName}
              </h2>
              <p className="text-sm font-medium text-emerald-700 sm:text-base">
                {doctor.specialization}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="self-end rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 sm:self-auto"
            aria-label={t.doctors.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="px-4 py-5 sm:px-6 sm:py-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
              {t.doctors.availableSchedule}
            </h3>
          </div>
          <div className="flex items-center justify-between gap-2 sm:justify-end">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => onWeekChange(weekOffset - 1)}
              disabled={weekOffset <= 0}
              aria-label={t.appointment.previousWeek}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="min-w-[10rem] text-center text-sm font-medium text-gray-700">
              {weekLabel}
            </span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => onWeekChange(weekOffset + 1)}
              aria-label={t.appointment.nextWeek}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {schedule.map((daySchedule) => (
            <DayColumn
              key={daySchedule.date}
              daySchedule={daySchedule}
              doctorId={doctor.id}
              onSlotSelect={onSlotSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DayColumn({
  daySchedule,
  doctorId,
  onSlotSelect,
}: {
  daySchedule: DaySchedule;
  doctorId: string;
  onSlotSelect: (slot: SelectedSlot) => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 border-b border-gray-100 pb-3">
        <p className="font-semibold capitalize text-gray-900">{daySchedule.day}</p>
        <p className="text-sm text-gray-500">{daySchedule.dateLabel}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {daySchedule.slots.map((slot) => (
          <button
            key={`${daySchedule.date}-${slot.time}`}
            type="button"
            disabled={!slot.available}
            onClick={() =>
              onSlotSelect({
                doctorId,
                day: daySchedule.day,
                date: daySchedule.date,
                time: slot.time,
              })
            }
            className={cn(
              "rounded-lg px-2 py-2 text-xs font-semibold transition-colors sm:text-sm",
              slot.available
                ? "border border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-400 hover:bg-emerald-100"
                : "cursor-not-allowed border border-gray-100 bg-gray-50 text-gray-400"
            )}
            title={slot.available ? undefined : t.appointment.unavailable}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
}

