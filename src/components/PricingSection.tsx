"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PricingItem {
  service: string;
  amd: string;
  rub: string;
  usd: string;
}

interface PricingSectionGroup {
  title: string;
  icon?: string;
  items: PricingItem[];
}

const pricingSectionsEn: PricingSectionGroup[] = [
  {
    title: "Therapeutic",
    icon: "/images/Therapeutic.png",
    items: [
      { service: "Caries treatment", amd: "15,000", rub: "3,000", usd: "40" },
      { service: "Filling", amd: "18,000", rub: "3,600", usd: "48" },
      { service: "Root treatment", amd: "40,000", rub: "8,000", usd: "107" },
      { service: "Cleaning", amd: "22,000", rub: "4,400", usd: "59" },
      { service: "Whitening", amd: "60,000", rub: "12,000", usd: "160" },
    ],
  },
  {
    title: "Orthodontics",
    icon: "/images/ortodontik.png",
    items: [
      { service: "Consultation", amd: "7,000", rub: "1,400", usd: "19" },
      { service: "Braces (metal)", amd: "250,000", rub: "50,000", usd: "667" },
      { service: "Ceramic braces", amd: "400,000", rub: "80,000", usd: "1,067" },
      { service: "Aligners", amd: "600,000", rub: "120,000", usd: "1,600" },
      { service: "Monitoring", amd: "10,000", rub: "2,000", usd: "27" },
    ],
  },
  {
    title: "Orthopedic",
    icon: "/images/ortopetik.webp",
    items: [
      { service: "Metal-ceramic crown", amd: "60,000", rub: "12,000", usd: "160" },
      { service: "Zircon crown", amd: "120,000", rub: "24,000", usd: "320" },
      { service: "Veneers", amd: "180,000", rub: "36,000", usd: "480" },
      { service: "Removable prosthesis", amd: "200,000", rub: "40,000", usd: "533" },
      { service: "Implant crown", amd: "220,000", rub: "44,000", usd: "587" },
    ],
  },
  {
    title: "Pediatric",
    icon: "/images/mankakanLogo.jpg",
    items: [
      { service: "Consultation", amd: "5,000", rub: "1,000", usd: "13" },
      { service: "Caries treatment", amd: "10,000", rub: "2,000", usd: "27" },
      { service: "Removal", amd: "10,000", rub: "2,000", usd: "27" },
      { service: "Fluoridation", amd: "7,000", rub: "1,400", usd: "19" },
      { service: "Sealanting", amd: "15,000", rub: "3,000", usd: "40" },
    ],
  },
  {
    title: "Surgical",
    icon: "/images/Maxillofacial.png",
    items: [
      { service: "Tooth extraction", amd: "25,000", rub: "5,000", usd: "67" },
      { service: "Complicated extraction", amd: "50,000", rub: "10,000", usd: "133" },
      { service: "Implantation", amd: "400,000", rub: "80,000", usd: "1,067" },
      { service: "Cyst", amd: "100,000", rub: "20,000", usd: "267" },
      { service: "Landing", amd: "60,000", rub: "12,000", usd: "160" },
    ],
  },
  {
    title: "Maxillofacial Surgery",
    icon: "/images/Maxillofacial_surgery.png",
    items: [
      { service: "Consultation", amd: "15,000", rub: "3,000", usd: "40" },
      { service: "Jaw Surgery", amd: "800,000", rub: "160,000", usd: "2,133" },
      { service: "Fractures", amd: "500,000", rub: "100,000", usd: "1,333" },
    ],
  },
  {
    title: "X-ray",
    icon: "/images/dental-x-ray.png",
    items: [
      { service: "1 tooth", amd: "3,000", rub: "600", usd: "8" },
      { service: "Panoramic", amd: "12,000", rub: "2,400", usd: "32" },
      { service: "3D CT", amd: "35,000", rub: "7,000", usd: "93" },
    ],
  },
];

const pricingSectionsHy: PricingSectionGroup[] = [
  {
    title: "Թերապևտիկ",
    icon: "/images/Therapeutic.png",
    items: [
      { service: "Կարիեսի բուժում", amd: "15,000", rub: "3,000", usd: "40" },
      { service: "Պլոմբավորում", amd: "18,000", rub: "3,600", usd: "48" },
      { service: "Արմատային բուժում", amd: "40,000", rub: "8,000", usd: "107" },
      { service: "Մաքրում", amd: "22,000", rub: "4,400", usd: "59" },
      { service: "Սպիտակեցում", amd: "60,000", rub: "12,000", usd: "160" },
    ],
  },
  {
    title: "Օրթոդոնտիկ",
    icon: "/images/ortodontik.png",
    items: [
      { service: "Կոնսուլտացիա", amd: "7,000", rub: "1,400", usd: "19" },
      {
        service: "Բրեկետներ (մետաղական)",
        amd: "250,000",
        rub: "50,000",
        usd: "667",
      },
      { service: "Կերամիկական բրեկետներ", amd: "400,000", rub: "80,000", usd: "1,067" },
      { service: "Ալայներներ", amd: "600,000", rub: "120,000", usd: "1,600" },
      { service: "Վերահսկում", amd: "10,000", rub: "2,000", usd: "27" },
    ],
  },
  {
    title: "Օրթոպետիկ",
    icon: "/images/ortopetik.webp",
    items: [
      { service: "Մետաղակերամիկական պսակ", amd: "60,000", rub: "12,000", usd: "160" },
      { service: "Զիրկոնե պսակ", amd: "120,000", rub: "24,000", usd: "320" },
      { service: "Վինիրներ", amd: "180,000", rub: "36,000", usd: "480" },
      { service: "Շարժական պրոթեզ", amd: "200,000", rub: "40,000", usd: "533" },
      { service: "Իմպլանտ պսակ", amd: "220,000", rub: "44,000", usd: "587" },
    ],
  },
  {
    title: "Մանկական",
    icon: "/images/mankakanLogo.jpg",
    items: [
      { service: "Կոնսուլտացիա", amd: "5,000", rub: "1,000", usd: "13" },
      { service: "Կարիեսի բուժում", amd: "10,000", rub: "2,000", usd: "27" },
      { service: "Հեռացում", amd: "10,000", rub: "2,000", usd: "27" },
      { service: "Ֆտորապատում", amd: "7,000", rub: "1,400", usd: "19" },
      { service: "Հերմետիկացում", amd: "15,000", rub: "3,000", usd: "40" },
    ],
  },
  {
    title: "Վիրաբուժական",
    icon: "/images/Maxillofacial.png",
    items: [
      { service: "Ատամի հեռացում", amd: "25,000", rub: "5,000", usd: "67" },
      { service: "Բարդ հեռացում", amd: "50,000", rub: "10,000", usd: "133" },
      { service: "Իմպլանտացիա", amd: "400,000", rub: "80,000", usd: "1,067" },
      { service: "Ցիստա", amd: "100,000", rub: "20,000", usd: "267" },
      { service: "Լնդեր", amd: "60,000", rub: "12,000", usd: "160" },
    ],
  },
  {
    title: "Դիմածնոտային վիրաբուժություն",
    icon: "/images/Maxillofacial_surgery.png",
    items: [
      { service: "Կոնսուլտացիա", amd: "15,000", rub: "3,000", usd: "40" },
      { service: "Ծնոտի վիրահատություն", amd: "800,000", rub: "160,000", usd: "2,133" },
      { service: "Կոտրվածքներ", amd: "500,000", rub: "100,000", usd: "1,333" },
    ],
  },
  {
    title: "Ռենտգեն",
    icon: "/images/dental-x-ray.png",
    items: [
      { service: "1 ատամ", amd: "3,000", rub: "600", usd: "8" },
      { service: "Պանորամիկ", amd: "12,000", rub: "2,400", usd: "32" },
      { service: "3D CT", amd: "35,000", rub: "7,000", usd: "93" },
    ],
  },
];

const pricingSectionsRu: PricingSectionGroup[] = [
  {
    title: "Терапевтическое лечение",
    icon: "/images/Therapeutic.png",
    items: [
      { service: "Лечение кариеса", amd: "15,000", rub: "3,000", usd: "40" },
      { service: "Пломбирование", amd: "18,000", rub: "3,600", usd: "48" },
      { service: "Лечение корней зубов", amd: "40,000", rub: "8,000", usd: "107" },
      { service: "Чистка зубов", amd: "22,000", rub: "4,400", usd: "59" },
      { service: "Отбеливание", amd: "60,000", rub: "12,000", usd: "160" },
    ],
  },
  {
    title: "Ортодонтия",
    icon: "/images/ortodontik.png",
    items: [
      { service: "Консультация", amd: "7,000", rub: "1,400", usd: "19" },
      { service: "Брекеты (металлические)", amd: "250,000", rub: "50,000", usd: "667" },
      { service: "Керамические брекеты", amd: "400,000", rub: "80,000", usd: "1,067" },
      { service: "Элайнеры", amd: "600,000", rub: "120,000", usd: "1,600" },
      { service: "Мониторинг", amd: "10,000", rub: "2,000", usd: "27" },
    ],
  },
  {
    title: "Ортопедические",
    icon: "/images/ortopetik.webp",
    items: [
      { service: "Металлокерамическая коронка", amd: "60,000", rub: "12,000", usd: "160" },
      { service: "Цирконовая коронка", amd: "120,000", rub: "24,000", usd: "320" },
      { service: "Виниры", amd: "180,000", rub: "36,000", usd: "480" },
      { service: "Съемный протез", amd: "200,000", rub: "40,000", usd: "533" },
      { service: "Имплантационная коронка", amd: "220,000", rub: "44,000", usd: "587" },
    ],
  },
  {
    title: "Детские",
    icon: "/images/mankakanLogo.jpg",
    items: [
      { service: "Консультация", amd: "5,000", rub: "1,000", usd: "13" },
      { service: "Лечение кариеса", amd: "10,000", rub: "2,000", usd: "27" },
      { service: "Удаление", amd: "10,000", rub: "2,000", usd: "27" },
      { service: "Фторирование", amd: "7,000", rub: "1,400", usd: "19" },
      { service: "Герметизация", amd: "15,000", rub: "3,000", usd: "40" },
    ],
  },
  {
    title: "Хирургическое удаление зуба",
    icon: "/images/Maxillofacial.png",
    items: [
      { service: "Удаление зуба", amd: "25,000", rub: "5,000", usd: "67" },
      { service: "Сложное удаление", amd: "50,000", rub: "10,000", usd: "133" },
      { service: "Имплантация", amd: "400,000", rub: "80,000", usd: "1,067" },
      { service: "Киста", amd: "100,000", rub: "20,000", usd: "267" },
      { service: "Ландирование", amd: "60,000", rub: "12,000", usd: "160" },
    ],
  },
  {
    title: "Челюстно-лицевая хирургия",
    icon: "/images/Maxillofacial_surgery.png",
    items: [
      { service: "Консультация", amd: "15,000", rub: "3,000", usd: "40" },
      { service: "Операция на челюсти", amd: "800,000", rub: "160,000", usd: "2,133" },
      { service: "Переломы", amd: "500,000", rub: "100,000", usd: "1,333" },
    ],
  },
  {
    title: "Рентген",
    icon: "/images/dental-x-ray.png",
    items: [
      { service: "1 зуб", amd: "3,000", rub: "600", usd: "8" },
      { service: "Панорамный снимок", amd: "12,000", rub: "2,400", usd: "32" },
      { service: "3D КТ", amd: "35,000", rub: "7,000", usd: "93" },
    ],
  },
];

export function PricingSection() {
  const { t, language } = useTranslation();
  const pricingSections =
    language === "hy"
      ? pricingSectionsHy
      : language === "ru"
        ? pricingSectionsRu
        : pricingSectionsEn;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {t.pricing.title}
            </h2>
          </div>
          <div className="h-px bg-amber-200 w-full max-w-md"></div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-8">
          <Accordion type="multiple" className="w-full space-y-3">
            {pricingSections.map((section, sectionIndex) => (
              <AccordionItem
                key={section.title}
                value={`section-${sectionIndex}`}
                className="px-4 md:px-6"
              >
                <AccordionTrigger className="text-lg text-gray-900 hover:no-underline">
                  <span className="flex items-center gap-3">
                    {section.icon && (
                      <span className="flex h-9 w-9 items-center justify-center">
                        <Image
                          src={section.icon}
                          alt={`${section.title} icon`}
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                        />
                      </span>
                    )}
                    {section.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-left py-4 px-4 md:px-6 font-semibold text-gray-900">
                            {t.pricing.service}
                          </th>
                          <th className="text-right py-4 px-4 md:px-6 font-semibold text-gray-900">
                            AMD
                          </th>
                          <th className="text-right py-4 px-4 md:px-6 font-semibold text-gray-900">
                            RUB
                          </th>
                          <th className="text-right py-4 px-4 md:px-6 font-semibold text-gray-900">
                            USD
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.items.map((item, index) => (
                          <React.Fragment key={`${section.title}-${item.service}`}>
                            <tr className="hover:bg-gray-50 transition-colors">
                              <td className="py-4 px-4 md:px-6 text-sm text-gray-700 font-medium">
                                {item.service}
                              </td>
                              <td className="py-4 px-4 md:px-6 text-right">
                                <span className="font-semibold text-gray-900">
                                  {item.amd}
                                </span>
                              </td>
                              <td className="py-4 px-4 md:px-6 text-right">
                                <span className="font-semibold text-gray-900">{item.rub}</span>
                              </td>
                              <td className="py-4 px-4 md:px-6 text-right">
                                <span className="font-semibold text-gray-900">{item.usd}</span>
                              </td>
                            </tr>
                            {index < section.items.length - 1 && (
                              <tr>
                                <td
                                  colSpan={4}
                                  className="px-4 md:px-6 py-0 border-b border-dotted border-gray-300"
                                >
                                  <div className="h-px"></div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

    
      </div>
    </section>
  );
}
