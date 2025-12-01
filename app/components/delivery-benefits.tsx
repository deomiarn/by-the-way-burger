import { Truck, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Truck className="size-6" />,
    title: "Gratis Lieferung",
    description: "Ab 15 CHF Bestellwert liefern wir kostenlos nach Steinmaur und Dielsdorf.",
  },
  {
    icon: <Clock className="size-6" />,
    title: "Schnelle Zubereitung",
    description: "Frisch zubereitet - Ihre Bestellung ist in 15-25 Minuten bereit.",
  },
  {
    icon: <MapPin className="size-6" />,
    title: "Zentrale Lage",
    description: "Besuchen Sie uns in Steinmaur oder bestellen Sie bequem zum Mitnehmen.",
  },
];

const DeliveryBenefits = () => {
  return (
    <section className="py-20 md:py-32 bg-input">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2>
              Bestellen leicht gemacht
            </h2>
            <p className="text-muted-foreground text-body-lg">
              Geniessen Sie unsere Spezialitäten ganz bequem. Ob Abholung vor Ort oder
              Lieferung direkt zu Ihnen - wir machen es möglich.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-background"
                >
                  <div className="text-primary mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-border bg-background">
            <h3>Jetzt bestellen</h3>
            <p className="text-muted-foreground">
              Rufen Sie uns an oder besuchen Sie uns direkt. Wir freuen uns auf Ihre Bestellung!
            </p>
            <Button size="lg" className="w-fit" asChild>
              <a href="tel:+41772905231">
                <Phone className="size-4" />
                077 290 52 31
              </a>
            </Button>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Öffnungszeiten:</strong><br />
                Mo-Fr: 11:00 - 21:00<br />
                Sa-So: 12:00 - 22:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DeliveryBenefits };
