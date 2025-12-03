import { ArrowDown, ChevronRight, Phone } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface Hero174Props {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
  scrollTargetId?: string;
}

const Hero174 = ({
  title = "Authentische Smash Burgers & Balkan Grillspezialitäten",
  description = "Frische Zutaten aus der Region. Hausgemachte Saucen. 100% Schweizer Rindfleisch.",
  primaryButtonText = "Speisekarte ansehen",
  primaryButtonHref = "/de/speisekarte",
  secondaryButtonText = "Jetzt bestellen",
  secondaryButtonHref = "tel:+41772905231",
  backgroundImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80",
  scrollTargetId = "menu-preview",
}: Hero174Props) => {
  return (
    <Fragment>
      <section
        className="font-dm_sans dark relative h-[90svh] max-h-[1200px] min-h-[650px] w-full overflow-hidden bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:block after:size-full after:bg-zinc-950/60 after:content-['']"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="relative z-10 mx-auto flex size-full max-w-[125rem] px-4 pt-20 pb-9 md:py-9">
          <div className="flex w-full flex-col justify-end gap-20 md:justify-between md:gap-24">
            <div className="mx-auto flex max-w-[31.25rem] flex-col items-center justify-center gap-5 md:flex-1 md:gap-7 sm:max-w-[37.5rem] md:max-w-[50rem]">
              <h1 className="text-white text-center">
                {title}
              </h1>
              <p className="text-white/90 text-balance text-center text-body-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  {primaryButtonHref.startsWith("tel:") ? (
                    <a href={primaryButtonHref}>
                      <Phone className="size-4" />
                      {primaryButtonText}
                    </a>
                  ) : (
                    <Link href={primaryButtonHref}>
                      {primaryButtonText}
                      <ChevronRight className="size-4" />
                    </Link>
                  )}
                </Button>
                <Button asChild variant="outline" size="lg">
                  {secondaryButtonHref.startsWith("tel:") ? (
                    <a href={secondaryButtonHref}>
                      <Phone className="size-4" />
                      {secondaryButtonText}
                    </a>
                  ) : (
                    <Link href={secondaryButtonHref}>
                      {secondaryButtonText}
                      <ChevronRight className="size-4" />
                    </Link>
                  )}
                </Button>
              </div>
            </div>
            <div className="flex shrink-0 items-center justify-between gap-4 rounded-lg bg-black/30 px-4 py-3 backdrop-blur-sm md:px-6 md:py-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary h-8 w-1"></div>
                <div className="text-white/80 text-sm font-medium">
                  <p className="text-white">BY THE WAY - BURGER & GRILLHAUS</p>
                  <p>Wehntalerstrasse 1, 8162 Steinmaur</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a href={`#${scrollTargetId}`}>
                  <ArrowDown className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export { Hero174 };
