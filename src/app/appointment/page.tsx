"use client";

import * as React from "react";
import { Calendar } from "lucide-react";
import { DoctorCard } from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  doctorImages,
  formatScheduleDate,
  getDoctorSchedules,
} from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";
import { isValidFullName, isValidPhone } from "@/lib/appointmentValidation";
import { cn } from "@/lib/utils";

interface FieldErrors {
  fullName?: string;
  phone?: string;
}

interface SelectedSlot {
  doctorIndex: number;
  date: Date;
  time: string;
}

export default function AppointmentPage() {
  const { t, language } = useTranslation();
  const [selectedDoctorIndex, setSelectedDoctorIndex] = React.useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = React.useState<SelectedSlot | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});
  const [submitted, setSubmitted] = React.useState(false);
  const scheduleRef = React.useRef<HTMLDivElement>(null);

  const selectedDoctor =
    selectedDoctorIndex !== null ? t.doctors.team[selectedDoctorIndex] : null;
  const schedules =
    selectedDoctorIndex !== null ? getDoctorSchedules(selectedDoctorIndex) : [];

  function handleDoctorClick(index: number) {
    setSelectedDoctorIndex((current) => (current === index ? null : index));
    setSelectedSlot(null);
    setModalOpen(false);
    setFieldErrors({});
  }

  React.useEffect(() => {
    if (selectedDoctorIndex === null || !scheduleRef.current) return;

    const timeoutId = window.setTimeout(() => {
      scheduleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, [selectedDoctorIndex]);

  function handleSlotSelect(date: Date, time: string) {
    if (selectedDoctorIndex === null) return;

    setSelectedSlot({
      doctorIndex: selectedDoctorIndex,
      date,
      time,
    });
    setFieldErrors({});
    setModalOpen(true);
  }

  function resetForm() {
    setSelectedDoctorIndex(null);
    setSelectedSlot(null);
    setFullName("");
    setPhone("");
    setFieldErrors({});
    setModalOpen(false);
    setSubmitted(false);
  }

  function validateForm() {
    const errors: FieldErrors = {};
    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      errors.fullName = t.appointment.validationName;
    } else if (!isValidFullName(trimmedName)) {
      errors.fullName = t.appointment.validationNameFormat;
    }

    if (!trimmedPhone) {
      errors.phone = t.appointment.validationPhone;
    } else if (!isValidPhone(trimmedPhone)) {
      errors.phone = t.appointment.validationPhoneInvalid;
    }

    return errors;
  }

  function handleConfirm(event?: React.FormEvent) {
    event?.preventDefault();

    const errors = validateForm();
    if (errors.fullName || errors.phone) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setModalOpen(false);
    setSubmitted(true);
  }

  if (submitted && selectedSlot && selectedDoctor) {
    const { day, dateLabel } = formatScheduleDate(selectedSlot.date, language);

    return (
      <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-12">
        <section className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
            <h1 className="mb-3 text-2xl font-semibold text-gray-900">
              {t.appointment.requested}
            </h1>
            <p className="mb-6 text-gray-700">
              {t.appointment.thanks.replace("{name}", fullName.trim())}
            </p>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="mb-1">
                <strong>{t.appointment.doctor}:</strong> {selectedDoctor.name}
              </p>
              <p className="mb-1">
                <strong>{t.appointment.date}:</strong> {day}, {dateLabel}
              </p>
              <p className="mb-1">
                <strong>{t.appointment.time}:</strong> {selectedSlot.time}
              </p>
              <p className="mb-1">
                <strong>{t.appointment.phone}:</strong> {phone}
              </p>
            </div>
            <div className="mt-6">
              <Button onClick={resetForm} className="w-full sm:w-auto">
                {t.appointment.makeAnother}
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-12">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-2xl font-semibold text-gray-900 sm:text-3xl">
            {t.appointment.bookTitle}
          </h1>
          <p className="text-lg text-emerald-700">{t.appointment.clickDoctorToRegister}</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {t.doctors.team.map((doctor, index) => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctorImages[index]}
              selected={selectedDoctorIndex === index}
              onClick={() => handleDoctorClick(index)}
              priority={index < 2}
            />
          ))}
        </div>

        <div
          ref={scheduleRef}
          className={cn(
            "scroll-mt-24 overflow-hidden transition-all duration-500 ease-in-out",
            selectedDoctor ? "mt-10 max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {selectedDoctor && selectedDoctorIndex !== null && (
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-lg sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {t.doctors.availableSchedule} — {selectedDoctor.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {schedules.map((daySchedule) => {
                  const { day, dateLabel } = formatScheduleDate(
                    daySchedule.date,
                    language
                  );

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
                            selectedSlot?.doctorIndex === selectedDoctorIndex &&
                            selectedSlot.date.toDateString() ===
                              daySchedule.date.toDateString() &&
                            selectedSlot.time === slot.time;

                          return (
                            <button
                              key={slot.time}
                              type="button"
                              disabled={!slot.available}
                              onClick={() => {
                                if (slot.available) {
                                  handleSlotSelect(daySchedule.date, slot.time);
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
          )}
        </div>
      </section>

      <Dialog
        open={modalOpen}
        onOpenChange={(open) => {
          setModalOpen(open);
          if (!open) {
            setFieldErrors({});
          }
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t.appointment.confirmAppointment}</DialogTitle>
            {selectedSlot && selectedDoctor && (
              <DialogDescription>
                {selectedDoctor.name} —{" "}
                {formatScheduleDate(selectedSlot.date, language).day},{" "}
                {formatScheduleDate(selectedSlot.date, language).dateLabel} —{" "}
                {selectedSlot.time}
              </DialogDescription>
            )}
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleConfirm} noValidate>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="fullName">
                {t.appointment.fullName}
              </label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);
                  if (fieldErrors.fullName) {
                    setFieldErrors((current) => ({ ...current, fullName: undefined }));
                  }
                }}
                placeholder={t.appointment.fullNamePlaceholder}
                autoComplete="name"
                aria-invalid={Boolean(fieldErrors.fullName)}
              />
              {fieldErrors.fullName && (
                <p className="mt-1.5 text-sm text-red-600">{fieldErrors.fullName}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="phone">
                {t.appointment.phone}
              </label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  if (fieldErrors.phone) {
                    setFieldErrors((current) => ({ ...current, phone: undefined }));
                  }
                }}
                placeholder={t.appointment.phonePlaceholder}
                autoComplete="tel"
                aria-invalid={Boolean(fieldErrors.phone)}
              />
              {fieldErrors.phone && (
                <p className="mt-1.5 text-sm text-red-600">{fieldErrors.phone}</p>
              )}
            </div>

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setModalOpen(false)}
              >
                {t.appointment.cancel}
              </Button>
              <Button
                type="submit"
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                {t.appointment.confirm}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
