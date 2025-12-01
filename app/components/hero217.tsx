import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero217 = () => {
  return (
    <section className="relative min-h-[70vh] w-full bg-cover bg-center">
      <div className="container mx-auto relative z-10 py-20 md:py-32">
        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-sm font-medium text-primary">Speisekarte</p>
          <h1>
            Unsere Spezialitäten
          </h1>
          <p className="text-muted-foreground text-body-lg">
            Entdecken Sie unsere einzigartige Auswahl an handwerklich gefertigten
            Burgern und authentischen Grillgerichten.
          </p>
          <Button size="lg" className="w-fit" asChild>
            <a href="tel:+41772905231">
              <Phone className="size-4" />
              Jetzt Bestellen
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&q=80"
          alt="BY THE WAY Speisekarte Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </section>
  );
};

export { Hero217 };
