<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'
import { useReveal } from '@/composables/useReveal'
import { faqs } from '@/config/site'

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const { isVisible } = useReveal('sectionRef')
</script>

<template>
  <section class="py-24 relative overflow-hidden bg-neutral-50 border-t border-neutral-200" id="faq" ref="sectionRef">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div 
        class="text-center mb-16 transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <p class="text-brand-green font-semibold tracking-wide uppercase text-sm mb-3">
          Got Questions?
        </p>
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
          Frequently Asked <span class="text-brand-green">Questions</span>
        </h2>
        <p class="text-xl text-neutral-600 max-w-2xl mx-auto">
          Quick answers about this starter.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="group border rounded-2xl overflow-hidden bg-white transition-all duration-300 ease-out"
          :class="[
            openIndex === index ? 'border-brand-green/30 shadow-md' : 'border-neutral-200 hover:border-brand-green/30 hover:shadow-md',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 100 + 200}ms` }"
        >
          <button
            type="button"
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-2xl"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            :id="`faq-question-${index}`"
          >
            <span 
              class="text-lg font-medium transition-colors duration-300" 
              :class="openIndex === index ? 'text-brand-green' : 'text-neutral-700 group-hover:text-brand-green'"
            >
              {{ faq.question }}
            </span>

            <span 
              class="ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
              :class="openIndex === index ? 'bg-brand-green text-white' : 'bg-neutral-100 text-neutral-500 group-hover:bg-brand-green-light group-hover:text-brand-green'"
              aria-hidden="true"
            >
              <Minus v-if="openIndex === index" class="w-4 h-4" />
              <Plus v-else class="w-4 h-4" />
            </span>
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-in-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[500px] opacity-100"
            leave-active-class="transition-all duration-300 ease-in-out"
            leave-from-class="max-h-[500px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div
              v-show="openIndex === index"
              :id="`faq-answer-${index}`"
              class="overflow-hidden"
            >
              <div class="px-6 pb-6 text-neutral-600 leading-relaxed">
                {{ faq.answer }}
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
