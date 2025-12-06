"use client";

import * as React from "react";
import Image from "next/image";
import { Star, X, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DoctorSchedule {
  day: string;
  date: string;
  slots: TimeSlot[];
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  schedule: DoctorSchedule[];
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Dentistry",
    rating: 4.9,
    reviews: 127,
    image: "/images/doctor1.jpg",
    schedule: [
      {
        day: "Monday",
        date: "2024-01-15",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: false },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Tuesday",
        date: "2024-01-16",
        slots: [
          { time: "09:00", available: false },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: false },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Wednesday",
        date: "2024-01-17",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: false },
        ],
      },
      {
        day: "Thursday",
        date: "2024-01-18",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: false },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Friday",
        date: "2024-01-19",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: false },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Orthodontics",
    rating: 4.8,
    reviews: 89,
    image: "/images/doctor2.jpg",
    schedule: [
      {
        day: "Monday",
        date: "2024-01-15",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: false },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Tuesday",
        date: "2024-01-16",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: false },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Wednesday",
        date: "2024-01-17",
        slots: [
          { time: "09:00", available: false },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Thursday",
        date: "2024-01-18",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: false },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Friday",
        date: "2024-01-19",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: false },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Oral Surgery",
    rating: 4.7,
    reviews: 156,
    image: "/images/doctor3.jpg",
    schedule: [
      {
        day: "Monday",
        date: "2024-01-15",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: false },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Tuesday",
        date: "2024-01-16",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: false },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Wednesday",
        date: "2024-01-17",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: false },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
      {
        day: "Thursday",
        date: "2024-01-18",
        slots: [
          { time: "09:00", available: true },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: false },
        ],
      },
      {
        day: "Friday",
        date: "2024-01-19",
        slots: [
          { time: "09:00", available: false },
          { time: "10:00", available: true },
          { time: "11:00", available: true },
          { time: "14:00", available: true },
          { time: "15:00", available: true },
          { time: "16:00", available: true },
        ],
      },
    ],
  },
];

// Doctor Card Component
interface DoctorCardProps {
  doctor: Doctor;
  isSelected: boolean;
  onClick: () => void;
}

function DoctorCard({ doctor, isSelected, onClick }: DoctorCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer overflow-hidden",
        isSelected
          ? "border-blue-600 shadow-xl scale-[1.02]"
          : "border-gray-200 hover:border-blue-300 hover:shadow-xl"
      )}
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-contain transition-transform duration-300 hover:scale-105"
          priority={doctor.id <= 3}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
        <p className="text-blue-600 font-medium mb-4">{doctor.specialty}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-5 h-5",
                  i < Math.floor(doctor.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">
            {doctor.rating}
          </span>
          <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
}

// Doctor Details Panel Component
interface DoctorDetailsPanelProps {
  doctor: Doctor | null;
  selectedSlot: {
    doctorId: number;
    day: string;
    date: string;
    time: string;
  } | null;
  onClose: () => void;
  onSlotSelect: (doctorId: number, day: string, date: string, time: string) => void;
  onBookAppointment: () => void;
}

function DoctorDetailsPanel({
  doctor,
  selectedSlot,
  onClose,
  onSlotSelect,
  onBookAppointment,
}: DoctorDetailsPanelProps) {
  if (!doctor) return null;

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white border-t-4 border-blue-600 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 64px, 80px"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">{doctor.name}</h3>
              <p className="text-blue-600 font-medium text-sm sm:text-base">{doctor.specialty}</p>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-3 h-3 sm:w-4 sm:h-4",
                        i < Math.floor(doctor.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      )}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">
                  {doctor.rating}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  ({doctor.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors flex-shrink-0 self-end sm:self-auto"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>

        {/* Schedule */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h4 className="text-lg font-semibold text-gray-900">
              Available Schedule
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {doctor.schedule.map((daySchedule, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
              >
                <div className="mb-3">
                  <p className="font-semibold text-gray-900">{daySchedule.day}</p>
                  <p className="text-sm text-gray-500">{daySchedule.date}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {daySchedule.slots.map((slot, slotIdx) => (
                    <button
                      key={slotIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (slot.available) {
                          onSlotSelect(
                            doctor.id,
                            daySchedule.day,
                            daySchedule.date,
                            slot.time
                          );
                        }
                      }}
                      disabled={!slot.available}
                      className={cn(
                        "px-2 py-1.5 text-xs font-medium rounded-md transition-colors",
                        slot.available
                          ? selectedSlot?.doctorId === doctor.id &&
                              selectedSlot?.day === daySchedule.day &&
                              selectedSlot?.time === slot.time
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                      )}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        {selectedSlot?.doctorId === doctor.id && (
          <div className="bg-white rounded-lg p-6 border-2 border-blue-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-1">Selected appointment:</p>
                <p className="font-semibold text-gray-900 text-lg">
                  {selectedSlot.day}, {selectedSlot.date} at {selectedSlot.time}
                </p>
              </div>
              <Button onClick={onBookAppointment} size="lg" className="w-full md:w-auto">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Main Doctors Section Component
export function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = React.useState<Doctor | null>(null);
  const [selectedSlot, setSelectedSlot] = React.useState<{
    doctorId: number;
    day: string;
    date: string;
    time: string;
  } | null>(null);

  const handleDoctorClick = (doctor: Doctor) => {
    if (selectedDoctor?.id === doctor.id) {
      setSelectedDoctor(null);
      setSelectedSlot(null);
    } else {
      setSelectedDoctor(doctor);
      setSelectedSlot(null);
    }
  };

  const handleSlotSelect = (
    doctorId: number,
    day: string,
    date: string,
    time: string
  ) => {
    setSelectedSlot({ doctorId, day, date, time });
  };

  const handleBookAppointment = () => {
    if (selectedSlot && selectedDoctor) {
      alert(
        `Appointment booked with ${selectedDoctor.name} on ${selectedSlot.day}, ${selectedSlot.date} at ${selectedSlot.time}`
      );
      setSelectedSlot(null);
      setSelectedDoctor(null);
    }
  };

  const handleClosePanel = () => {
    setSelectedDoctor(null);
    setSelectedSlot(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Expert Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced dental professionals dedicated to your oral health
          </p>
        </div>

        {/* Doctors Grid - Fixed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              isSelected={selectedDoctor?.id === doctor.id}
              onClick={() => handleDoctorClick(doctor)}
            />
          ))}
        </div>

        {/* Horizontal Expansion Panel */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-in-out",
            selectedDoctor
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div
            className={cn(
              "transform transition-transform duration-500 ease-in-out",
              selectedDoctor ? "translate-y-0" : "-translate-y-full"
            )}
          >
            <DoctorDetailsPanel
              doctor={selectedDoctor}
              selectedSlot={selectedSlot}
              onClose={handleClosePanel}
              onSlotSelect={handleSlotSelect}
              onBookAppointment={handleBookAppointment}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
