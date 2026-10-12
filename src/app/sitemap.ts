import { MetadataRoute } from 'next'
import { getDbConnection } from '@/lib/db'
import { projects } from '@/content/work'
import { locations } from '@/content/locations'
import { RowDataPacket } from 'mysql2/promise'

const baseUrl = 'https://intvarautomation.online'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch blog posts from DB for sitemap
  let blogUrls: { url: string, lastModified: Date }[] = [];
  try {
    const connection = await getDbConnection();
    const [rows] = await connection.execute<RowDataPacket[]>('SELECT slug, published_at FROM blog');
    await connection.end();
    
    if (rows && rows.length > 0) {
      blogUrls = rows.map((row) => ({
        url: `${baseUrl}/blog/${row.slug}`,
        lastModified: row.published_at ? new Date(row.published_at) : new Date(),
      }));
    }
  } catch {
    // MySQL not reachable or offline, fallback to static post
  }

  if (blogUrls.length === 0) {
    blogUrls = [
      {
        url: `${baseUrl}/blog/why-local-businesses-in-rajasthan-need-custom-software`,
        lastModified: new Date('2026-03-15'),
      }
    ];
  }

  const workUrls = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
  }))

  const locationUrls = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
  }))

  const industries = [
    'clinics', 'gyms', 'hotels', 'manufacturing', 
    'real-estate', 'restaurants', 'retail', 'schools'
  ];

  const servicesUrlsList = [
    'ai-solutions', 'android-app-development', 'business-automation',
    'software-development', 'website-development', 'whatsapp-automation',
    'mobile-app-development-rajasthan', 'android-app-development-jodhpur',
    'software-development-alwar', 'software-app-development-jaipur',
    'software-development-bhiwadi'
  ];

  const industryUrls = industries.map(ind => ({
    url: `${baseUrl}/industries/${ind}`,
    lastModified: new Date(),
  }));

  const serviceUrls = servicesUrlsList.map(srv => ({
    url: `${baseUrl}/services/${srv}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
    },
    ...blogUrls,
    ...workUrls,
    ...locationUrls,
    ...industryUrls,
    ...serviceUrls,
  ]
}
