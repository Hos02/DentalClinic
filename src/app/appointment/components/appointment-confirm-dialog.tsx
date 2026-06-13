"use client";

import { useActionState, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { formatScheduleDate } from "@/data/doctors";
import { useTranslation } from "@/i18n/LanguageProvider";

import { confirmAppointment } from "../actions";
import { initialAppointmentFormState, type AppointmentFormState } from "../types";
import { ConfirmSubmitButton } from "./confirm-submit-button";

interface AppointmentConfirmDialogProps {
  open: boolean;
  formKey: number;
  doctorName: string;
  date: Date;
  time: string;
  onOpenChange: (open: boolean) => void;
  onSuccess: (state: AppointmentFormState) => void;
}

export function AppointmentConfirmDialog({
  open,
  formKey,
  doctorName,
  date,
  time,
  onOpenChange,
  onSuccess,
}: AppointmentConfirmDialogProps) {
  const { t, language } = useTranslation();
  const { day, dateLabel } = formatScheduleDate(date, language);
  const [formState, formAction] = useActionState(confirmAppointment, initialAppointmentFormState);
  const handledSuccessRef = useRef(false);

  useEffect(() => {
    if (!formState.success || !open) {
      handledSuccessRef.current = false;
      return;
    }

    if (handledSuccessRef.current) return;
    handledSuccessRef.current = true;
    onSuccess(formState);
  }, [formState, open, onSuccess]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.appointment.confirmAppointment}</DialogTitle>
          <DialogDescription>
            {doctorName} — {day}, {dateLabel} — {time}
          </DialogDescription>
        </DialogHeader>

        <form key={formKey} className="space-y-4" action={formAction} noValidate>
          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="fullName">
              {t.appointment.fullName}
            </label>
            <Input
              id="fullName"
              name="fullName"
              defaultValue={formState.fullName}
              placeholder={t.appointment.fullNamePlaceholder}
              autoComplete="name"
              aria-invalid={Boolean(formState.errors.fullName)}
            />
            {formState.errors.fullName && (
              <p className="mt-1.5 text-sm text-red-600">
                {t.appointment[formState.errors.fullName]}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="phone">
              {t.appointment.phone}
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              defaultValue={formState.phone}
              placeholder={t.appointment.phonePlaceholder}
              autoComplete="tel"
              aria-invalid={Boolean(formState.errors.phone)}
            />
            {formState.errors.phone && (
              <p className="mt-1.5 text-sm text-red-600">
                {t.appointment[formState.errors.phone]}
              </p>
            )}
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              {t.appointment.cancel}
            </Button>
            <ConfirmSubmitButton label={t.appointment.confirm} />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
