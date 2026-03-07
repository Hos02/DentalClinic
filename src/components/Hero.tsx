"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clicnicInterier.webp"
          alt="Dental Clinic Interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/95 via-white/90 to-blue-50/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Your Trusted{" "}
              <span className="text-blue-600">Dental Clinic</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Professional care for a brighter, healthier smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="text-base sm:text-lg px-8 py-6">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-8 py-6 border-2"
              >
                <Link href="/doctors">View Doctors</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Dentist Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              <div className="relative w-full h-full rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/dentinst1.jpg"
                  alt="Professional Dentist"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

