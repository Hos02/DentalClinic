"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden sm:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clicnicInterier.webp"
          alt={t.hero.titleAccent}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/95 via-white/90 to-green-50/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="space-y-5 text-center lg:space-y-8 lg:text-left">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              {t.hero.titlePrefix}{" "}
              <span className="text-emerald-700">{t.hero.titleAccent}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-gray-700 sm:text-xl lg:mx-0 lg:text-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:gap-4 lg:justify-start">
              <Button asChild size="lg" className="w-full px-6 py-5 text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
                <Link href="/contact">{t.nav.contact}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full bg-emerald-600 px-6 py-5 text-base text-white hover:bg-emerald-700 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                <Link href="/doctors">{t.hero.viewDoctors}</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Dentist Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-xs sm:max-w-md lg:max-w-lg">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/images/dentinst1.jpg"
                  alt={t.nav.doctors}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-emerald-500 opacity-20 blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-green-400 opacity-20 blur-3xl -z-10" />
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

