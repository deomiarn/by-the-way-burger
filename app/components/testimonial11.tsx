import { Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: "testimonial-1",
    text: "Die besten Burger in Steinmaur! Frische Zutaten, perfekt gegrillt, und die Balkan Spezialitäten sind authentisch und lecker. Absolute Empfehlung!",
    name: "Stefan M.",
    company: "Google Reviews",
    initials: "SM",
  },
  {
    id: "testimonial-2",
    text: "Als Balkanerin kann ich bestätigen - die Cevapcici sind wie zu Hause! Die Smash Burger sind auch fantastisch.",
    name: "Marina K.",
    company: "TripAdvisor",
    initials: "MK",
  },
  {
    id: "testimonial-3",
    text: "Tolles Grillhaus mit riesiger Auswahl. Von klassischen Burgern bis zu Balkan Grill - alles perfekt. Schneller Service, faire Preise.",
    name: "Thomas R.",
    company: "Google Reviews",
    initials: "TR",
  },
  {
    id: "testimonial-4",
    text: "Habe schon viele Burger-Restaurants probiert, aber BY THE WAY ist definitiv das beste in Steinmaur! Riesige Portionen, super Service.",
    name: "Julia S.",
    company: "Google Reviews",
    initials: "JS",
  },
  {
    id: "testimonial-5",
    text: "Endlich ein Restaurant in Steinmaur, das Qualität ernst nimmt! Die Burger sind saftig, die Balkan Spezialitäten authentisch.",
    name: "Peter S.",
    company: "Google Reviews",
    initials: "PS",
  },
  {
    id: "testimonial-6",
    text: "Bestes Grillhaus weit und breit. Schweizer Fleisch, faire Preise, riesige Portionen. Die Smash Burgers sind legendär!",
    name: "Michael L.",
    company: "Google Reviews",
    initials: "ML",
  },
];

const Testimonial11 = () => {
  return (
    <section className="bg-input text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-32">
          <div className="flex flex-1 flex-col items-start text-left">
            <h2 className="my-6 text-pretty">
              Was unsere Kunden sagen
            </h2>
            <p className="text-muted-foreground max-w-3xl text-body-lg">
              Über 500 zufriedene Kunden vertrauen uns für die besten Burger und Balkan Spezialitäten in Steinmaur.
            </p>
          </div>
          <div className="block shrink-0 flex-row gap-12 sm:flex sm:flex-col lg:flex-row lg:gap-24">
            <div className="mb-8 mr-8 inline-block sm:mb-0 sm:mr-0">
              <p className="mb-4 text-lg font-semibold">Google Reviews</p>
              <div className="flex items-center">
                <div className="mr-4 shrink-0 text-sm font-semibold">
                  4.7 / 5
                </div>
                <div className="flex items-center gap-0.5">
                  <Star className="fill-primary size-5 stroke-none" />
                  <Star className="fill-primary size-5 stroke-none" />
                  <Star className="fill-primary size-5 stroke-none" />
                  <Star className="fill-primary size-5 stroke-none" />
                  <Star className="fill-primary size-5 stroke-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 sm:mt-0">
        <div className="w-full columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background mb-4 inline-block w-full rounded-2xl border border-border p-6 lg:mb-6"
            >
              <div className="flex flex-col">
                <p className="mb-4 text-sm">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-1 md:gap-2">
                  <Avatar className="size-8 md:size-10">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-xs font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial11 };
