"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingItem {
  id: number;
  service: string;
  amd: string;
  rub: string;
  usd: string;
}

const pricingItems: PricingItem[] = [
  {
    id: 1,
    service: "Dental calculus cleaning, polishing with an ultrasonic scaler",
    amd: "28,000",
    rub: "7,300.00",
    usd: "71.00",
  },
  {
    id: 2,
    service: "Dental calculus cleaning, polishing, +AIR FLOW method",
    amd: "28,000",
    rub: "7,300.00",
    usd: "71.00",
  },
  {
    id: 3,
    service: "Teeth whitening with the light method + kappas as a gift",
    amd: "69,000",
    rub: "17,900.00",
    usd: "174.00",
  },
  {
    id: 4,
    service: "Whitening by home method, kappas",
    amd: "55,000",
    rub: "12,000.00",
    usd: "135.00",
  },
];

export function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Price list
          </h2>
          <div className="h-px bg-amber-200 w-full max-w-md"></div>
        </div>

        {/* Price List Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="hidden md:table-header-group">
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Service
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900">
                    AMD
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900">
                    RUB
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900">
                    USD
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <tr className="hover:bg-gray-50 transition-colors">
                      {/* Mobile Layout */}
                      <td className="block md:table-cell py-4 px-4 md:px-6">
                        <div className="md:hidden">
                          <p className="text-sm text-gray-700 mb-3 font-medium">
                            {item.service}
                          </p>
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">AMD</span>
                              <span className="font-semibold text-gray-900">
                                {item.amd}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">RUB</span>
                              <span className="font-semibold text-gray-900">
                                {item.rub}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">USD</span>
                              <span className="font-semibold text-gray-900">
                                ${item.usd}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Desktop Layout */}
                        <p className="hidden md:block text-sm text-gray-700 font-medium">
                          {item.service}
                        </p>
                      </td>
                      <td className="hidden md:table-cell text-right py-4 px-6">
                        <span className="font-semibold text-gray-900">
                          {item.amd}
                        </span>
                      </td>
                      <td className="hidden md:table-cell text-right py-4 px-6">
                        <span className="font-semibold text-gray-900">
                          {item.rub}
                        </span>
                      </td>
                      <td className="hidden md:table-cell text-right py-4 px-6">
                        <span className="font-semibold text-gray-900">
                          ${item.usd}
                        </span>
                      </td>
                    </tr>
                    {index < pricingItems.length - 1 && (
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
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-lg font-medium text-base sm:text-lg transition-colors"
          >
            <Link href="/pricing">VIEW ALL</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
