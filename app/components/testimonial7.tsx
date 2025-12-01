"use client";

import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonial7 = () => {
  const t = useTranslations("ueberUns.testimonials");

  const testimonials = [
    {
      id: "testimonial-1",
      text: t("testimonial1Text"),
      name: t("testimonial1Author"),
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      rating: 5,
    },
    {
      id: "testimonial-2",
      text: t("testimonial2Text"),
      name: t("testimonial2Author"),
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      rating: 5,
    },
    {
      id: "testimonial-3",
      text: t("testimonial3Text"),
      name: t("testimonial3Author"),
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      rating: 5,
    },
    {
      id: "testimonial-4",
      text: t("testimonial4Text"),
      name: t("testimonial4Author"),
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-border bg-input p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm flex-1">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>★</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial7 };
