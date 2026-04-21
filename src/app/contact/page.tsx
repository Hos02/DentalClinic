"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(t.contact.sentAlert);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white">
      {/* Hero Header */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-playfair font-bold text-emerald-700 sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="mb-6 text-base text-emerald-800/80 sm:text-lg">
              {t.contact.subtitle}
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-24 rounded-full bg-emerald-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="rounded-2xl border border-emerald-100/70 bg-white p-5 shadow-lg shadow-emerald-100/60 sm:p-8">
              <h2 className="mb-6 text-xl font-playfair font-semibold text-gray-900 sm:text-2xl">
                {t.contact.contactInfo}
              </h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                    <svg
                      className="h-6 w-6 text-emerald-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="tel:+37477454979"
                      className="block text-lg font-semibold text-gray-900 transition-colors hover:text-emerald-700"
                    >
                      +374 77 454 979
                    </a>
                    <p className="text-sm text-gray-500 mt-1">{t.contact.available247}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                    <svg
                      className="h-6 w-6 text-emerald-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="mailto:infojermtravel@gmail.com"
                      className="block break-all text-base font-semibold text-gray-900 transition-colors hover:text-emerald-700 sm:text-lg sm:break-normal"
                    >
                      infojermtravel@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">{t.contact.emailAnytime}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                    <svg
                      className="h-6 w-6 text-emerald-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      15 Abovyan Street, Yerevan, Armenia
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{t.contact.visitOffice}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="rounded-2xl border border-emerald-100/70 bg-white p-5 shadow-lg shadow-emerald-100/60 sm:p-8">
              <h2 className="mb-6 text-xl font-playfair font-semibold text-gray-900 sm:text-2xl">
                {t.contact.quickContact}
              </h2>
              <div className="space-y-4">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/37477454979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>

                {/* Telegram Button */}
                <a
                  href="https://t.me/armeniawinetours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white shadow-md transition-all hover:bg-sky-600 hover:shadow-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div>
            <div className="rounded-2xl border border-emerald-100/70 bg-white p-5 shadow-lg shadow-emerald-100/60 sm:p-8">
              <h2 className="mb-2 text-xl font-playfair font-semibold text-gray-900 sm:text-2xl">
                {t.contact.sendMessage}
              </h2>
              <p className="text-gray-600 mb-6">
                {t.contact.backIn24}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.appointment.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Input with Country Flag */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact.phoneNumber}
                  </label>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-3 sm:py-0">
                      <span className="text-2xl">🇦🇲</span>
                      <span className="text-sm text-gray-600">+374</span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                      placeholder="77 45 49 79"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact.yourMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-md transition-colors hover:bg-emerald-700 hover:shadow-lg"
                >
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

