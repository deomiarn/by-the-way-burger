'use client';

import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { menuCategories } from './menu-data';
import { MenuItem } from './menu-item';

export function FoodMenu() {
  return (
    <section id="speisekarte" className="w-full bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-2">Unsere Speisekarte</h2>
          <p className="text-muted-foreground">
            Entdecke unsere 9 Kategorien mit über 30 leckeren Gerichten
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="smash-burgers" className="w-full space-y-2">
            {menuCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border border-border rounded-lg overflow-hidden bg-card data-[state=open]:bg-card/80 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline px-4 py-3 hover:bg-muted/30 transition-colors [&[data-state=open]]:bg-primary/10 [&>svg]:hidden">
                  <div className="flex items-center w-full">
                    <span className="text-base font-medium">{category.name}</span>
                    <Badge variant="outline" className="ml-auto mr-3 bg-primary/10 text-primary border-primary/20 text-xs">
                      {category.items.length}
                    </Badge>
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 [[data-state=open]_&]:rotate-180" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {category.items.map((item) => (
                      <MenuItem
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
