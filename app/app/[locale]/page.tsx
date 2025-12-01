import { Metadata } from 'next';
import { Navbar22 } from '@/components/navbar22';
import { Hero174 } from '@/components/hero174';
import { Stats1 } from '@/components/stats1';
import { Hero85 } from '@/components/hero85';
import { Feature137 } from '@/components/feature137';
import { Gallery25 } from '@/components/gallery25';
import { Testimonial11 } from '@/components/testimonial11';
import { Contact4 } from '@/components/contact4';
import { Footer24 } from '@/components/footer24';

const BASE_URL = 'https://bytheway.ch';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Burger Steinmaur: Authentische Smash Burgers & Balkan Grillspezialitäten bei BY THE WAY',
        description: 'Willkommen bei BY THE WAY - Ihrem Grillhaus für saftige Smash Burger und authentische Balkan Spezialitäten. Wir servieren die besten Burger in Steinmaur mit frischen, regionalen Zutaten und traditionellen Rezepten. Jetzt bestellen unter 077 290 52 31!',
        alternates: {
            canonical: `${ BASE_URL }/de`,
        },
        openGraph: {
            title: 'Burger Steinmaur: Authentische Smash Burgers & Balkan Grillspezialitäten bei BY THE WAY',
            description: 'Willkommen bei BY THE WAY - Ihrem Grillhaus für saftige Smash Burger und authentische Balkan Spezialitäten. Wir servieren die besten Burger in Steinmaur mit frischen, regionalen Zutaten und traditionellen Rezepten. Jetzt bestellen unter 077 290 52 31!',
            url: `${ BASE_URL }/de`,
            siteName: 'BY THE WAY - BURGER & GRILLHAUS',
            locale: 'de_CH',
            type: 'website',
            images: [
                {
                    url: `${ BASE_URL }/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'BY THE WAY - Smash Burger und Balkan Grillspezialitäten in Steinmaur',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Burger Steinmaur: Authentische Smash Burgers & Balkan Grillspezialitäten bei BY THE WAY',
            description: 'Willkommen bei BY THE WAY - Ihrem Grillhaus für saftige Smash Burger und authentische Balkan Spezialitäten. Wir servieren die besten Burger in Steinmaur mit frischen, regionalen Zutaten und traditionellen Rezepten. Jetzt bestellen unter 077 290 52 31!',
            images: [ `${ BASE_URL }/og-image.jpg` ],
        },
    };
}

export default function HomePage() {
    return (
        <>
            <div className="w-full">
                <Navbar22 />
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full">
                    <Hero174 />
                </div>
            </div>

            <div className="w-full flex justify-center bg-background">
                <div className="w-full">
                    <Stats1 />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full">
                    <Hero85 />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full">
                    <Feature137 />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full">
                    <Gallery25 />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full">
                    <Testimonial11 />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full">
                    <Contact4 />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full">
                    <Footer24 />
                </div>
            </div>
        </>
    );
}
