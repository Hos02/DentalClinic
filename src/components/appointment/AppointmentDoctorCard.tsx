"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Doctor } from "@/data/doctors";

interface AppointmentDoctorCardProps {
  doctor: Doctor;
  isSelected: boolean;
  onSelect: () => void;
}

export function AppointmentDoctorCard({
  doctor,
  isSelected,
  onSelect,
}: AppointmentDoctorCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group w-full overflow-hidden rounded-2xl border-2 bg-white text-left shadow-lg transition-all duration-300",
        isSelected
          ? "border-emerald-600 shadow-xl ring-2 ring-emerald-600/20"
          : "border-gray-200 hover:border-emerald-300 hover:shadow-xl"
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <Image
          src={doctor.image}
          alt={`${doctor.firstName} ${doctor.lastName}`}
          fill
          className="object-contain object-center p-1 transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="space-y-0.5 p-5 sm:p-6">
        <p className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
          {doctor.firstName}
        </p>
        <p className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
          {doctor.lastName}
        </p>
        <p className="pt-2 text-sm font-medium text-emerald-700 sm:text-base">
          {doctor.specialization}
        </p>
      </div>
    </button>
  );
}
