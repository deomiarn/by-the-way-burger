"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Hero166 = () => {
  const t = useTranslations("ueberUns");
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm font-medium text-primary">{t("hero.label")}</p>
            <h1>
              {t("hero.title")}
            </h1>
            <p className="text-muted-foreground text-body-lg">
              {t("hero.description")}
            </p>
            <Button size="lg" className="w-fit" asChild>
              <Link href="/de/speisekarte">
                {t("contactCta.cta")}
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 grid-cols-2">
            <div className="h-64 overflow-hidden rounded-lg bg-muted col-span-1">
              <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80" alt="Smash Burger" className="h-full w-full object-cover" />
            </div>
            <div className="h-64 overflow-hidden rounded-lg bg-muted col-span-1">
              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80" alt="Burger Zubereitung" className="h-full w-full object-cover" />
            </div>
            <div className="h-64 overflow-hidden rounded-lg bg-muted col-span-2">
              <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80" alt="Restaurant Atmosphäre" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero166 };
