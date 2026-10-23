import type { Component } from 'vue'
import { Zap, Sparkles, Shield, Smartphone, Globe, Code, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-vue-next'
import heroImage from '@/assets/hero.webp'

/**
 * Single source of truth for site copy, links, and sample content.
 * Start here when turning the starter into a client site: components read
 * from this file instead of hardcoding text.
 */

export interface NavLink { title: string, href: string }

export const site = {
  name: 'Lorien',
  wordmark: 'LORIEN.',
  legalName: 'Lorien Digital',
  tagline: 'Crafting digital experiences that elevate brands and engage audiences.',
}

export const nav: { links: NavLink[], cta: NavLink } = {
  links: [
    { title: 'Home', href: '#' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Features', href: '#features' },
    { title: 'Leadership', href: '#leadership' },
    { title: 'FAQ', href: '#faq' },
  ],
  cta: { title: 'Get Started', href: '#contact' },
}

export const hero = {
  badge: 'Welcome',
  title: 'A starter for fast, accessible marketing sites',
  subtitle: 'Vue 3, Vite, and Tailwind v4, with sections you can reorder, restyle, and fill from one config file.',
  ctaText: 'Explore',
  ctaHref: '#testimonials',
  image: heroImage,
}

export const about = {
  kicker: 'The Approach',
  title: "We don't just build websites. We engineer digital experiences.",
  paragraphs: [
    'Our approach bridges visual design and software engineering. Every component is built to look good and to hold up under real traffic.',
    'We use the Composition API and a small set of composables to keep sections consistent and easy to change.',
  ],
  imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  imageAlt: 'Developer coding on multiple screens',
  ctaText: 'Learn About Our Process',
  ctaHref: '#features',
}

export interface FeatureItem { id: string, title: string, description: string, icon: Component }

export const features: FeatureItem[] = [
  { id: 'f1', title: 'Fast by default', description: 'Vite and Vue 3 keep dev feedback instant and the production bundle small.', icon: Zap },
  { id: 'f2', title: 'Considered design', description: 'A restrained palette, a clear type scale, and motion that respects reduced-motion settings.', icon: Sparkles },
  { id: 'f3', title: 'Accessible', description: 'Skip link, labelled controls, focus management, and 44px touch targets built in.', icon: Shield },
  { id: 'f4', title: 'Responsive', description: 'Layouts tested from small phones to wide desktop monitors.', icon: Smartphone },
  { id: 'f5', title: 'Static deploys', description: 'Builds to plain static files that run on Vercel, Netlify, or any CDN.', icon: Globe },
  { id: 'f6', title: 'Typed and tidy', description: 'TypeScript props, a single content config, and small composables instead of copy-paste.', icon: Code },
]

export const testimonials = [
  { id: '1', name: 'Sarah Chen', role: 'VP of Engineering', company: 'TechFlow', content: 'Sample testimonial. Replace with a real quote from a real client, with their permission.', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop' },
  { id: '2', name: 'Marcus Johnson', role: 'Founder & CEO', company: 'Lumina', content: 'Sample testimonial without an avatar, to show the initial fallback.' },
  { id: '3', name: 'Elena Rodriguez', role: 'Product Director', company: 'Nova Systems', content: 'Sample testimonial. Cards stretch to equal height, so quote length can vary.', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop' },
  { id: '4', name: 'David Kim', role: 'CTO', company: 'Zephyr Tech', content: 'Sample testimonial. The carousel shows one, two, or three cards depending on viewport width.', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop' },
  { id: '5', name: 'Emily White', role: 'Lead Developer', company: 'Innovate Corp', content: 'Sample testimonial. Swap these for real client quotes before launch.', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
]

const unsplash = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`

export const galleryHighlights = [
  { id: 'img1', src: unsplash('photo-1498050108023-c5249f4df085'), alt: 'Developer coding', title: 'Engineering', description: 'Working through architecture problems.' },
  { id: 'img2', src: unsplash('photo-1555066931-4365d14bab8c'), alt: 'Code on screen', title: 'Clean code', description: 'Maintainable, documented codebases.' },
  { id: 'img3', src: unsplash('photo-1522071820081-009f0129c71c'), alt: 'Team collaboration', title: 'Collaboration', description: 'Solving problems together with clients.' },
]

export const galleryPhotos = [
  { id: 'p1', src: unsplash('photo-1498050108023-c5249f4df085'), alt: 'Developer coding on multiple screens', title: 'Engineering', description: 'The core engineering team at work.' },
  { id: 'p2', src: unsplash('photo-1550439062-609e1531270e'), alt: 'Modern office interior', title: 'Creative space', description: 'Where design and engineering meet.' },
  { id: 'p3', src: unsplash('photo-1555066931-4365d14bab8c'), alt: 'Code on screen close up', title: 'Architecture', description: 'Quality control and clean code practices.' },
  { id: 'p4', src: unsplash('photo-1522071820081-009f0129c71c'), alt: 'Team meeting around a table', title: 'Strategy', description: 'Aligning technical work with business goals.' },
  { id: 'p5', src: unsplash('photo-1504384308090-c894fdcc538d'), alt: 'Designers looking at a tablet', title: 'Research', description: 'User testing informs interface decisions.' },
  { id: 'p6', src: unsplash('photo-1517694712202-14dd9538aa97'), alt: 'Laptop on desk', title: 'Delivery', description: 'Automated pipelines for safe deployments.' },
]

export const team = [
  { id: 't1', name: 'Alex Rivera', role: 'CEO & Founder', email: 'alex@lorien.test', bio: 'Sample bio. Alex leads the team and sets technical direction. Replace this with a real two or three sentence summary.', imageUrl: unsplash('photo-1560250097-0b93528c311a'), socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' } },
  { id: 't2', name: 'Samantha Wu', role: 'Chief Design Officer', email: 'samantha@lorien.test', bio: 'Sample bio. Samantha owns design quality, from research through handoff.', imageUrl: unsplash('photo-1573496359142-b8d87734a5a2'), socials: { linkedin: 'https://linkedin.com' } },
  { id: 't3', name: 'Jordan Hayes', role: 'CTO', email: 'jordan@lorien.test', bio: 'Sample bio. Jordan architects the systems behind client projects.', imageUrl: unsplash('photo-1472099645785-5658abf4ff4e'), socials: { twitter: 'https://twitter.com' } },
]

export const faqs = [
  { question: 'What is included in this starter?', answer: 'A single-page layout with hero, testimonials, content, gallery, features, team, FAQ, contact, and footer sections. All copy lives in src/config/site.ts.' },
  { question: 'How do I change the content?', answer: 'Edit src/config/site.ts. Section components take their data as props or read this config, so you rarely need to touch the templates.' },
  { question: 'Does it support dark mode?', answer: 'Not yet. The page is light only and declares color-scheme: light so the browser does not mix themes. Add dark variants per component if a project needs them.' },
  { question: 'Is it good for SEO?', answer: 'It is a client-rendered SPA, so it suits landing pages and apps behind a login. For content-heavy or search-driven sites, use Nuxt. See the README.' },
  { question: 'How do I deploy it?', answer: 'Run npm run build and deploy the dist folder. On Vercel, the Vite preset works with default settings.' },
]

export const contact = {
  kicker: 'Get in Touch',
  heading: "Let's Start a",
  headingAccent: 'Conversation',
  intro: 'Have a question or a project idea? Send a note and we will reply within two business days.',
  /** POST target for the form (Formspree, Getform, your own API). Leave empty to run in demo mode. */
  formEndpoint: '',
  info: [
    { icon: Mail, title: 'Email', details: 'hello@example.com', link: 'mailto:hello@example.com' },
    { icon: Phone, title: 'Phone', details: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: MapPin, title: 'Address', details: '123 Innovation Drive, Tech City, TC 10101', link: '' },
  ],
  hours: [
    { days: 'Monday - Friday', time: '9:00 AM - 6:00 PM (EST)', closed: false },
    { days: 'Saturday - Sunday', time: 'Closed', closed: true },
  ],
  inquiryTypes: [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
  ],
}

export const footer = {
  /** Set an action URL to show the newsletter form; remove the key to hide it. */
  newsletter: { action: '' } as { action: string } | undefined,
  columns: [
    { title: 'Product', links: [{ name: 'Features', href: '#features' }, { name: 'FAQ', href: '#faq' }] },
    { title: 'Company', links: [{ name: 'Leadership', href: '#leadership' }, { name: 'Contact', href: '#contact' }] },
    { title: 'Legal', links: [{ name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' }] },
  ],
  social: [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  ],
}
