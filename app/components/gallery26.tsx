"use client";

import { useTranslations } from "next-intl";

const images = [
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", alt: "Smash Burger mit Käse" },
  { src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80", alt: "Gegrillte Cevapcici" },
  { src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80", alt: "Double Cheeseburger" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80", alt: "Restaurant Ambiente" },
  { src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80", alt: "Chicken Burger" },
  { src: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80", alt: "Balkan Grillplatte" },
  { src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80", alt: "Burger mit Pommes" },
  { src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80", alt: "Bacon Burger" },
  { src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80", alt: "Gourmet Burger" },
];

const Gallery26 = () => {
  const t = useTranslations("ueberUns.gallery");
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center">
          {t("title")}
        </h2>
        <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-border bg-input aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery26 };
