export const doctorImages = [
  "/images/MelqonyanHrant.jpg",
  "/images/Heghine.jpg",
  "/images/MushexyanKaren.jpg",
  "/images/MelqumyanMilena.jpg",
  "/images/AnnaGevorgyan.jpg",
];

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DaySchedule {
  date: Date;
  slots: TimeSlot[];
}

const SLOT_TIMES = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

function isSlotAvailable(doctorIndex: number, dayIndex: number, slotIndex: number) {
  return (doctorIndex + dayIndex + slotIndex) % 3 !== 0;
}

export function getDoctorSchedules(doctorIndex: number): DaySchedule[] {
  const schedules: DaySchedule[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (schedules.length < 5) {
    if (cursor.getDay() !== 4) {
      schedules.push({
        date: new Date(cursor),
        slots: SLOT_TIMES.map((time, slotIndex) => ({
          time,
          available: isSlotAvailable(doctorIndex, schedules.length, slotIndex),
        })),
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return schedules;
}

export function formatScheduleDate(date: Date, language: string) {
  const locale =
    language === "hy" ? "hy-AM" : language === "ru" ? "ru-RU" : "en-US";

  return {
    day: new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date),
    dateLabel: new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date),
  };
}
