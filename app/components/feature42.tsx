"use client";

import { useTranslations } from "next-intl";

const Feature42 = () => {
  const t = useTranslations("ueberUns.values");
  return (
    <section className="py-20 md:py-32 bg-input">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <h2 className="row-span-2">
            {t("title")}
          </h2>
          <div>
            <h3 className="mb-2">{t("value1Title")}</h3>
            <p className="text-muted-foreground">
              {t("value1Description")}
            </p>
          </div>
          <div>
            <h3 className="mb-2">{t("value2Title")}</h3>
            <p className="text-muted-foreground">
              {t("value2Description")}
            </p>
          </div>
          <div>
            <h3 className="mb-2">{t("value3Title")}</h3>
            <p className="text-muted-foreground">
              {t("value3Description")}
            </p>
          </div>
          <div>
            <h3 className="mb-2">{t("value4Title")}</h3>
            <p className="text-muted-foreground">
              {t("value4Description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature42 };
