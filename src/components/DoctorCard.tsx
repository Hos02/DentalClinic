"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  priority?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function DoctorCard({
  name,
  specialty,
  image,
  priority,
  selected,
  onClick,
}: DoctorCardProps) {
  const interactive = Boolean(onClick);

  return (
    <article
      className={cn(
        "mx-auto w-full max-w-[280px] overflow-hidden rounded-xl border bg-white shadow-md transition-all duration-300 sm:max-w-none",
        interactive && "cursor-pointer hover:shadow-lg",
        selected
          ? "border-emerald-600 shadow-lg ring-2 ring-emerald-600/20"
          : "border-gray-200 hover:border-emerald-300"
      )}
      onClick={onClick}
      onKeyDown={
        interactive
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      <div className="relative aspect-[3/4] w-full min-h-[220px] overflow-hidden bg-gray-50 sm:min-h-[240px] lg:min-h-[260px]">
        <div className="absolute inset-2 sm:inset-3">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
          />
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="mb-1 text-lg font-bold text-gray-900 sm:text-xl">{name}</h3>
        <p className="text-sm font-medium text-emerald-700 sm:text-base">{specialty}</p>
      </div>
    </article>
  );
}
