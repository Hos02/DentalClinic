"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

type PrivacyContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: {
    heading: string;
    text?: string;
    list?: string[];
  }[];
  contactHeading: string;
};

const privacyByLanguage: Record<"en" | "ru" | "hy", PrivacyContent> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 2026",
    intro:
      "This Privacy Policy explains how Melqonyanner Clinic collects, uses, and protects your personal information when you use Melqonyanner.am.",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "We may collect the following personal data:",
        list: [
          "Full name",
          "Phone number",
          "Address",
          "Any information submitted through contact or booking forms",
          "We do not intentionally collect sensitive medical data online.",
        ],
      },
      {
        heading: "2. How We Use Your Information",
        text: "Your data is used for:",
        list: [
          "Appointment scheduling",
          "Contacting you regarding services",
          "Providing dental care services",
          "Improving user experience",
        ],
      },
      {
        heading: "3. Data Storage",
        text: "Your information is stored securely and is accessible only by authorized clinic staff. We take reasonable technical and organizational measures to protect your data.",
      },
      {
        heading: "4. Sharing of Information",
        text: "We do not sell or rent your personal data. We may share information only:",
        list: [
          "When required by law",
          "With trusted service providers (e.g. booking systems or hosting providers)",
        ],
      },
      {
        heading: "5. Cookies and Analytics",
        text: "Our website may use cookies and analytics tools (such as Google Analytics) to improve performance and user experience. You can disable cookies in your browser settings.",
      },
      {
        heading: "6. Data Retention",
        text: "We retain your personal data only as long as necessary for clinic operations and legal obligations.",
      },
      {
        heading: "7. Your Rights",
        text: "You may request to:",
        list: [
          "Access your data",
          "Correct your data",
          "Delete your data (where legally possible)",
          "To exercise your rights, contact us.",
        ],
      },
      {
        heading: "8. Third-Party Services",
        text: "We may use third-party tools (such as booking or analytics systems). These services have their own privacy policies.",
      },
      {
        heading: "9. Children’s Privacy",
        text: "Our services are not directed to children under 16 without parental consent.",
      },
      {
        heading: "10. Changes to This Policy",
        text: "We may update this Privacy Policy at any time. Changes will be posted on this page.",
      },
    ],
    contactHeading: "11. Contact",
  },
  ru: {
    title: "Политика конфиденциальности",
    lastUpdated: "Последнее обновление: апрель 2026",
    intro:
      "Данная Политика объясняет, как клиника Melqonyanner собирает и использует ваши данные на сайте Melqonyanner.am.",
    sections: [
      {
        heading: "1. Какие данные мы собираем",
        text: "Мы можем собирать:",
        list: [
          "Имя и фамилия",
          "Номер телефона",
          "Адрес",
          "Информация, отправленная через формы",
          "Мы не собираем медицинские данные напрямую через сайт.",
        ],
      },
      {
        heading: "2. Использование данных",
        text: "Ваши данные используются для:",
        list: [
          "Записи на прием",
          "Связи с пациентами",
          "Предоставления услуг",
          "Улучшения работы сайта",
        ],
      },
      {
        heading: "3. Хранение данных",
        text: "Данные хранятся безопасно и доступны только сотрудникам клиники.",
      },
      {
        heading: "4. Передача данных",
        text: "Мы не продаем и не передаем данные третьим лицам, кроме случаев:",
        list: ["Требований закона", "Использования сервисов (например, бронирование)"],
      },
      {
        heading: "5. Cookies и аналитика",
        text: "Сайт может использовать cookies и аналитические инструменты.",
      },
      {
        heading: "6. Срок хранения",
        text: "Данные хранятся только необходимое время.",
      },
      {
        heading: "7. Ваши права",
        text: "Вы можете:",
        list: ["Получить доступ к данным", "Исправить данные", "Удалить данные"],
      },
      {
        heading: "8. Сторонние сервисы",
        text: "Мы можем использовать внешние сервисы, которые имеют свои политики конфиденциальности.",
      },
      {
        heading: "9. Дети",
        text: "Сайт не предназначен для детей младше 16 лет без согласия родителей.",
      },
      {
        heading: "10. Изменения",
        text: "Политика может обновляться.",
      },
    ],
    contactHeading: "11. Контакты",
  },
  hy: {
    title: "Գաղտնիության քաղաքականություն",
    lastUpdated: "Վերջին թարմացում՝ 2026 թ. ապրիլ",
    intro:
      "Այս քաղաքականությունը բացատրում է, թե ինչպես է Melqonyanner կլինիկան հավաքում և օգտագործում ձեր տվյալները Melqonyanner.am կայքում։",
    sections: [
      {
        heading: "1. Ինչ տվյալներ ենք հավաքում",
        text: "Մենք կարող ենք հավաքել՝",
        list: [
          "Անուն, ազգանուն",
          "Հեռախոսահամար",
          "Հասցե",
          "Կոնտակտային կամ booking ձևերի միջոցով ուղարկված տվյալներ",
          "Բժշկական զգայուն տվյալներ ուղղակիորեն կայքում չեն հավաքվում։",
        ],
      },
      {
        heading: "2. Տվյալների օգտագործում",
        text: "Տվյալները օգտագործվում են՝",
        list: [
          "Ժամադրությունների կազմակերպման համար",
          "Կապ հաստատելու համար",
          "Ծառայությունների մատուցման համար",
          "Կայքի բարելավման համար",
        ],
      },
      {
        heading: "3. Տվյալների պահպանում",
        text: "Տվյալները պահվում են անվտանգ կերպով և հասանելի են միայն լիազորված անձանց։",
      },
      {
        heading: "4. Տվյալների փոխանցում",
        text: "Մենք չենք վաճառում կամ փոխանցում ձեր տվյալները երրորդ անձանց, բացառությամբ՝",
        list: ["Օրենքի պահանջի դեպքում", "Տեխնիկական ծառայությունների դեպքում"],
      },
      {
        heading: "5. Cookies և analytics",
        text: "Կայքը կարող է օգտագործել cookies և analytics գործիքներ։",
      },
      {
        heading: "6. Պահպանման ժամկետ",
        text: "Տվյալները պահվում են միայն անհրաժեշտ ժամանակահատվածում։",
      },
      {
        heading: "7. Ձեր իրավունքները",
        text: "Դուք կարող եք՝",
        list: ["Ստանալ ձեր տվյալները", "Փոփոխել դրանք", "Ջնջել դրանք"],
      },
      {
        heading: "8. Երրորդ կողմեր",
        text: "Կարող ենք օգտագործել արտաքին ծառայություններ, որոնք ունեն իրենց privacy policies-ը։",
      },
      {
        heading: "9. Երեխաներ",
        text: "Կայքը նախատեսված չէ 16 տարեկանից փոքր երեխաների համար առանց ծնողի համաձայնության։",
      },
      {
        heading: "10. Փոփոխություններ",
        text: "Քաղաքականությունը կարող է փոփոխվել։",
      },
    ],
    contactHeading: "11. Կապ",
  },
};

export default function PrivacyPolicyPage() {
  const { language } = useTranslation();
  const content = privacyByLanguage[language];

  return (
    <div className="bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.20),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.16),_transparent_45%)] bg-slate-50">
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z"
                  />
                </svg>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                Melqonyanner Clinic
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">{content.title}</h1>
              <p className="mt-2 text-sm text-slate-500">{content.lastUpdated}</p>
              <p className="mt-4 leading-relaxed text-slate-700">{content.intro}</p>
              <div className="mt-6 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-4">
                <p className="text-sm font-medium text-cyan-900">
                  {content.sections.length + 1} sections in this policy
                </p>
                <p className="mt-1 text-sm text-slate-600">Data handling, retention, rights, children, and contact.</p>
              </div>
            </aside>

            <div className="space-y-4">
              {content.sections.map((section) => {
                const splitHeading = section.heading.split(". ");
                const number = splitHeading[0];
                const title = splitHeading.slice(1).join(". ") || section.heading;

                return (
                  <section
                    key={section.heading}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_40px_-28px_rgba(2,132,199,0.55)] sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-emerald-600 text-sm font-semibold text-white">
                        {number}
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">{title}</h2>
                        {section.text ? <p className="mt-3 text-slate-700">{section.text}</p> : null}
                        {section.list ? (
                          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 marker:text-emerald-600">
                            {section.list.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </section>
                );
              })}

              <section className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-emerald-900 sm:text-xl">{content.contactHeading}</h2>
                <div className="mt-4 space-y-2 text-slate-700">
                  <p>
                    <a className="text-emerald-700 hover:underline" href="mailto:info@melqonyanner.am">
                      info@melqonyanner.am
                    </a>
                  </p>
                  <p>+374 93 555 179</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
