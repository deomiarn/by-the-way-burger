interface StructuredDataProps {
  locale: string;
  page?: 'home' | 'speisekarte' | 'ueber-uns' | 'impressum' | 'datenschutz';
}

const BASE_URL = 'https://bytheway.ch';

export function StructuredData({ locale, page = 'home' }: StructuredDataProps) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BY THE WAY - BURGER & GRILLHAUS',
    url: BASE_URL,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41 77 290 52 31',
      contactType: 'customer service',
      availableLanguage: ['German'],
    },
    sameAs: ['https://www.instagram.com/bytheway.ch/'],
  };

  const restaurant = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${BASE_URL}/#restaurant`,
    name: 'BY THE WAY - BURGER & GRILLHAUS',
    description: 'Authentische Burger Steinmaur & Balkan Grillspezialitäten mit 100% Schweizer Rindfleisch. Smash Burgers, Cevapcici und Pljeskavica nach traditionellen Rezepten.',
    url: `${BASE_URL}/${locale}`,
    telephone: '+41 77 290 52 31',
    email: 'info@bytheway.ch',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wehntalerstrasse 1',
      addressLocality: 'Steinmaur',
      postalCode: '8162',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.4903,
      longitude: 8.4667,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '13:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
        opens: '17:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '13:00',
        closes: '21:00',
      },
    ],
    servesCuisine: ['American', 'Balkan', 'Swiss'],
    menu: `${BASE_URL}/de/speisekarte`,
    acceptsReservations: 'False',
  };

  const breadcrumbLabels: Record<string, Record<string, string>> = {
    de: {
      home: 'Startseite',
      speisekarte: 'Speisekarte',
      'ueber-uns': 'Über uns',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
    },
  };

  const getBreadcrumb = () => {
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: breadcrumbLabels[locale]?.home || 'Home',
        item: `${BASE_URL}/${locale}`,
      },
    ];

    if (page !== 'home') {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbLabels[locale]?.[page] || page,
        item: `${BASE_URL}/${locale}/${page}`,
      });
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  };

  const schemas = [organization, restaurant, getBreadcrumb()];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
