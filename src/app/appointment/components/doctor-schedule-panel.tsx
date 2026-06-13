"use client";

import { Calendar } from "lucide-react";
import { memo } from "react";

import { DaySchedule, formatScheduleDate } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

interface SelectedSlot {
  doctorIndex: number;
  date: Date;
  time: string;
}

interface DoctorSchedulePanelProps {
  doctorName: string;
  doctorIndex: number;
  schedules: DaySchedule[];
  selectedSlot: SelectedSlot | null;
  onSlotSelect: (date: Date, time: string) => void;
}

export const DoctorSchedulePanel = memo(function DoctorSchedulePanel({
  doctorName,
  doctorIndex,
  schedules,
  selectedSlot,
  onSlotSelect,
}: DoctorSchedulePanelProps) {
  const { t, language } = useTranslation();

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-lg sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-900">
          {t.doctors.availableSchedule} — {doctorName}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {schedules.map((daySchedule) => {
          const { day, dateLabel } = formatScheduleDate(daySchedule.date, language);

          return (
            <div
              key={daySchedule.date.toISOString()}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <div className="mb-3">
                <p className="font-semibold text-gray-900">{day}</p>
                <p className="text-sm text-gray-500">{dateLabel}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {daySchedule.slots.map((slot) => {
                  const isSelected =
                    selectedSlot?.doctorIndex === doctorIndex &&
                    selectedSlot.date.toDateString() === daySchedule.date.toDateString() &&
                    selectedSlot.time === slot.time;

                  return (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => {
                        if (slot.available) {
                          onSlotSelect(daySchedule.date, slot.time);
                        }
                      }}
                      className={cn(
                        "rounded-md px-2 py-1.5 text-xs font-medium transition-colors",
                        slot.available
                          ? isSelected
                            ? "bg-emerald-600 text-white"
                            : "border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50"
                          : "cursor-not-allowed border border-gray-200 bg-gray-100 text-gray-400"
                      )}
                    >
                      {slot.time}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
