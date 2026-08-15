import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { projects } from '@/content/work'
import { locations } from '@/content/locations'

const baseUrl = 'https://intvarautomation.online'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }))

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
    'software-development', 'website-development'
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
      url: `${baseUrl}/demos`,
      lastModified: new Date(),
    },
    ...blogUrls,
    ...workUrls,
    ...locationUrls,
    ...industryUrls,
    ...serviceUrls,
  ]
}
