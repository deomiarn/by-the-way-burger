"use client";

import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const Hero123 = () => {
  const t = useTranslations("ueberUns.contactCta");
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm font-medium text-primary">{t("label")}</p>
            <h2>
              {t("title")}
            </h2>
            <p className="text-muted-foreground text-body-lg">
              {t("description")}
            </p>
            <Button size="lg" className="w-fit" asChild>
              <a href="tel:+41772905231">
                <Phone className="size-4" />
                {t("cta")}
              </a>
            </Button>
          </div>
          <div className="h-96 overflow-hidden rounded-2xl border border-border bg-input">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" alt="Restaurant Standort" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero123 };
