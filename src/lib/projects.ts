import ediblesVideo from '@/assets/edibles-ugc.mp4.asset.json';
import ediblesPoster from '@/assets/edibles-poster.jpg.asset.json';
import trueveApplication from '@/assets/trueve-application.mp4.asset.json';
import trueveSocial from '@/assets/trueve-social.mp4.asset.json';

export type Project = {
  slug?: string;
  title: string;
  category: string;
  image: string;
  videos?: string[];
  description?: string;
  span: string;
  aspect: string;
};

export const projects: Project[] = [
  {
    title: 'Aether — Skincare Campaign',
    category: 'AI Visuals',
    image:
      'https://images.pexels.com/photos/8015777/pexels-photo-8015777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Form Studio — 3D Renders',
    category: '3D Shoot',
    image:
      'https://images.pexels.com/photos/29636880/pexels-photo-29636880.jpeg?auto=compress&cs=tinysrgb&w=1000',
    span: 'lg:col-span-5',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Nuit — Fragrance Editorial',
    category: 'Product Photoshoot',
    image:
      'https://images.pexels.com/photos/18848964/pexels-photo-18848964.jpeg?auto=compress&cs=tinysrgb&w=1000',
    span: 'lg:col-span-5',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Onyx — Beverage Commercial',
    category: 'Commercial Ad Shoot',
    image:
      'https://images.pexels.com/photos/36698524/pexels-photo-36698524.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
  },
  {
    slug: 'trueve',
    title: 'Trueve App — Social Media',
    category: 'AI Influencer / Consistent Characters',
    image:
      'https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=1000',
    videos: [trueveApplication.url, trueveSocial.url],
    description:
      'Social media content for the Trueve app — consistent AI characters used across a full campaign of short-form videos.',
    span: 'lg:col-span-5',
    aspect: 'aspect-[3/4]',
  },
  {
    slug: 'edibles',
    title: 'Edibles Candy — Brand Story',
    category: 'AI UGC / Brand Film',
    image: ediblesPoster.url,
    videos: [ediblesVideo.url],
    description:
      'AI UGC and brand story films for Edibles Candy — street-lit visuals and a bold graffiti identity.',
    span: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
