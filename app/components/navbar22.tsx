"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar22 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Startseite", href: "/de" },
    { name: "Speisekarte", href: "/de/speisekarte" },
    { name: "Über uns", href: "/de/ueber-uns" },
  ];

  return (
    <section className="bg-background text-foreground py-4">
      <div className="container mx-auto">
        <nav className="border-border w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 md:hidden">
                <Link href="/de" className="text-lg font-semibold tracking-tighter">
                  BY THE WAY
                </Link>
              </div>

              <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:block">
                <Link href="/de" className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tighter">
                    BY THE WAY
                  </span>
                </Link>
              </div>
              <div className="text-muted-foreground hidden items-center space-x-2 text-sm md:flex">
                <span className="font-medium">Steinmaur</span>
                <span className="text-muted-foreground">/</span>
                <a href="tel:+41772905231" className="font-medium hover:text-foreground">
                  077 290 52 31
                </a>
              </div>

              <div className="hidden items-center space-x-8 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground group relative inline-block h-6 overflow-hidden text-sm font-medium"
                  >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    <span className="text-muted-foreground border-border absolute left-0 top-full block w-full transition-transform duration-300 group-hover:translate-y-[-100%] group-hover:border-b">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Menü öffnen</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="top" className="h-screen">
                    <SheetTitle className="sr-only">Navigation</SheetTitle>

                    <div className="m-4 flex flex-col space-y-6">
                      <div className="ml-3">
                        <Link
                          href="/de"
                          className="text-foreground flex items-center justify-start gap-2 text-2xl font-bold"
                          onClick={() => setIsOpen(false)}
                        >
                          BY THE WAY
                        </Link>
                      </div>
                      <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-4 py-2 text-lg font-medium transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-border border-t pt-6">
                        <div className="text-muted-foreground text-center text-sm">
                          <div className="font-medium">Steinmaur</div>
                          <a href="tel:+41772905231" className="mt-1 block hover:text-foreground">
                            077 290 52 31
                          </a>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { Navbar22 };
