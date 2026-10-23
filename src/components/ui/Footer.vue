<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { site, footer } from '@/config/site'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-neutral-200 bg-neutral-50 pt-20 pb-10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
        
        <!-- Brand & Newsletter Column -->
        <div class="lg:col-span-2">
          <a href="/" class="inline-block text-3xl tracking-tighter text-neutral-900 mb-6 font-space-grotesk font-medium">
            {{ site.wordmark }}
          </a>
          <p class="text-neutral-600 text-sm leading-relaxed mb-8 max-w-sm">
            {{ site.tagline }}
          </p>
          
          <form v-if="footer.newsletter?.action" :action="footer.newsletter.action" method="post" class="space-y-4">
            <h4 class="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Subscribe to our newsletter</h4>
            <div class="flex relative max-w-md">
              <label for="footer-email" class="sr-only">Email address for newsletter</label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autocomplete="email"
                aria-describedby="newsletter-desc"
                class="w-full bg-white border border-neutral-200 rounded-full py-3 px-6 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green/50 transition-colors"
               />
              <button
                type="submit"
                class="absolute right-1 top-1 bottom-1 aspect-square bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-brand-green-hover active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight :size="18" aria-hidden="true" />
              </button>
            </div>
            <p id="newsletter-desc" class="sr-only">We'll send you updates and news. You can unsubscribe at any time.</p>
          </form>
        </div>

        <!-- Links Columns -->
        <div v-for="col in footer.columns" :key="col.title">
          <h4 class="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">{{ col.title }}</h4>
          <ul class="space-y-4">
            <li v-for="link in col.links" :key="link.name">
              <a :href="link.href" class="text-neutral-600 hover:text-brand-green transition-colors text-sm font-medium">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-neutral-600 text-sm">
          &copy; {{ currentYear }} {{ site.legalName }}. All rights reserved.
        </p>
        
        <div class="flex items-center gap-4">
          <a
            v-for="social in footer.social"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-brand-green-light hover:text-brand-green transition-all hover:scale-110"
            :aria-label="social.name"
          >
            <component :is="social.icon" :size="18" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
