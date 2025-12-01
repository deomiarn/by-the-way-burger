import { ChevronRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Contact4 = () => {
  return (
    <section className="pt-20 bg-background text-foreground" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-xl">
          <p className="text-muted-foreground mb-3 text-label">
            Kontakt
          </p>
          <h2 className="text-balance">
            Besuchen Sie uns in Steinmaur
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:mt-20 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-input border border-border p-6 ">
            <div>
              <h3 className="mb-4">Jetzt bestellen</h3>
              <p className="text-muted-foreground">
                Rufen Sie uns an für Take-away oder Lieferung. Gratis Lieferung ab 15 CHF in Steinmaur und Dielsdorf.
              </p>
            </div>
            <Button variant="link" className="p-0 h-auto" asChild>
              <a href="tel:+41772905231">
                <Phone className="size-4" />
                077 290 52 31
              </a>
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-input border border-border p-6 ">
            <div>
              <h3 className="mb-4">Öffnungszeiten</h3>
              <p className="text-muted-foreground">
                Mi-Fr: 11:00-13:30 & 17:00-21:00<br />
                Sa-So: 13:00-21:00<br />
                Mo-Di: Geschlossen
              </p>
            </div>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/de/speisekarte">
                Speisekarte ansehen
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-input border border-border p-6 ">
            <div>
              <h3 className="mb-4">Unser Standort</h3>
              <p className="text-muted-foreground">
                BY THE WAY - BURGER & GRILLHAUS<br />
                Wehntalerstrasse 1<br />
                8162 Steinmaur
              </p>
            </div>
            <Button variant="link" className="p-0 h-auto" asChild>
              <a
                href="https://maps.google.com/?q=Wehntalerstrasse+1+8162+Steinmaur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="size-4" />
                Route planen
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-7">
          <div className="relative flex h-full flex-col overflow-hidden rounded-lg md:max-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.8!2d8.4567!3d47.4967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI5JzQ4LjEiTiA4wrAyNycyNC4xIkU!5e0!3m2!1sde!2sch!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
              title="BY THE WAY Standort Steinmaur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact4 };
