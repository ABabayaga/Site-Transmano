import type { MouseEvent } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const HEADER_OFFSET = 96

/** Smoothly scrolls to an in-page anchor (`#id`, or `#` for the top) instead of jumping. */
export function scrollToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#')) return

  const target = href.length > 1 ? document.querySelector(href) : 0
  if (target === null) return

  event.preventDefault()

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  gsap.to(window, {
    duration: reduceMotion ? 0 : 1.1,
    scrollTo: { y: target, offsetY: target === 0 ? 0 : HEADER_OFFSET, autoKill: true },
    ease: 'power2.inOut',
  })

  if (href.length > 1) history.replaceState(null, '', href)
}
