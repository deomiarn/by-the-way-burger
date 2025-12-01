import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero87 = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center gap-6">
            <h2>
              Jetzt Bestellen
            </h2>
            <p className="text-muted-foreground text-body-lg">
              Kontaktieren Sie uns für Ihre Bestellung. Lieferung ab 15 CHF
              kostenfrei. Schnelle, freundliche Bedienung garantiert.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+41772905231">
                  <Phone className="size-4" />
                  Anrufen: 077 290 52 31
                </a>
              </Button>
            </div>
          </div>
          <div className="h-80 overflow-hidden rounded-2xl border border-border bg-input">
            <img
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80"
              alt="Burger bestellen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero87 };
