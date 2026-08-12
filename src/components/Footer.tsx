function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`h-[15px] w-[15px] shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

const navLinks = [
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Frota e monitoramento', href: '#frota' },
  { label: 'O Grupo Transmano', href: '#grupo' },
  { label: 'Rastrear carga', href: '#rastrear-carga' },
]

export default function Footer() {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 bg-[#131313] text-left font-[family-name:var(--sans)]">
      <div className="mx-auto max-w-[1440px] px-8 pt-20 pb-10 max-[860px]:px-5 max-[860px]:pt-14">
        <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-12 max-[860px]:grid-cols-1 max-[860px]:gap-10">
          <div>
            <img src="/Logo-Transmano-branca.png" alt="Transmano" className="h-9 w-auto" />
            <p className="mt-5 max-w-[320px] text-[14.5px] leading-[150%] text-white/60">
              Transporte e logística rodoviária de cargas com foco em previsibilidade, segurança e
              excelência operacional. Uma empresa do Grupo Transmano.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/transmanotransportes"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon id="instagram-icon" className="h-[18px] w-[18px]" />
              </a>
              <a
                href="tel:+556700000000"
                aria-label="Telefone"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon id="phone-icon" className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-bold tracking-[0.3px] text-white uppercase">Navegação</h3>
            <ul className="mt-5 flex flex-col gap-3.5 p-0">
              {navLinks.map((link) => (
                <li key={link.label} className="list-none">
                  <a
                    href={link.href}
                    className="text-[14.5px] text-white/60 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-bold tracking-[0.3px] text-white uppercase">
              Contato — Matriz
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5 p-0">
              <li className="flex list-none items-start gap-2.5 text-[14.5px] leading-[150%] text-white/60">
                <Icon id="location-icon" className="mt-1 text-[#f5c518]" />
                Av. Zilá Correa Machado, 2488, Km 8.8 — Jardim Itamaracá, Campo Grande/MS · CEP
                79062-000
              </li>
              <li className="flex list-none items-center gap-2.5 text-[14.5px] text-white/60">
                <Icon id="instagram-icon" className="text-[#f5c518]" />
                @transmanotransportes
              </li>
              <li className="flex list-none items-center gap-2.5 text-[14.5px] text-white/60">
                <Icon id="shield-icon" className="text-[#f5c518]" />
                CNPJ 34.229.529/0001-01
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-white/40 max-[860px]:mt-10">
          <span>© 2026 Grupo Transmano — Transporte e Logística. Todos os direitos reservados.</span>
          <span>Rastreamento integrado via SSW.</span>
        </div>
      </div>

      <a
        href="https://wa.me/556700000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
      >
        <Icon id="whatsapp-icon" className="h-[26px] w-[26px]" />
      </a>
    </footer>
  )
}
