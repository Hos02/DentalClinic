"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getDoctorById } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";
import type { SelectedSlot } from "./DoctorWeekSchedule";

export interface BookingFormValues {
  firstName: string;
  lastName: string;
  phone: string;
}

interface BookingModalProps {
  open: boolean;
  slot: SelectedSlot | null;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: BookingFormValues, slot: SelectedSlot) => void;
}

export function BookingModal({
  open,
  slot,
  onOpenChange,
  onSubmit,
}: BookingModalProps) {
  const { t } = useTranslation();
  const doctor = slot ? getDoctorById(slot.doctorId) : undefined;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const submit = handleSubmit((values) => {
    if (!slot) return;
    onSubmit(values, slot);
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md gap-0 p-0 sm:max-w-lg">
        <div className="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-white px-6 pb-4 pt-6">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {t.appointment.bookingTitle}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {t.appointment.bookingSubtitle}
            </DialogDescription>
          </DialogHeader>
          {doctor && slot && (
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-100 bg-white/90 p-3">
              <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <p className="font-semibold text-gray-900">
                  {doctor.firstName} {doctor.lastName}
                </p>
                <p className="text-sm text-emerald-700">{doctor.specialization}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {slot.day}, {slot.date} · {slot.time}
                </p>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={submit} className="space-y-4 px-6 py-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="firstName"
              label={t.appointment.firstName}
              placeholder={t.appointment.firstNamePlaceholder}
              error={errors.firstName?.message}
              inputProps={register("firstName", {
                required: t.appointment.validationFirstName,
                minLength: {
                  value: 2,
                  message: t.appointment.validationFirstName,
                },
              })}
            />
            <Field
              id="lastName"
              label={t.appointment.lastName}
              placeholder={t.appointment.lastNamePlaceholder}
              error={errors.lastName?.message}
              inputProps={register("lastName", {
                required: t.appointment.validationLastName,
                minLength: {
                  value: 2,
                  message: t.appointment.validationLastName,
                },
              })}
            />
          </div>

          <Field
            id="phone"
            label={t.appointment.phone}
            placeholder={t.appointment.phonePlaceholder}
            error={errors.phone?.message}
            inputProps={register("phone", {
              required: t.appointment.validationPhone,
              pattern: {
                value: /^[+]?[\d\s()-]{7,}$/,
                message: t.appointment.validationPhone,
              },
            })}
            type="tel"
          />

          <DialogFooter className="gap-2 pt-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              {t.appointment.cancel}
            </Button>
            <Button className="bg-emerald-400 hover:bg-emerald-500 text-white" type="submit" disabled={isSubmitting || !slot}>
              {t.appointment.confirmBooking}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  placeholder,
  error,
  inputProps,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  inputProps: React.ComponentProps<"input">;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-900">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={error ? "border-red-300 focus-visible:ring-red-200" : undefined}
        {...inputProps}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
