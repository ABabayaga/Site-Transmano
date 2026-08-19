import Threads from './Threads'

const trackingTabs = ['Remetente', 'Destinatário', 'Pagador']

function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0c0c0c] text-left font-[family-name:var(--sans)]">
      <div className="pointer-events-none absolute inset-0">
        {/* Threads fan from alert red into caution yellow across the bundle. */}
        <Threads
          color={[0.882, 0.114, 0.18]}
          colorB={[0.961, 0.773, 0.094]}
          amplitude={0.45}
          distance={0.12}
        />
        {/* Scrim: pooled behind the copy so the threads stay readable underneath it. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 60% at 20% 45%, rgba(12,12,12,0.7) 0%, rgba(12,12,12,0.3) 45%, rgba(12,12,12,0) 75%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-[1.15fr_1fr] items-start gap-16 px-8 py-20 max-[1080px]:grid-cols-1 max-[1080px]:gap-12 max-[860px]:px-5 max-[860px]:py-12">
        <div>
          <span className="rise-in rise-in-1 inline-flex items-center gap-2 rounded-full bg-[#f5c518] px-4 py-2 text-[12.5px] font-bold tracking-[0.3px] text-[#171717] uppercase">

            20 anos movendo o Centro-Oeste
          </span>

          <h1 className="rise-in rise-in-2 mt-6 font-['Anton'] text-[64px] leading-[0.98] font-normal tracking-[-0.5px] text-white uppercase max-[860px]:text-[38px]">
            Sua carga com <span className="text-[#e11d2e]">previsibilidade,</span> não com sorte.
          </h1>

          <p className="rise-in rise-in-3 mt-6 max-w-[480px] text-[17px] leading-[150%] text-white/70">
            Transporte rodoviário com frota própria rastreada e monitorada 24 horas, com operações
            desenhadas para os setores que não podem parar.
          </p>

          <div className="rise-in rise-in-4 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cotacao"
              className="flex items-center gap-2 rounded-full bg-[#f5c518] px-6 py-3.5 text-[13px] font-bold tracking-[0.3px] text-[#171717] uppercase no-underline transition-colors hover:bg-[#e0b30f]"
            >
              Solicitar cotação
              <Icon id="arrow-right-icon" className="h-4 w-4" />
            </a>
            <a
              href="#segmentos"
              className="rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-bold tracking-[0.3px] text-white uppercase no-underline transition-colors hover:border-white"
            >
              Ver segmentos
            </a>
          </div>

        </div>

        {/* Mockup only — will be wired to the SSW tracking API */}
        <div className="relative w-full max-w-[420px] justify-self-end overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] max-[1080px]:justify-self-start">
          <div className="flex items-center gap-3 bg-[#131313] px-6 py-4">
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e11d2e] text-[#e11d2e]">
              <span className="pulse-ring rounded-xl" />
              <Icon id="search-icon" className="relative h-4 w-4 text-white" />
            </span>
            <div>
              <div className="text-[14px] font-bold tracking-[0.3px] text-white uppercase">
                Rastreie sua carga
              </div>
              <div className="mt-0.5 text-[12px] text-white/60">
                Acompanhamento em tempo real · integração SSW
              </div>
            </div>
          </div>

          <div className="px-6 pt-4">
            <div className="flex flex-wrap items-center gap-1 rounded-full bg-[#f4f3ec] p-1 text-[11px] font-bold tracking-[0.2px] uppercase">
              <button
                type="button"
                className="rounded-full bg-white px-3 py-2 text-[var(--text-h)] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
              >
                Por NFs
              </button>
              {trackingTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className="rounded-full px-3 py-2 text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 pt-4 pb-5">
            <label className="block text-[11px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase">
              CNPJ do remetente
            </label>
            <input
              type="text"
              placeholder="00.000.000/0000-00"
              className="mt-1.5 w-full rounded-xl border border-[var(--border)] px-3.5 py-2.5 text-[13.5px] text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:border-[#e11d2e] focus:outline-none"
            />

            <label className="mt-3.5 block text-[11px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase">
              Notas fiscais{' '}
              <span className="font-normal normal-case text-[var(--text)]">(uma por linha)</span>
            </label>
            <textarea
              rows={2}
              placeholder="Ex: 123456"
              className="mt-1.5 w-full resize-none rounded-xl border border-[var(--border)] px-3.5 py-2.5 text-[13.5px] text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:border-[#e11d2e] focus:outline-none"
            />

            <button
              type="button"
              className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-full bg-[#e11d2e] px-6 py-3 text-[13px] font-bold tracking-[0.3px] text-white uppercase transition-colors hover:bg-[#c8182a]"
            >
              Rastrear agora
              <Icon id="arrow-right-icon" className="h-4 w-4" />
            </button>

            <p className="mt-3 flex items-start gap-2 text-[11.5px] leading-[140%] text-[var(--text)]">
              <Icon id="lock-icon" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e11d2e]" />
              Consulta segura via sistema SSW. Rastreio por remetente, destinatário ou pagador, por
              NFs ou com senha.
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#131313] py-3 text-center text-[13px] text-white/70">
        Uma empresa do <span className="font-bold text-[#f5c518]">Grupo Transmano</span>: Transmano
        · Central Logística e Transportes · ALD Transportes e Locações
      </div>
    </section>
  )
}
