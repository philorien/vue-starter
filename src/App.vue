<script setup lang="ts">
import Navbar from './components/ui/Navbar.vue'
import ParallaxHero from './components/ui/ParallaxHero.vue'
import TestimonialCarousel from './components/ui/TestimonialCarousel.vue'
import PhotoGallery from './components/ui/PhotoGallery.vue'
import LeadershipSection from './components/ui/LeadershipSection.vue'
import ContentSection from './components/ui/ContentSection.vue'
import FeaturesSection from './components/ui/FeaturesSection.vue'
import FaqSection from './components/ui/FaqSection.vue'
import ContactSection from './components/ui/ContactSection.vue'
import Footer from './components/ui/Footer.vue'
import { hero, about, features, testimonials, galleryHighlights, galleryPhotos, team } from '@/config/site'
</script>

<template>
  <div class="antialiased text-neutral-900 bg-white min-h-screen selection:bg-brand-green-light selection:text-neutral-900">
    <a
      href="#main-content"
      class="fixed top-4 left-[-9999px] z-[100] rounded-md bg-white px-4 py-2 text-black font-medium shadow-lg focus:outline-none focus-visible:left-4 focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
    >
      Skip to main content
    </a>

    <Navbar />

    <main id="main-content">
      <ParallaxHero
        :badge="hero.badge"
        :title="hero.title"
        :subtitle="hero.subtitle"
        :background-image-url="hero.image"
        :cta-text="hero.ctaText"
        :cta-href="hero.ctaHref"
      />

      <TestimonialCarousel id="testimonials" :testimonials="testimonials" />

      <ContentSection
        :kicker="about.kicker"
        :title="about.title"
        :image-url="about.imageUrl"
        :image-alt="about.imageAlt"
        :cta-text="about.ctaText"
        :cta-href="about.ctaHref"
        image-position="right"
      >
        <p v-for="(p, i) in about.paragraphs" :key="i" class="mb-4 last:mb-0">{{ p }}</p>
      </ContentSection>

      <PhotoGallery id="gallery" :images="galleryHighlights" title="Inside the Studio" subtitle="A glimpse into our process and culture." />

      <FeaturesSection id="features" :features="features" />

      <PhotoGallery :images="galleryPhotos" />

      <LeadershipSection id="leadership" :members="team" />

      <FaqSection id="faq" />

      <ContactSection id="contact" />
    </main>

    <Footer />
  </div>
</template>
