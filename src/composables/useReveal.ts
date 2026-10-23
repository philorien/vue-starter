import { ref, useTemplateRef } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

/**
 * One-shot scroll reveal: `isVisible` flips to true the first time the element
 * with `ref="<key>"` in the template enters the viewport.
 */
export function useReveal(key = 'section', threshold = 0.1) {
  const target = useTemplateRef<HTMLElement>(key)
  const isVisible = ref(false)

  useIntersectionObserver(target, ([entry]) => {
    if (entry?.isIntersecting && !isVisible.value) {
      isVisible.value = true
    }
  }, { threshold })

  return { isVisible }
}
