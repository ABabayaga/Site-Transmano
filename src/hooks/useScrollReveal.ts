import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ScrollRevealOptions = {
  y?: number
  stagger?: number
  start?: string
}

export function useScrollReveal<T extends HTMLElement>(
  selector: string,
  { y = 32, stagger = 0.12, start = 'top 80%' }: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll(selector)
    if (!targets.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [selector, y, stagger, start])

  return ref
}
