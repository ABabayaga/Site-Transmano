const navLinks = [
  'Quem somos',
  'Segmentos',
  'Serviços',
  'Frota',
  'O Grupo',
  'Responsabilidade',
  'Contato',
]

function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`h-[15px] w-[15px] shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

export default function Header() {
  return (
    <header className="relative left-1/2 w-screen -translate-x-1/2 text-left font-[family-name:var(--sans)]">
      <div className="bg-[#131313] text-white/85">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-6 px-8 py-1 text-[13px] max-[860px]:px-5 max-[860px]:py-1">
          <div className="flex items-center justify-center gap-7">
            <span className="flex items-center gap-2 whitespace-nowrap max-[640px]:hidden">
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.25)]" aria-hidden="true" />
              Monitoramento 24h em tempo real
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap max-[640px]:hidden">
              <Icon id="location-icon" className="text-white/55" />
              Campo Grande/MS · São Paulo
            </span>
          </div>
          <div className="flex items-center justify-center gap-7">
            <a href="#rastrear-carga" className="flex items-center gap-2 whitespace-nowrap text-inherit no-underline transition-colors hover:text-white">
              <Icon id="search-icon" className="text-white/55" />
              Rastrear carga
            </a>
            <a href="tel:+556700000000" className="flex items-center gap-2 whitespace-nowrap text-inherit no-underline transition-colors hover:text-white">
              <Icon id="phone-icon" className="text-white/55" />
              (67) 0000-0000
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 border-b border-[var(--border)] bg-[var(--bg)] px-8 py-1 max-[860px]:px-5 max-[860px]:py-1">
        <a href="#" className="flex shrink-0 items-center">
          <img src="/Logo-Transmano.png" alt="Transmano" className="h-20 w-auto" />
        </a>

        <ul className="m-0 flex flex-wrap items-center gap-7 p-0">
          {navLinks.map((label) => (
            <li key={label} className="list-none">
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative inline-flex flex-col items-center py-1 text-[13.5px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase no-underline transition-colors hover:text-[#e0b30f]"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#f5c518] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2 text-[12.5px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase transition-colors hover:border-[var(--text-h)]"
          >
            <Icon id="search-icon" className="text-[var(--text-h)]" />
            Área do cliente
          </button>
          <a
            href="#cotacao"
            className="flex items-center gap-2 rounded-full bg-[#f5c518] px-5.5 py-2 text-[12.5px] font-bold tracking-[0.3px] text-[#171717] uppercase no-underline transition-colors hover:bg-[#e0b30f]"
          >
            Cotação
            <Icon id="arrow-right-icon" />
          </a>
        </div>
      </nav>
    </header>
  )
}
