"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Language } from "@/i18n/translations";
import { useTranslation } from "@/i18n/LanguageProvider";

const languageLabels: Record<Language, string> = {
  en: "EN",
  ru: "RU",
  hy: "HY",
};

const languageNames: Record<Language, string> = {
  en: "English",
  ru: "Russian",
  hy: "Armenian",
};

function NavbarContent() {
  const [open, setOpen] = React.useState(false);
  const { language, setLanguage, t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.doctors, href: "/doctors" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const switchLanguage = React.useCallback(
    (nextLanguage: Language) => {
      setLanguage(nextLanguage);

      const params = new URLSearchParams(searchParams.toString());
      params.set("lang", nextLanguage);
      const query = params.toString();

      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams, setLanguage]
  );

  const renderLanguageSwitcher = (mobile = false) => (
    <div
      className={
        mobile
          ? "inline-flex w-full items-center rounded-xl border border-slate-200 bg-slate-50 p-1"
          : "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1"
      }
      role="group"
      aria-label="Language selector"
    >
      {(Object.keys(languageLabels) as Language[]).map((locale) => {
        const isActive = language === locale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchLanguage(locale)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
              mobile ? "flex-1" : ""
            } ${
              isActive
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-white hover:text-slate-900"
            }`}
            aria-pressed={isActive}
            title={languageNames[locale]}
          >
            {languageLabels[locale]}
          </button>
        );
      })}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-9 w-20 sm:h-12 sm:w-28 md:h-14 md:w-32">
              <Image
                src="/images/logo_melqonyanner.jpg"
                alt="Melqonyanner logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600"
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link href="/appointment">{t.nav.bookAppointment}</Link>
            </Button>
          </div>

          <div className="hidden md:block">
            {renderLanguageSwitcher()}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t.nav.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[360px]">
              <SheetHeader>
                <SheetTitle className="text-left">{t.nav.menu}</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-gray-700 transition-colors hover:text-emerald-600"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-2 w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/appointment" onClick={() => setOpen(false)}>
                    {t.nav.bookAppointment}
                  </Link>
                </Button>
                {renderLanguageSwitcher(true)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export function Navbar() {
  return (
    <React.Suspense fallback={null}>
      <NavbarContent />
    </React.Suspense>
  );
}

