import { Metadata } from 'next';
import { Navbar22 } from '@/components/navbar22';
import { Hero174 } from '@/components/hero174';
import { FoodMenu } from '@/components/food-menu/food-menu';
import { Stats1 } from '@/components/stats1';
import { Feature60 } from '@/components/feature60';
import { FAQ5 } from '@/components/faq5';
import { Hero87 } from '@/components/hero87';
import { DeliveryBenefits } from '@/components/delivery-benefits';
import { Footer24 } from '@/components/footer24';

const BASE_URL = 'https://bytheway.ch';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Speisekarte - Smash Burger, Balkan Grill & Grillspezialitäten in Steinmaur',
    description: 'Willkommen zu unserer Speisekarte mit 38 handverlesenen Gerichten! Von klassischen Smash Burgern über authentische Balkan Spezialitäten bis zu Premium Kreationen - hier finden Sie garantiert Ihr neues Lieblingsgericht. Alle Burger werden mit 100% Schweizer Rindfleisch, frischen Zutaten und hausgemachten Saucen zubereitet. Take-away oder Lieferung? Wir bringen Ihnen die besten Burger in Steinmaur direkt nach Hause - gratis ab 15 CHF!',
    alternates: {
      canonical: `${BASE_URL}/de/speisekarte`,
    },
    openGraph: {
      title: 'Speisekarte - Smash Burger, Balkan Grill & Grillspezialitäten in Steinmaur',
      description: 'Willkommen zu unserer Speisekarte mit 38 handverlesenen Gerichten! Von klassischen Smash Burgern über authentische Balkan Spezialitäten bis zu Premium Kreationen - hier finden Sie garantiert Ihr neues Lieblingsgericht. Alle Burger werden mit 100% Schweizer Rindfleisch, frischen Zutaten und hausgemachten Saucen zubereitet. Take-away oder Lieferung? Wir bringen Ihnen die besten Burger in Steinmaur direkt nach Hause - gratis ab 15 CHF!',
      url: `${BASE_URL}/de/speisekarte`,
      siteName: 'BY THE WAY - BURGER & GRILLHAUS',
      locale: 'de_CH',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-menu.jpg`,
          width: 1200,
          height: 630,
          alt: 'BY THE WAY Speisekarte - Burger und Grillspezialitäten',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Speisekarte - Smash Burger, Balkan Grill & Grillspezialitäten in Steinmaur',
      description: 'Willkommen zu unserer Speisekarte mit 38 handverlesenen Gerichten! Von klassischen Smash Burgern über authentische Balkan Spezialitäten bis zu Premium Kreationen - hier finden Sie garantiert Ihr neues Lieblingsgericht. Alle Burger werden mit 100% Schweizer Rindfleisch, frischen Zutaten und hausgemachten Saucen zubereitet. Take-away oder Lieferung? Wir bringen Ihnen die besten Burger in Steinmaur direkt nach Hause - gratis ab 15 CHF!',
      images: [`${BASE_URL}/og-menu.jpg`],
    },
  };
}

export default function MenuPage() {
  return (
    <>
      <Navbar22 />
      <Hero174
        title="Unsere Speisekarte"
        description="Entdecken Sie unsere vielfältige Auswahl an Smash Burgern, Balkan Grillspezialitäten und hausgemachten Gerichten."
        primaryButtonText="Jetzt bestellen"
        primaryButtonHref="tel:+41772905231"
        secondaryButtonText="Über uns"
        secondaryButtonHref="/de/ueber-uns"
        backgroundImage="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1920&q=80"
        scrollTargetId="speisekarte"
      />
      <FoodMenu />
      <Stats1 variant="muted" />
      <Feature60 />
      <Feature60
        title="Frische Zutaten, jeden Tag"
        description="Qualität beginnt bei den Zutaten. Wir beziehen unser Fleisch von lokalen Schweizer Bauern und verwenden nur die frischesten Produkte. Keine Kompromisse, nur Geschmack."
        imageSrc="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80"
        imageAlt="Frische Zutaten für Burger"
        imagePosition="right"
        removeTopPadding
      />
      <FAQ5 />
      <Hero87 />
      <DeliveryBenefits />
      <Footer24 />
    </>
  );
}
