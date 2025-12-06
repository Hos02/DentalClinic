"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GuestsLoveWineroad() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Anna S.",
      review:
        "Amazing experience! Everything was organized perfectly and the wine tastings were unforgettable.",
      rating: 5,
    },
    {
      name: "Michael R.",
      review:
        "WineRoad tours give a true taste of Armenia. Friendly guides and beautiful vineyards.",
      rating: 5,
    },
    {
      name: "Sofia A.",
      review:
        "Loved every moment — the scenery, the wines, and the warm Armenian hospitality.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Expert Local Guides",
      description:
        "Our knowledgeable guides share deep insights into Armenian wine culture and history, ensuring an authentic and educational experience.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      title: "Authentic Wine Experiences",
      description:
        "Discover traditional winemaking methods and taste premium Armenian wines directly from historic vineyards and family-owned cellars.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      title: "Comfortable Transportation",
      description:
        "Travel in style with our modern, air-conditioned vehicles and professional drivers ensuring a safe and comfortable journey.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Safe & Reliable Service",
      description:
        "We prioritize your safety and satisfaction with secure online booking, comprehensive insurance, and 24/7 customer support.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="bg-[#151313] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Shared Heading Area */}
        <div className="text-center space-y-4 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#D1B06B]">
            CUSTOMER STORIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white">
            Why Guests Love Wineroad
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-300">
            Real stories and reasons from travelers who explored Armenia with Wineroad.
          </p>
          <div className="flex justify-center pt-2">
            <div className="w-24 h-0.5 bg-[#D1B06B]"></div>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* LEFT COLUMN - Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-white">
              What Our Guests Say
            </h3>

            {/* Testimonial Card */}
            <div className="bg-[#21130F] border border-white/5 rounded-xl p-6 md:p-7 shadow-lg">
              {/* Top Row - Avatar and Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#D1B06B] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#151313] font-bold text-lg">
                    {current.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-semibold text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs text-gray-400">Verified traveler</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-4">
                "{current.review}"
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#D1B06B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="p-2 rounded-full hover:bg-[#21130F] transition-colors text-[#D1B06B]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-[#D1B06B] w-8"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="p-2 rounded-full hover:bg-[#21130F] transition-colors text-[#D1B06B]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Why Choose Wineroad */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                Why Choose Wineroad
              </h3>
              <p className="text-gray-300 text-sm">
                Experience expertly curated wine journeys with trusted local experts.
              </p>
            </div>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#21130F] border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:shadow-xl hover:border-[#D1B06B]/30 transition-all duration-300"
                >
                  {/* Icon in Circular Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#D1B06B]/20 flex items-center justify-center mb-4">
                    <div className="text-[#D1B06B]">{feature.icon}</div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-playfair font-semibold text-white mb-2">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

