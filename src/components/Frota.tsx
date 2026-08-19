import { useScrollReveal } from '../hooks/useScrollReveal'

const frotaStats = [
  { value: '40', label: 'veículos próprios na frota' },
  { value: '20', label: 'anos de atuação no setor' },
  { value: '+12', label: 'estados brasileiros atendidos' },
  { value: '2', label: 'estados-base: MS e SP' },
]

const frotaFeatures = [
  {
    code: 'SAT',
    title: 'Rastreamento via satélite em tempo real',
    description: 'Toda a frota acompanhada durante a jornada',
  },
  {
    code: '24H',
    title: 'Monitoramento 24h por equipe especializada',
    description: 'Resposta ativa diante de qualquer ocorrência',
  },
  {
    code: 'SEG',
    title: 'Cobertura total de seguro da carga',
    description: 'Sua mercadoria assegurada do embarque à entrega',
  },
  {
    code: 'VUC',
    title: 'Carretas LS, Toco, Truck, 3/4 e VUC',
    description: 'Carrocerias aberta, graneleiro, baú, container e sider',
  },
]

export default function Frota() {
  const padraoRef = useScrollReveal<HTMLDivElement>('.gsap-reveal')
  const frotaRef = useScrollReveal<HTMLDivElement>('.gsap-reveal')

  return (
    <>
    {/* O padrão Transmano */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-black text-left font-[family-name:var(--sans)]">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/padrao.jpeg"
            alt=""
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-[#f5c518]/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div ref={padraoRef} className="relative mx-auto max-w-[1340px] px-8 py-24 max-[860px]:px-5 max-[860px]:py-14">
          <span className="gsap-reveal flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#f5c518] uppercase">
            <span className="flex w-6 flex-col gap-[3px]" aria-hidden="true">
              <span className="h-[2px] bg-[#f5c518]" />
              <span className="h-0 border-t-2 border-dashed border-[#f5c518]" />
              <span className="h-[2px] bg-[#f5c518]" />
            </span>
            O padrão Transmano
          </span>

          <h2 className="gsap-reveal mt-4 max-w-[760px] text-[40px] leading-[1.08] font-extrabold tracking-[-1px] text-white uppercase max-[860px]:text-[30px]">
            Chegar no horário não é diferencial.
            <br />
            É o <span className="text-[#f5c518]">mínimo</span> que a sua operação merece.
          </h2>

          <p className="gsap-reveal mt-6 max-w-[560px] text-[16px] leading-[150%] text-white/70">
            Planejamento, controle operacional e comunicação ativa em cada quilômetro para reduzir
            variáveis e garantir entregas mais estáveis.
          </p>
        </div>
      </section>

      {/* Frota e monitoramento*/}
      <section
        id="frota"
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0c0c0c] text-left font-[family-name:var(--sans)]"
      >
        <div className="absolute inset-0">
          <img
            src="/frota.jpeg"
            alt=""
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/90 to-[#0c0c0c]/50" />
        </div>

        <div ref={frotaRef} className="relative mx-auto max-w-[1340px] px-8 py-10 max-[860px]:px-5 max-[860px]:py-8">
          <span className="gsap-reveal flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#f5c518] uppercase">
            <span className="flex w-6 flex-col gap-[3px]" aria-hidden="true">
              <span className="h-[2px] bg-[#f5c518]" />
              <span className="h-0 border-t-2 border-dashed border-[#f5c518]" />
              <span className="h-[2px] bg-[#f5c518]" />
            </span>
            Frota e monitoramento
          </span>

          <h2 className="gsap-reveal mt-2 max-w-[600px] text-[42px] leading-[1.08] font-extrabold tracking-[-1px] text-white uppercase max-[860px]:text-[30px]">
            Frota própria, nova e monitorada 24 horas
          </h2>

          <div className="mt-6 grid grid-cols-[1.1fr_1fr] items-start gap-16 max-[1080px]:grid-cols-1 max-[1080px]:gap-6">
            <div className="gsap-reveal">
              <p className="max-w-[500px] text-[16px] leading-[150%] text-white/70">
                Contamos com frota própria de 40 veículos novos e seminovos, com até 5 anos de
                fabricação, prontos para diferentes tipos de operação logística.
              </p>

              <ul className="mt-3 flex flex-col">
                {frotaFeatures.map((feature) => (
                  <li
                    key={feature.title}
                    className="flex items-start gap-4 border-t border-white/10 py-2 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-[11px] font-bold tracking-[0.5px] text-[#f5c518]">
                      {feature.code}
                    </span>
                    <div>
                      <div className="text-[15px] font-bold text-white">{feature.title}</div>
                      <div className="mt-1 text-[13.5px] text-white/55">{feature.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gsap-reveal rounded-[4px] border border-white/10">
              <div className="border-b border-white/10 bg-[#f5c518]/[0.08] px-5 py-1.5 font-mono text-[11px] font-bold tracking-[0.5px] text-[#f5c518] uppercase">
                Frota em números
              </div>
              <div className="flex flex-col px-5">
                {frotaStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 py-1.5 last:border-b-0"
                  >
                    <span
                      className={
                        index === 0
                          ? 'text-[15px] font-bold text-white'
                          : 'text-[13.5px] text-white/70'
                      }
                    >
                      {stat.label}
                    </span>
                    <span
                      className={
                        index === 0
                          ? 'font-mono text-[36px] font-extrabold tabular-nums text-[#f5c518]'
                          : 'font-mono text-[20px] font-bold tabular-nums text-white'
                      }
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
