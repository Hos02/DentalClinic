"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDoctorCard } from "@/components/appointment/AppointmentDoctorCard";
import {
  DoctorWeekSchedule,
  type SelectedSlot,
} from "@/components/appointment/DoctorWeekSchedule";
import {
  BookingModal,
  type BookingFormValues,
} from "@/components/appointment/BookingModal";
import { doctors, getDoctorById } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

interface ConfirmedBooking {
  patientName: string;
  phone: string;
  slot: SelectedSlot;
  doctorName: string;
}

export default function AppointmentPage() {
  const { t } = useTranslation();
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingSlot, setPendingSlot] = useState<SelectedSlot | null>(null);
  const [confirmed, setConfirmed] = useState<ConfirmedBooking | null>(null);

  const selectedDoctor = selectedDoctorId
    ? getDoctorById(selectedDoctorId)
    : undefined;

  const handleDoctorSelect = (doctorId: string) => {
    if (selectedDoctorId === doctorId) {
      setSelectedDoctorId(null);
      setWeekOffset(0);
      return;
    }
    setSelectedDoctorId(doctorId);
    setWeekOffset(0);
  };

  const handleSlotSelect = (slot: SelectedSlot) => {
    setPendingSlot(slot);
    setModalOpen(true);
  };

  const handleBookingSubmit = (
    values: BookingFormValues,
    slot: SelectedSlot
  ) => {
    const doctor = getDoctorById(slot.doctorId);
    if (!doctor) return;

    setConfirmed({
      patientName: `${values.firstName} ${values.lastName}`,
      phone: values.phone,
      slot,
      doctorName: `${doctor.firstName} ${doctor.lastName}`,
    });
    setModalOpen(false);
    setPendingSlot(null);
    setSelectedDoctorId(null);
    setWeekOffset(0);
  };

  if (confirmed) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-12">
        <section className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg text-center">
            <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-emerald-600" />
            <h1 className="mb-2 text-2xl font-semibold text-gray-900">
              {t.appointment.requested}
            </h1>
            <p className="mb-6 text-gray-700">
              {t.appointment.thanks.replace("{name}", confirmed.patientName)}
            </p>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-left text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-900">
                  {t.appointment.doctor}:
                </span>{" "}
                {confirmed.doctorName}
              </p>
              <p className="mt-2">
                <span className="font-medium text-gray-900">
                  {t.appointment.date}:
                </span>{" "}
                {confirmed.slot.day}, {confirmed.slot.date}
              </p>
              <p className="mt-2">
                <span className="font-medium text-gray-900">
                  {t.appointment.time}:
                </span>{" "}
                {confirmed.slot.time}
              </p>
              <p className="mt-2">
                <span className="font-medium text-gray-900">
                  {t.appointment.phone}:
                </span>{" "}
                {confirmed.phone}
              </p>
            </div>
            <Button
              className="mt-6"
              onClick={() => setConfirmed(null)}
            >
              {t.appointment.makeAnother}
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white py-12">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            {t.nav.bookAppointment}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.appointment.bookTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {t.appointment.pageSubtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <AppointmentDoctorCard
              key={doctor.id}
              doctor={doctor}
              isSelected={selectedDoctorId === doctor.id}
              onSelect={() => handleDoctorSelect(doctor.id)}
            />
          ))}
        </div>

        <div
          className={cn(
            "mt-8 overflow-hidden transition-all duration-500 ease-in-out",
            selectedDoctor
              ? "max-h-[2000px] opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          {selectedDoctor && (
            <DoctorWeekSchedule
              doctor={selectedDoctor}
              weekOffset={weekOffset}
              onWeekChange={setWeekOffset}
              onSlotSelect={handleSlotSelect}
              onClose={() => {
                setSelectedDoctorId(null);
                setWeekOffset(0);
              }}
            />
          )}
        </div>
      </section>

      <BookingModal
        open={modalOpen}
        slot={pendingSlot}
        onOpenChange={setModalOpen}
        onSubmit={handleBookingSubmit}
      />
    </main>
  );
}
