"use client";

import { Beef, Flame, Leaf, UtensilsCrossed } from "lucide-react";

const items1 = [
  {
    title: "Frische, regionale Zutaten",
    description: "Für unsere Burger beziehen wir Zutaten von sorgfältig ausgewählten regionalen Lieferanten. Täglich frisch für erstklassigen Geschmack.",
    imgSrc: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
  },
  {
    title: "Authentische Balkan Rezepte",
    description: "Unsere Balkan Spezialitäten werden nach traditionellen Rezepten zubereitet, die über Generationen weitergegeben wurden.",
    imgSrc: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
  },
  {
    title: "Hausgemachte Saucen",
    description: "Jede unserer Saucen wird täglich frisch in unserer Küche zubereitet. Von würziger Chipotle Mayo bis zu klassischer BBQ-Sauce.",
    imgSrc: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
];

const items2 = [
  {
    title: "Gratis Lieferung",
    description: "Kostenlose Lieferung ab 15 CHF in Steinmaur und Dielsdorf. Rufen Sie uns einfach an!",
    icon: <UtensilsCrossed className="size-8" />,
  },
  {
    title: "Smash Burger Technik",
    description: "Unsere Burger werden auf der heissen Platte \"gesmashed\" für eine perfekte Kruste und maximalen Geschmack.",
    icon: <Flame className="size-8" />,
  },
  {
    title: "Premium Qualität",
    description: "Nur das Beste für unsere Gäste: Premium Fleisch, frische Zutaten und handverlesene Gewürze.",
    icon: <Beef className="size-8" />,
  },
  {
    title: "Vegetarische Optionen",
    description: "Auch ohne Fleisch ein Genuss! Probieren Sie unseren hausgemachten Falafel Burger.",
    icon: <Leaf className="size-8" />,
  },
];

const Feature137 = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2>Warum BY THE WAY wählen?</h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items1.map((item) => (
            <div
              className="bg-input overflow-hidden rounded-2xl border border-border pb-8"
              key={item.title}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-4 mt-8 px-10">
                {item.title}
              </h3>
              <p className="text-muted-foreground px-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="mb-4">Was uns auszeichnet</h2>
          <p className="text-muted-foreground text-body-lg max-w-3xl mb-10">
            Bei BY THE WAY steht Qualität an erster Stelle. Von der Smash Burger Technik bis zur kostenlosen Lieferung - wir machen den Unterschied.
          </p>
          {items2.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-center justify-between gap-4 rounded-2xl p-8 sm:flex-row sm:gap-10 ${index % 2 !== 0 ? "bg-input" : ""}`}
            >
              <div className="flex w-full gap-4 items-center">
                {item.icon}
                <h4>{item.title}</h4>
              </div>
              <p className="text-muted-foreground w-full">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature137 };
