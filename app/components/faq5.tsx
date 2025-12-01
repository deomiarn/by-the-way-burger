"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "Welche Allergen sind in unseren Produkten enthalten?",
    answer:
      "Unsere Produkte können Spuren von Nüssen, Gluten, Milch und Eiern enthalten. Bitte fragen Sie unser Personal für detaillierte Informationen zu spezifischen Allergenen.",
  },
  {
    id: "faq-2",
    question: "Haben Sie vegetarische oder vegane Optionen?",
    answer:
      "Ja, wir bieten vegetarische Burger und vegane Optionen an. Schauen Sie sich unsere Speisekarte an oder fragen Sie unser Personal nach Empfehlungen.",
  },
  {
    id: "faq-3",
    question: "Wo beziehen Sie Ihre Zutaten?",
    answer:
      "Wir beziehen unsere Zutaten von lokalen Lieferanten in der Region Steinmaur und Umgebung. Frische und Qualität sind unsere oberste Priorität.",
  },
  {
    id: "faq-4",
    question: "Bieten Sie Lieferung an?",
    answer:
      "Ja, wir bieten kostenlose Lieferung ab 15 CHF an. Kontaktieren Sie uns unter 077 290 52 31 für Lieferbestellungen.",
  },
  {
    id: "faq-5",
    question: "Kann ich vor Ort reservieren?",
    answer:
      "Ja, reservieren Sie einen Tisch, indem Sie uns anrufen oder vorbeischauen. Wir freuen uns auf Ihren Besuch!",
  },
];

const FAQ5 = () => {
  return (
    <section className="py-20 md:py-32 bg-input">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-muted-foreground text-body-lg">
            Finden Sie Antworten auf häufige Fragen zu unseren Produkten und
            Dienstleistungen.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-background rounded-2xl border border-border px-6 data-[state=open]:bg-background"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { FAQ5 };
