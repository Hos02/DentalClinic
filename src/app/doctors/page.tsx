import type { Metadata } from "next";

import { DoctorsPageContent } from "./doctors-page-content";

export const metadata: Metadata = {
  title: "Our Doctors | Melqonyanner",
  description:
    "Meet the experienced dental team at Melqonyanner — specialists in oral surgery and family dentistry.",
};

export default function DoctorsPage() {
  return <DoctorsPageContent />;
}
