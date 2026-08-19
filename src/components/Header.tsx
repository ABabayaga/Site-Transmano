import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

/* const HEADER_OFFSET = 96 */

/* function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#') || href.length < 2) return
  const target = document.querySelector(href)
  if (!target) return

  event.preventDefault()
  gsap.to(window, {
    duration: 1.1,
    scrollTo: { y: target, offsetY: HEADER_OFFSET },
    ease: 'power2.inOut',
  })
} */

const navLinks = [
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Serviços', href: '#servicos-prestados' },
  { label: 'Frota', href: '#frota' },
  { label: 'O Grupo', href: '#grupo' },
  { label: 'Responsabilidade', href: '#responsabilidade' },
  { label: 'Contato', href: '#contato' },
]

function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`h-[15px] w-[15px] shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [topBarHeight, setTopBarHeight] = useState(0)
  const topBarRef = useRef<HTMLDivElement>(null)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const topBar = topBarRef.current
    if (!topBar) return

    const observer = new ResizeObserver(([entry]) => setTopBarHeight(entry.contentRect.height))
    observer.observe(topBar)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function handleScroll() {
      const hero = document.getElementById('hero')
      const pastHero = hero ? hero.getBoundingClientRect().bottom <= 0 : window.scrollY > 0

      setIsPastHero(pastHero)

      clearTimeout(hideTimeoutRef.current)

      if (pastHero) {
        setIsVisible(true)
        hideTimeoutRef.current = setTimeout(() => setIsVisible(false), 900)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  return (
    <header className="text-left font-[family-name:var(--sans)]">
      <div ref={topBarRef} className="absolute inset-x-0 top-0 z-50 bg-[#131313] text-white/85">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-32 px-8 py-1 text-[13px] max-[900px]:gap-0 max-[860px]:px-5 max-[860px]:py-1">
          <div className="flex items-center justify-center gap-7 max-[900px]:hidden">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0 items-center justify-center text-green-500" aria-hidden="true">
                <span className="pulse-ring" />
                <span className="relative h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.25)]" />
              </span>
              Monitoramento 24h em tempo real
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <Icon id="location-icon" className="text-white/55" />
              Campo Grande/MS
            </span>
          </div>
          <div className="flex items-center justify-center gap-7 max-[480px]:gap-3">
            <a href="#rastrear-carga" className="flex items-center gap-2 whitespace-nowrap text-inherit no-underline transition-colors hover:text-white">
              <Icon id="search-icon" className="text-white/55" />
              Rastrear carga
            </a>
            <a href="tel:+556700000000" className="flex items-center gap-2 whitespace-nowrap text-inherit no-underline transition-colors hover:text-white">
              <Icon id="phone-icon" className="text-white/55" />
              0800 7033 339
            </a>
          </div>
        </div>
      </div>

      <div
        style={{ top: isPastHero ? 0 : topBarHeight }}
        className={`inset-x-0 z-40 mx-auto max-w-[1440px] px-8 pt-3 pb-2 transition-transform duration-300 ease-out max-[860px]:px-4 ${
          isPastHero ? 'fixed' : 'absolute'
        } ${isPastHero && !isVisible ? '-translate-y-[calc(100%+1rem)]' : 'translate-y-0'}`}
      >
        <nav className="relative flex items-center justify-between gap-6 rounded-full border border-black/5 bg-[var(--bg)]/85 px-6 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md max-[860px]:px-4">
          <a href="#" className="flex shrink-0 items-center">
            <img src="/Logo-Transmano.png" alt="Transmano" className="h-11 w-auto" />
          </a>

          <ul className="absolute left-1/2 m-0 flex -translate-x-1/2 items-center gap-6 rounded-full bg-black/[0.03] px-6 py-1.5 max-[1200px]:gap-4 max-[1200px]:px-4 max-[1080px]:static max-[1080px]:translate-x-0 max-[860px]:hidden">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="list-none">
                <a
                  href={href}
                  className="group relative inline-flex items-center py-1 text-[13.5px] whitespace-nowrap font-bold tracking-[0.3px] text-[var(--text-h)] uppercase no-underline transition-colors hover:text-[#e11d2e]"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#f5c518] transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

         {/*  <div className="ml-auto flex shrink-0 items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 text-[12.5px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase transition-colors hover:text-[#e11d2e] max-[1200px]:hidden"
            >
              <Icon id="search-icon" className="text-[var(--text-h)]" />
              Área do cliente
            </button>
            <a
              href="#cotacao"
              className="flex items-center gap-2 rounded-full bg-[#f5c518] px-5.5 py-2.5 text-[12.5px] font-bold tracking-[0.3px] text-[#171717] uppercase no-underline transition-colors hover:bg-[#e0b30f]"
            >
              Cotação
              <Icon id="arrow-right-icon" />
            </a>
          </div> */}

          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="hidden shrink-0 flex-col items-center justify-center gap-1.5 p-2 max-[860px]:flex"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-[var(--text-h)] transition-transform duration-200 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[var(--text-h)] transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[var(--text-h)] transition-transform duration-200 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>

        {menuOpen && (
          <ul className="m-0 hidden flex-col gap-1 rounded-3xl border border-black/5 bg-[var(--bg)]/95 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md max-[860px]:mt-2 max-[860px]:flex">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="list-none">
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full px-4 py-2.5 text-[13.5px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase no-underline transition-colors hover:bg-black/[0.03] hover:text-[#e11d2e]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
