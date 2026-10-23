<script setup lang="ts">
import type { Component } from 'vue'
import { useReveal } from '@/composables/useReveal'

export interface Feature {
  id: string
  title: string
  description: string
  icon: Component
}

const props = withDefaults(defineProps<{
  features: Feature[]
  title?: string
  subtitle?: string
}>(), {
  title: 'Why Use This Starter',
  subtitle: 'The parts that are easy to get wrong, already handled.'
})

const { isVisible: isHeaderVisible } = useReveal('headerRef')

const { isVisible: isGridVisible } = useReveal('gridRef')

</script>

<template>
  <section class="py-24 relative overflow-hidden bg-white">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div 
        ref="headerRef"
        class="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 
          class="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 transition-all duration-500 transform"
          :class="isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          {{ title }}
        </h2>
        <p 
          class="text-lg text-neutral-600 transition-all duration-500 delay-100 transform"
          :class="isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          {{ subtitle }}
        </p>
      </div>

      <div 
        ref="gridRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="group relative transition-all duration-700 transform"
          :style="{ transitionDelay: `${index * 100 + 200}ms` }"
          :class="isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <!-- Card Container -->
          <div 
            class="relative h-full p-8 rounded-2xl border border-neutral-200 bg-neutral-50 backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
          >
            <!-- Icon Container -->
            <div 
              class="w-12 h-12 rounded-xl border border-brand-green/30 bg-brand-green-light flex items-center justify-center mb-6 transition-colors duration-300"
            >
              <component 
                :is="feature.icon" 
                :size="24" 
                class="text-brand-green"
                aria-hidden="true"
              />
            </div>

            <h3 class="text-xl font-semibold text-neutral-900 mb-3">
              {{ feature.title }}
            </h3>
            
            <p class="text-neutral-600 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
