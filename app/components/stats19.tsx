"use client";

import { useTranslations } from "next-intl";

const Stats19 = () => {
  const t = useTranslations("ueberUns.milestones");
  return (
    <section className="py-12 md:py-16 bg-input">
      <div className="container mx-auto px-4">
        <h3 className="text-center mb-8 text-white">{t("title")}</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold text-primary">{t("milestone1Year")}</p>
            <p className="text-white text-sm mt-1">Eröffnung</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold text-primary">500+</p>
            <p className="text-white text-sm mt-1">Zufriedene Kunden</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold text-primary">38</p>
            <p className="text-white text-sm mt-1">Gerichte</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold text-primary">100%</p>
            <p className="text-white text-sm mt-1">Schweizer Rindfleisch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats19 };
