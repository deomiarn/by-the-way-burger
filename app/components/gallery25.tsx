"use client";

import { motion } from "framer-motion";
import React from "react";

const Gallery25 = () => {
  const mobileImages = [
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      alt: "Smash Burger mit Cheddar und frischen Toppings",
    },
    {
      src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80",
      alt: "Gourmet Bacon Burger",
    },
    {
      src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80",
      alt: "Premium Burger mit Zwiebeln",
    },
    {
      src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
      alt: "Gegrilltes Fleisch auf dem Grill",
    },
    {
      src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
      alt: "Double Cheeseburger mit Bacon",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
      alt: "Saftige Grillspezialitäten",
    },
  ];

  const column1Images = [
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      alt: "Smash Burger mit Cheddar und frischen Toppings",
      height: "23rem",
    },
    {
      src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
      alt: "Double Cheeseburger mit Bacon",
      height: "28rem",
    },
    {
      src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80",
      alt: "Klassischer Burger mit Pommes",
      height: "12rem",
    },
  ];

  const column2Images = [
    {
      src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80",
      alt: "Gourmet Bacon Burger",
      height: "13rem",
    },
    {
      src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80",
      alt: "Premium Burger mit Zwiebeln",
      height: "32rem",
    },
    {
      src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80",
      alt: "Burger mit Pommes Frites",
      height: "18rem",
    },
  ];

  const column3Images = [
    {
      src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
      alt: "Gegrilltes Fleisch auf dem Grill",
      height: "32rem",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
      alt: "Saftige Grillspezialitäten",
      height: "32rem",
    },
  ];

  const column4Images = [
    {
      src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
      alt: "Burger mit Salat und Tomaten",
      height: "13rem",
    },
    {
      src: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=600&q=80",
      alt: "Knusprige Pommes Frites",
      height: "22.5rem",
    },
    {
      src: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80",
      alt: "Chicken Burger mit Coleslaw",
      height: "22rem",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 relative">
        <h2 className="mb-12 text-center">Unsere Kreationen</h2>

        {/* Mobile Layout - Simple 2-column grid with aspect ratio */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {mobileImages.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={index}
              className="bg-muted w-full overflow-hidden rounded-xl aspect-square"
            >
              <img
                className="h-full w-full rounded-xl object-cover"
                src={image.src}
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout - 4-column masonry */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="grid gap-4">
            {column1Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-muted w-full overflow-hidden rounded-2xl"
                style={{ height: image.height }}
              >
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid gap-4">
            {column2Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-muted w-full overflow-hidden rounded-2xl"
                style={{ height: image.height }}
              >
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid gap-4">
            {column3Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-muted w-full overflow-hidden rounded-2xl"
                style={{ height: image.height }}
              >
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </motion.div>
            ))}
          </div>

          {/* Column 4 */}
          <div className="grid gap-4">
            {column4Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-muted w-full overflow-hidden rounded-2xl"
                style={{ height: image.height }}
              >
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery25 };
