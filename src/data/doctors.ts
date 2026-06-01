import {
  addDays,
  addWeeks,
  format,
  startOfWeek,
  type Locale,
} from "date-fns";
import { enUS, hy, ru } from "date-fns/locale";
import type { Language } from "@/i18n/translations";

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DaySchedule {
  day: string;
  date: string;
  dateLabel: string;
  slots: TimeSlot[];
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialization: string;
  image: string;
}

const SLOT_TIMES = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

const DATE_LOCALES: Record<Language, Locale> = {
  en: enUS,
  ru,
  hy,
};

export const doctors: Doctor[] = [
  {
    id: "sarah-johnson",
    firstName: "Sarah",
    lastName: "Johnson",
    specialization: "General Dentistry",
    image: "/images/doctor1.jpg",
  },
  {
    id: "michael-chen",
    firstName: "Michael",
    lastName: "Chen",
    specialization: "Orthodontics",
    image: "/images/doctor2.jpg",
  },
  {
    id: "emily-rodriguez",
    firstName: "Emily",
    lastName: "Rodriguez",
    specialization: "Oral Surgery",
    image: "/images/doctor3.jpg",
  },
  {
    id: "laura-patel",
    firstName: "Laura",
    lastName: "Patel",
    specialization: "Pediatric Dentistry",
    image: "/images/doctor4.png",
  },
];

function hashSeed(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function isSlotAvailable(
  doctorId: string,
  dateKey: string,
  time: string
): boolean {
  const seed = hashSeed(`${doctorId}-${dateKey}-${time}`);
  return seed % 4 !== 0;
}

export function getDoctorWeekSchedule(
  doctorId: string,
  weekOffset: number,
  language: Language
): DaySchedule[] {
  const locale = DATE_LOCALES[language];
  const weekStart = startOfWeek(addWeeks(new Date(), weekOffset), {
    weekStartsOn: 1,
  });

  return Array.from({ length: 5 }, (_, index) => {
    const date = addDays(weekStart, index);
    const dateKey = format(date, "yyyy-MM-dd");

    return {
      day: format(date, "EEEE", { locale }),
      date: dateKey,
      dateLabel: format(date, "MMM d", { locale }),
      slots: SLOT_TIMES.map((time) => ({
        time,
        available: isSlotAvailable(doctorId, dateKey, time),
      })),
    };
  });
}

export function getWeekRangeLabel(
  weekOffset: number,
  language: Language
): string {
  const locale = DATE_LOCALES[language];
  const weekStart = startOfWeek(addWeeks(new Date(), weekOffset), {
    weekStartsOn: 1,
  });
  const weekEnd = addDays(weekStart, 4);
  return `${format(weekStart, "MMM d", { locale })} – ${format(weekEnd, "MMM d, yyyy", { locale })}`;
}

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.id === id);
}
