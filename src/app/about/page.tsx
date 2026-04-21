"use client";

import Image from "next/image";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/LanguageProvider";

const gallery = [
  { src: "/images/dental1.jpg", alt: "Clinic interior 1" },
  { src: "/images/dental2.jpg", alt: "Clinic interior 2" },
];

export default function AboutPage() {
  const [index, setIndex] = React.useState(0);
  const { t } = useTranslation();

  const prev = () =>
    setIndex((current) => (current === 0 ? gallery.length - 1 : current - 1));
  const next = () =>
    setIndex((current) => (current === gallery.length - 1 ? 0 : current + 1));

  return (
    <div className="bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: History & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {t.about.ourStory}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t.about.heading}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  {t.about.visitKasagh}
                </h2>
                <p className="text-sm text-gray-600">
                  {t.about.location}
                </p>
              </div>
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Kasagh location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.695846925813!2d44.425!3d40.2835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40406a2eb7a1c5e9%3A0x9a9b0b4efddf413b!2sKasagh!5e0!3m2!1sen!2sam!4v1700000000000!5m2!1sen!2sam"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <div className="relative aspect-[4/5] w-full bg-gray-100">
                <Image
                  key={gallery[index].src}
                  src={gallery[index].src}
                  alt={gallery[index].alt}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <button
                    onClick={prev}
                    aria-label={t.about.previousImage}
                    className="p-2 rounded-full bg-white/80 backdrop-blur shadow hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="flex items-center gap-2">
                    {gallery.map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-2 w-2 rounded-full transition-all",
                          i === index
                            ? "bg-emerald-600 w-5"
                            : "bg-white/70 border border-gray-200"
                        )}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    aria-label={t.about.nextImage}
                    className="p-2 rounded-full bg-white/80 backdrop-blur shadow hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

