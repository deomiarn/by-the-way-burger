"use client";

import { useTranslations } from "next-intl";
import { Leaf, Flame, Award } from "lucide-react";

const Feature102 = () => {
  const t = useTranslations("ueberUns.sourcing");
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
                alt="Frische Zutaten"
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Schweizer Qualität</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <h2>{t("title")}</h2>
            <p className="text-muted-foreground text-body-lg">
              {t("description")}
            </p>
            <div className="grid gap-4 mt-4">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Leaf className="size-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Regionale Zutaten</h4>
                  <p className="text-muted-foreground text-sm">Frisches Gemüse und Fleisch von lokalen Lieferanten aus der Region Zürich.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Flame className="size-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Traditionelle Zubereitung</h4>
                  <p className="text-muted-foreground text-sm">Authentische Smash Burger Technik und original Balkan Grillrezepte.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="size-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Premium Qualität</h4>
                  <p className="text-muted-foreground text-sm">100% Schweizer Rindfleisch und hausgemachte Saucen täglich frisch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature102 };
