import type { ReactNode } from 'react';
import { Oswald, DM_Sans } from 'next/font/google';
import "./globals.css";
import { Banner4 } from '@/components/banner4';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="de" className={`${oswald.variable} ${dmSans.variable}`}>
        <body>
        <Banner4
          title="Jetzt bestellen!"
          description="Kostenlose Lieferung ab CHF 15 in Steinmaur und Umgebung."
          buttonText="077 290 52 31"
          buttonUrl="tel:+41772905231"
        />
        { children }
        </body>
        </html>
    )
}
