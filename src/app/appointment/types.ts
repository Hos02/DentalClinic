export type AppointmentErrorKey =
  | "validationName"
  | "validationNameFormat"
  | "validationPhone"
  | "validationPhoneInvalid";

export type AppointmentFormState = {
  errors: {
    fullName?: AppointmentErrorKey;
    phone?: AppointmentErrorKey;
  };
  success: boolean;
  fullName: string;
  phone: string;
};

export const initialAppointmentFormState: AppointmentFormState = {
  errors: {},
  success: false,
  fullName: "",
  phone: "",
};
