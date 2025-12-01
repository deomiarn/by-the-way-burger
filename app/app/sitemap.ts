import { MetadataRoute } from 'next';

const BASE_URL = 'https://bytheway.ch';

const pages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/speisekarte', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/ueber-uns', priority: 0.8, changeFrequency: 'monthly' as const },
];

const locales = ['de'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
