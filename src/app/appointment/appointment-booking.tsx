"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";

import { DoctorCard } from "@/components/DoctorCard";
import { DaySchedule, doctorImages, getDoctorSchedules } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

import type { AppointmentFormState } from "./types";
import { AppointmentConfirmDialog } from "./components/appointment-confirm-dialog";
import { AppointmentSuccess } from "./components/appointment-success";
import { DoctorSchedulePanel } from "./components/doctor-schedule-panel";

interface SelectedSlot {
  doctorIndex: number;
  date: Date;
  time: string;
}

interface BookingState {
  doctorIndex: number | null;
  selectedSlot: SelectedSlot | null;
  modalOpen: boolean;
  formKey: number;
}

type BookingAction =
  | { type: "toggle_doctor"; index: number }
  | { type: "select_slot"; slot: SelectedSlot }
  | { type: "set_modal_open"; open: boolean }
  | { type: "reset" };

interface ConfirmedBooking {
  doctorName: string;
  slot: SelectedSlot;
  fullName: string;
  phone: string;
}

const initialBookingState: BookingState = {
  doctorIndex: null,
  selectedSlot: null,
  modalOpen: false,
  formKey: 0,
};

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case "toggle_doctor": {
      const nextIndex = state.doctorIndex === action.index ? null : action.index;
      return {
        ...state,
        doctorIndex: nextIndex,
        selectedSlot: null,
        modalOpen: false,
      };
    }
    case "select_slot":
      return {
        ...state,
        selectedSlot: action.slot,
        modalOpen: true,
        formKey: state.formKey + 1,
      };
    case "set_modal_open":
      return {
        ...state,
        modalOpen: action.open,
        formKey: action.open ? state.formKey : state.formKey + 1,
      };
    case "reset":
      return {
        doctorIndex: null,
        selectedSlot: null,
        modalOpen: false,
        formKey: state.formKey + 1,
      };
    default:
      return state;
  }
}

export function AppointmentBooking() {
  const { t } = useTranslation();
  const [booking, dispatch] = useReducer(bookingReducer, initialBookingState);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [mounted, setMounted] = useState(false);
  const scheduleRef = useRef<HTMLDivElement>(null);

  const selectedDoctor =
    booking.doctorIndex !== null ? t.doctors.team[booking.doctorIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const schedules = useMemo<DaySchedule[]>(() => {
    if (!mounted || booking.doctorIndex === null) return [];
    return getDoctorSchedules(booking.doctorIndex);
  }, [mounted, booking.doctorIndex]);

  useEffect(() => {
    if (booking.doctorIndex === null || !scheduleRef.current) return;

    const timeoutId = window.setTimeout(() => {
      scheduleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, [booking.doctorIndex]);

  function handleSlotSelect(date: Date, time: string) {
    if (booking.doctorIndex === null) return;

    dispatch({
      type: "select_slot",
      slot: { doctorIndex: booking.doctorIndex, date, time },
    });
  }

  const handleConfirmSuccess = useCallback((formState: AppointmentFormState) => {
    if (!booking.selectedSlot || !selectedDoctor) return;

    setConfirmedBooking({
      doctorName: selectedDoctor.name,
      slot: booking.selectedSlot,
      fullName: formState.fullName,
      phone: formState.phone,
    });
    dispatch({ type: "set_modal_open", open: false });
  }, [booking.selectedSlot, selectedDoctor]);

  function handleReset() {
    setConfirmedBooking(null);
    dispatch({ type: "reset" });
  }

  if (confirmedBooking) {
    return (
      <AppointmentSuccess
        doctorName={confirmedBooking.doctorName}
        date={confirmedBooking.slot.date}
        time={confirmedBooking.slot.time}
        fullName={confirmedBooking.fullName}
        phone={confirmedBooking.phone}
        onReset={handleReset}
      />
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
              selected={booking.doctorIndex === index}
              onClick={() => dispatch({ type: "toggle_doctor", index })}
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
          {selectedDoctor && booking.doctorIndex !== null && (
            <DoctorSchedulePanel
              doctorName={selectedDoctor.name}
              doctorIndex={booking.doctorIndex}
              schedules={schedules}
              selectedSlot={booking.selectedSlot}
              onSlotSelect={handleSlotSelect}
            />
          )}
        </div>
      </section>

      {booking.selectedSlot && selectedDoctor && (
        <AppointmentConfirmDialog
          key={booking.formKey}
          open={booking.modalOpen}
          formKey={booking.formKey}
          doctorName={selectedDoctor.name}
          date={booking.selectedSlot.date}
          time={booking.selectedSlot.time}
          onOpenChange={(open) => dispatch({ type: "set_modal_open", open })}
          onSuccess={handleConfirmSuccess}
        />
      )}
    </main>
  );
}
