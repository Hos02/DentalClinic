import type { Metadata } from "next";

import { AppointmentBooking } from "./appointment-booking";

export const metadata: Metadata = {
  title: "Book an Appointment | Melqonyanner",
  description: "Schedule a visit with our dental specialists.",
};

export default function AppointmentPage() {
  return <AppointmentBooking />;
}
