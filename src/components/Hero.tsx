import Threads from './Threads'
import TrackingWidget from './TrackingWidget'

function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f4f3ec] text-left font-[family-name:var(--sans)]">
      <div className="pointer-events-none absolute inset-0">
        {/* Threads fan from alert red into caution yellow across the bundle. */}
        <Threads
          color={[0.882, 0.114, 0.18]}
          colorB={[0.961, 0.773, 0.094]}
          amplitude={0.45}
          distance={0.12}
        />
        {/* Scrim: pooled behind the copy so the threads stay readable underneath it, without erasing them on the right. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 78% 72% at 18% 42%, rgba(244,243,236,0.96) 0%, rgba(244,243,236,0.88) 35%, rgba(244,243,236,0.55) 60%, rgba(244,243,236,0) 85%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-[1.15fr_1fr] items-start gap-16 px-8 pt-36 pb-20 max-[1080px]:grid-cols-1 max-[1080px]:gap-12 max-[860px]:px-5 max-[860px]:py-12">
        <div>
          <span className="rise-in rise-in-1 inline-flex items-center gap-2 rounded-2xl bg-[#f5c518] px-4 py-2 text-[12.5px] font-bold tracking-[0.3px] text-[#171717] uppercase">

            20 anos movendo o Centro-Oeste
          </span>

          <h1 className="rise-in rise-in-2 mt-6 font-(family-name:--sans) text-[58px] leading-[1.02] font-extrabold tracking-[-1.5px] text-[#131313] uppercase max-[860px]:text-[36px]">
            Sua carga com <span className="text-[#e11d2e]">previsibilidade,</span> não com sorte.
          </h1>

          <p className="rise-in rise-in-3 mt-6 max-w-[480px] text-[17px] leading-[150%] text-[#131313]/70">
            Transporte rodoviário com frota própria rastreada e monitorada 24 horas, com operações
            desenhadas para os setores que não podem parar.
          </p>

          <div className="rise-in rise-in-4 mt-8 flex flex-wrap items-center gap-4">
           {/*  <a
              href="#cotacao"
              className="flex items-center gap-2 rounded-full bg-[#f5c518] px-6 py-3.5 text-[13px] font-bold tracking-[0.3px] text-[#171717] uppercase no-underline transition-colors hover:bg-[#e0b30f]"
            >
              Solicitar cotação
              <Icon id="arrow-right-icon" className="h-4 w-4" />
            </a> */}
            <a
              href="#segmentos"
              className="rounded-full border border-[#131313]/25 px-6 py-3.5 text-[13px] font-bold tracking-[0.3px] text-[#131313] uppercase no-underline transition-colors hover:border-[#131313]"
            >
              Ver segmentos
            </a>
          </div>

        </div>

        {/* Tracking card — posts to SSW's public tracking forms (see TrackingWidget) */}
        <div className="relative mr-16 w-full max-w-[420px] justify-self-end overflow-hidden rounded-3xl border border-[#131313]/10 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] max-[1080px]:mr-0 max-[1080px]:justify-self-start">
          <div className="flex items-center gap-3 bg-[#131313] px-6 py-3">
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

          <TrackingWidget />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#131313] py-3 text-center text-[13px] text-white/70">
        Uma empresa do <span className="font-bold text-[#f5c518]">Grupo Transmano</span>: Transmano
        · Central Logística e Transportes · ALD Transportes e Locações
      </div>
    </section>
  )
}
