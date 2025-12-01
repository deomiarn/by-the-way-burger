"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Link from "next/link";

import { ChevronRight, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const burgerImages = [
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", alt: "Smash Burger mit Cheddar" },
  { src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80", alt: "Double Cheeseburger" },
  { src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80", alt: "Bacon Burger" },
  { src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80", alt: "Gourmet Burger" },
];

const Hero85 = () => {
  return (
    <section className="py-20 bg-input" id="menu-preview">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="mx-auto">
            <div className="flex w-fit items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-medium">
              <Badge>Premium</Badge>
              Smash Burgers & Balkan Grill
            </div>
            <h2 className="mb-4 mt-10">
              Unsere Spezialitäten - Smash Burgers, Balkan Grill & Premium Gerichte
            </h2>
            <p className="text-muted-foreground mx-auto text-body-lg">
              Bei BY THE WAY vereinen wir das Beste aus zwei kulinarischen Welten: saftige amerikanische Smash Burger und authentische Balkan Grillspezialitäten. Alle Burger werden mit 100% Schweizer Rindfleisch zubereitet.
            </p>
            <div className="mt-10 flex flex-col gap-2 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/de/speisekarte">
                  Zur Speisekarte
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="tel:+41772905231">
                  <Phone className="size-4" />
                  Jetzt bestellen
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:hidden">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ speed: 0.8 })]}
              className="-mx-7"
            >
              <CarouselContent className="max-h-[350px]">
                {burgerImages.map((img, i) => (
                  <CarouselItem key={i} className="max-w-96">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-lg object-cover h-[300px] w-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden grid-cols-2 gap-8 lg:grid">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ speed: 0.8 })]}
              orientation="vertical"
            >
              <CarouselContent className="max-h-[600px]">
                {burgerImages.slice(0, 2).map((img, i) => (
                  <CarouselItem key={i}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-lg object-cover h-[280px] w-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ speed: 0.8, direction: "backward" })]}
              orientation="vertical"
            >
              <CarouselContent className="max-h-[600px]">
                {burgerImages.slice(2, 4).map((img, i) => (
                  <CarouselItem key={i}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-lg object-cover h-[280px] w-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero85 };
