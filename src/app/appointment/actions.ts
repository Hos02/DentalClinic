"use server";

import { isValidFullName, isValidPhone } from "@/lib/appointmentValidation";

import type { AppointmentFormState } from "./types";

export async function confirmAppointment(
  _prevState: AppointmentFormState,
  formData: FormData
): Promise<AppointmentFormState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const errors: AppointmentFormState["errors"] = {};

  if (!fullName) {
    errors.fullName = "validationName";
  } else if (!isValidFullName(fullName)) {
    errors.fullName = "validationNameFormat";
  }

  if (!phone) {
    errors.phone = "validationPhone";
  } else if (!isValidPhone(phone)) {
    errors.phone = "validationPhoneInvalid";
  }

  if (errors.fullName || errors.phone) {
    return { errors, success: false, fullName, phone };
  }

  return { errors: {}, success: true, fullName, phone };
}
