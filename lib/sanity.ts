import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2022-03-25',
  useCdn: process.env.NODE_ENV === 'production',
});

export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(publishedAt desc)`);
}

export async function getProject(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc)`);
}

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc)`);
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(order asc)`);
}