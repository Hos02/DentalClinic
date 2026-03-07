"use client";

import Image from "next/image";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const gallery = [
  { src: "/images/dental1.jpg", alt: "Clinic interior 1" },
  { src: "/images/dental2.jpg", alt: "Clinic interior 2" },
];

export default function AboutPage() {
  const [index, setIndex] = React.useState(0);

  const prev = () =>
    setIndex((current) => (current === 0 ? gallery.length - 1 : current - 1));
  const next = () =>
    setIndex((current) => (current === gallery.length - 1 ? 0 : current + 1));

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/40 to-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: History & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold">
                Our Story
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                A trusted dental clinic with deep roots in Kasagh
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded to bring compassionate, modern dentistry to our community, our
                clinic blends evidence-based care with a personal touch. From preventive
                checkups to advanced restorative treatments, we design every visit to be
                comfortable, transparent, and tailored to you.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of specialists is united by one goal: healthy, confident smiles
                for every patient in Kasagh and beyond. We invest in the latest
                technology, continuous education, and a welcoming environment so you feel
                supported at every step.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Visit us in Kasagh
                </h2>
                <p className="text-sm text-gray-600">
                  Village of Kasagh, Aragatsotn Region, Armenia
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
                    aria-label="Previous image"
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
                            ? "bg-blue-600 w-5"
                            : "bg-white/70 border border-gray-200"
                        )}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    aria-label="Next image"
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

