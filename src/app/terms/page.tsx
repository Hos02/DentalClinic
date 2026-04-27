"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

type TermsContent = {
  title: string;
  lastUpdated: string;
  welcome: string;
  general: {
    heading: string;
    clinicNameLabel: string;
    clinicName: string;
    addressLabel: string;
    address: string;
    emailLabel: string;
    phoneLabel: string;
  };
  websiteUse: {
    heading: string;
    intro: string;
    list: string[];
  };
  disclaimer: {
    heading: string;
    text: string;
    consult?: string;
  };
  services: {
    heading: string;
    list: string[];
  };
  appointments: {
    heading: string;
    list: string[];
    cancellation: string;
    lateArrival: string;
  };
  liability: {
    heading: string;
    intro: string;
    list: string[];
  };
  intellectualProperty: {
    heading: string;
    text: string;
  };
  languages: {
    heading: string;
    text: string;
  };
  contact: {
    heading: string;
  };
};

const termsByLanguage: Record<"en" | "ru" | "hy", TermsContent> = {
  en: {
    title: "Terms and Conditions",
    lastUpdated: "Last updated: April 2026",
    welcome:
      "Welcome to Melqonyanner.am (operated by Melqonyanner Clinic). By accessing and using this website, you agree to the following Terms and Conditions.",
    general: {
      heading: "1. General Information",
      clinicNameLabel: "Clinic Name:",
      clinicName: "Melqonyanner",
      addressLabel: "Address:",
      address: "село Касах, 1-й тупик Вазгена Саргсяна, 12",
      emailLabel: "Email:",
      phoneLabel: "Phone:",
    },
    websiteUse: {
      heading: "2. Use of the Website",
      intro: "This website provides general information about dental services. You agree not to:",
      list: [
        "Use the website for illegal purposes",
        "Attempt unauthorized access",
        "Disrupt website functionality",
      ],
    },
    disclaimer: {
      heading: "3. Medical Disclaimer",
      text: "All content is for informational purposes only and does not replace professional medical advice, diagnosis, or treatment.",
      consult: "Always consult a qualified dentist or healthcare provider.",
    },
    services: {
      heading: "4. Services",
      list: [
        "Therapeutic Dentistry",
        "Orthodontics",
        "Orthopedic Dentistry",
        "Pediatric Dentistry",
        "General Surgery",
        "Maxillofacial Surgery",
        "X-ray Diagnostics",
      ],
    },
    appointments: {
      heading: "5. Appointments",
      list: [
        "Appointments require confirmation",
        "Clinic may reschedule or cancel appointments",
        "Accurate information must be provided",
      ],
      cancellation: "Cancellation: at least 12 hours before appointment",
      lateArrival: "Late arrival: more than 15 minutes may result in cancellation",
    },
    liability: {
      heading: "6. Liability",
      intro: "We are not responsible for:",
      list: ["Website errors or downtime", "Reliance on information", "Indirect damages"],
    },
    intellectualProperty: {
      heading: "7. Intellectual Property",
      text: "All content belongs to Melqonyanner Clinic.",
    },
    languages: {
      heading: "8. Languages",
      text: "Available in Armenian, Russian, and English.",
    },
    contact: {
      heading: "9. Contact",
    },
  },
  ru: {
    title: "Условия использования",
    lastUpdated: "Последнее обновление: апрель 2026",
    welcome:
      "Добро пожаловать на сайт Melqonyanner.am (клиника Melqonyanner). Используя сайт, вы соглашаетесь с данными условиями.",
    general: {
      heading: "1. Общая информация",
      clinicNameLabel: "Клиника:",
      clinicName: "Melqonyanner",
      addressLabel: "Адрес:",
      address: "Village of Kasakh, Vazgen Sargsyan 1st Deadlock, 12",
      emailLabel: "Email:",
      phoneLabel: "Телефон:",
    },
    websiteUse: {
      heading: "2. Использование сайта",
      intro:
        "Сайт предназначен для предоставления общей информации о стоматологических услугах. Запрещается:",
      list: [
        "Использовать сайт в незаконных целях",
        "Получать несанкционированный доступ",
        "Нарушать работу сайта",
      ],
    },
    disclaimer: {
      heading: "3. Медицинский отказ",
      text: "Информация на сайте носит исключительно информационный характер и не заменяет консультацию врача.",
    },
    services: {
      heading: "4. Услуги",
      list: [
        "Терапевтическая стоматология",
        "Ортодонтия",
        "Ортопедическая стоматология",
        "Детская стоматология",
        "Общая хирургия",
        "Челюстно-лицевая хирургия",
        "Рентген-диагностика",
      ],
    },
    appointments: {
      heading: "5. Запись на прием",
      list: [
        "Запись требует подтверждения",
        "Клиника может перенести или отменить прием",
        "Необходимо предоставлять точные данные",
      ],
      cancellation: "Отмена: минимум за 12 часов",
      lateArrival: "Опоздание: более 15 минут может привести к отмене",
    },
    liability: {
      heading: "6. Ответственность",
      intro: "Мы не несем ответственности за:",
      list: ["Ошибки или сбои сайта", "Использование информации", "Косвенный ущерб"],
    },
    intellectualProperty: {
      heading: "7. Интеллектуальная собственность",
      text: "Все материалы принадлежат клинике Melqonyanner.",
    },
    languages: {
      heading: "8. Языки",
      text: "Доступно на армянском, русском и английском языках.",
    },
    contact: {
      heading: "9. Контакты",
    },
  },
  hy: {
    title: "Օգտագործման պայմաններ",
    lastUpdated: "Վերջին թարմացում՝ 2026 թ. ապրիլ",
    welcome:
      "Բարի գալուստ Melqonyanner.am (Melqonyanner կլինիկա): Կայքից օգտվելով՝ դուք համաձայնում եք ստորև նշված պայմաններին։",
    general: {
      heading: "1. Ընդհանուր տեղեկություն",
      clinicNameLabel: "Կլինիկա՝",
      clinicName: "Melqonyanner",
      addressLabel: "Հասցե՝",
      address: "Քասախ գյուղ, Վազգեն Սարգսյան 1-ին փակուղի, 12",
      emailLabel: "Email՝",
      phoneLabel: "Հեռախոս՝",
    },
    websiteUse: {
      heading: "2. Կայքի օգտագործում",
      intro: "Կայքը տրամադրում է ընդհանուր տեղեկատվություն ստոմատոլոգիական ծառայությունների մասին։ Արգելվում է՝",
      list: [
        "Կայքի օգտագործումը անօրինական նպատակներով",
        "Անթույլատրելի մուտքի փորձեր",
        "Կայքի աշխատանքի խանգարում",
      ],
    },
    disclaimer: {
      heading: "3. Բժշկական պատասխանատվություն",
      text: "Կայքի տեղեկատվությունը չի հանդիսանում բժշկական խորհրդատվություն, ախտորոշում կամ բուժում։",
      consult: "Պետք է դիմել մասնագետ բժշկի։",
    },
    services: {
      heading: "4. Ծառայություններ",
      list: [
        "Թերապևտիկ ստոմատոլոգիա",
        "Օրթոդոնտիա",
        "Օրթոպեդիկ ստոմատոլոգիա",
        "Մանկական ստոմատոլոգիա",
        "Ընդհանուր վիրաբուժություն",
        "Դիմածնոտային վիրաբուժություն",
        "Ռենտգեն ախտորոշում",
      ],
    },
    appointments: {
      heading: "5. Ժամադրություն",
      list: [
        "Ժամադրությունները հաստատվում են կլինիկայի կողմից",
        "Կլինիկան կարող է փոխել կամ չեղարկել ժամադրությունը",
        "Պետք է տրամադրվեն ճիշտ տվյալներ",
      ],
      cancellation: "Չեղարկում՝ առնվազն 12 ժամ առաջ",
      lateArrival: "Ուշացում՝ 15 րոպեից ավել կարող է հանգեցնել չեղարկման",
    },
    liability: {
      heading: "6. Պատասխանատվություն",
      intro: "Կլինիկան պատասխանատվություն չի կրում՝",
      list: [
        "Կայքի սխալների կամ դադարների համար",
        "Տեղեկատվության օգտագործման համար",
        "Անուղղակի վնասների համար",
      ],
    },
    intellectualProperty: {
      heading: "7. Ինտելեկտուալ սեփականություն",
      text: "Բոլոր նյութերը պատկանում են Melqonyanner կլինիկային։",
    },
    languages: {
      heading: "8. Լեզուներ",
      text: "Հասանելի է հայերեն, ռուսերեն և անգլերեն տարբերակներով։",
    },
    contact: {
      heading: "9. Կապ",
    },
  },
};

export default function TermsPage() {
  const { language } = useTranslation();
  const content = termsByLanguage[language];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-cyan-50/40 to-white">
      <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-[0_25px_70px_-35px_rgba(14,116,144,0.35)]">
          <div className="border-b border-cyan-100 bg-gradient-to-r from-cyan-700 via-teal-700 to-emerald-700 p-6 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">Melqonyanner Clinic</p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{content.title}</h1>
            <p className="mt-3 text-sm text-cyan-100">{content.lastUpdated}</p>
            <p className="mt-5 max-w-3xl leading-relaxed text-cyan-50">{content.welcome}</p>
          </div>

          <div className="space-y-5 p-5 sm:space-y-6 sm:p-8">
            <section className="rounded-2xl border border-cyan-100 bg-cyan-50/35 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.general.heading}</h2>
              <div className="mt-4 space-y-2 text-slate-700">
                <p>
                  <strong>{content.general.clinicNameLabel}</strong> {content.general.clinicName}
                </p>
                <p>
                  <strong>{content.general.addressLabel}</strong> {content.general.address}
                </p>
                <p>
                  <strong>{content.general.emailLabel}</strong>{" "}
                  <a className="text-emerald-700 hover:underline" href="mailto:info@melqonyanner.am">
                    info@melqonyanner.am
                  </a>
                </p>
                <p>
                  <strong>{content.general.phoneLabel}</strong> +374 93 555 179
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.websiteUse.heading}</h2>
              <p className="mt-4 text-slate-700">{content.websiteUse.intro}</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 marker:text-cyan-700">
                {content.websiteUse.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.disclaimer.heading}</h2>
              <p className="mt-4 text-slate-700">{content.disclaimer.text}</p>
              {content.disclaimer.consult ? <p className="mt-2 text-slate-700">{content.disclaimer.consult}</p> : null}
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.services.heading}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 marker:text-cyan-700">
                {content.services.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.appointments.heading}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 marker:text-cyan-700">
                {content.appointments.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-slate-800">
                <strong>{content.appointments.cancellation}</strong>
              </p>
              <p className="mt-2 text-slate-800">
                <strong>{content.appointments.lateArrival}</strong>
              </p>
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.liability.heading}</h2>
              <p className="mt-4 text-slate-700">{content.liability.intro}</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 marker:text-cyan-700">
                {content.liability.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.intellectualProperty.heading}</h2>
              <p className="mt-4 text-slate-700">{content.intellectualProperty.text}</p>
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.languages.heading}</h2>
              <p className="mt-4 text-slate-700">{content.languages.text}</p>
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-cyan-50/35 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">{content.contact.heading}</h2>
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
      </section>
    </div>
  );
}
