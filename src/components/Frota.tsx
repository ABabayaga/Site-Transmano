function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

const frotaStats = [
  { value: '20', label: 'anos de atuação no setor' },
  { value: '40', label: 'veículos próprios na frota' },
  { value: '+12', label: 'estados brasileiros atendidos' },
  { value: '2', label: 'estados-base: MS e SP' },
]

const frotaFeatures = [
  {
    icon: 'satellite-icon',
    title: 'Rastreamento via satélite em tempo real',
    description: 'Toda a frota acompanhada durante a jornada',
  },
  {
    icon: 'eye-icon',
    title: 'Monitoramento 24h por equipe especializada',
    description: 'Resposta ativa diante de qualquer ocorrência',
  },
  {
    icon: 'shield-icon',
    title: 'Cobertura total de seguro da carga',
    description: 'Sua mercadoria assegurada do embarque à entrega',
  },
  {
    icon: 'truck-icon',
    title: 'Carretas LS, Toco, Truck, 3/4 e VUC',
    description: 'Carrocerias aberta, graneleiro, baú, container e sider',
  },
]

export default function Frota() {
  return (
    <>
    {/* O padrão Transmano */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-black text-left font-[family-name:var(--sans)]">
        <div className="pointer-events-none absolute inset-0">
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

        <div className="relative mx-auto max-w-[1340px] px-8 py-24 max-[860px]:px-5 max-[860px]:py-14">
          <span className="flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#f5c518] uppercase">
            <span className="flex w-6 flex-col gap-[3px]" aria-hidden="true">
              <span className="h-[2px] bg-[#f5c518]" />
              <span className="h-0 border-t-2 border-dashed border-[#f5c518]" />
              <span className="h-[2px] bg-[#f5c518]" />
            </span>
            O padrão Transmano
          </span>

          <h2 className="mt-4 max-w-[760px] text-[42px] leading-[1.08] font-extrabold tracking-[-1px] text-white uppercase max-[860px]:text-[30px]">
            Chegar no horário não é diferencial.
            <br />
            É o <span className="text-[#f5c518]">mínimo</span> que a sua operação merece.
          </h2>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[150%] text-white/70">
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
            src="https://source.unsplash.com/1600x900/?desert,dust,road"
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/90 to-[#0c0c0c]/50" />
        </div>

        <div className="relative mx-auto max-w-[1340px] px-8 py-24 max-[860px]:px-5 max-[860px]:py-14">
          <span className="flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#f5c518] uppercase">
            <span className="flex w-6 flex-col gap-[3px]" aria-hidden="true">
              <span className="h-[2px] bg-[#f5c518]" />
              <span className="h-0 border-t-2 border-dashed border-[#f5c518]" />
              <span className="h-[2px] bg-[#f5c518]" />
            </span>
            Frota e monitoramento
          </span>

          <h2 className="mt-4 max-w-[600px] text-[42px] leading-[1.08] font-extrabold tracking-[-1px] text-white uppercase max-[860px]:text-[30px]">
            Frota própria, nova e monitorada 24 horas
          </h2>

          <div className="mt-12 grid grid-cols-[1.1fr_1fr] items-start gap-16 max-[1080px]:grid-cols-1 max-[1080px]:gap-10">
            <div>
              <p className="max-w-[500px] text-[16px] leading-[150%] text-white/70">
                Contamos com frota própria de 40 veículos novos e seminovos, com até 5 anos de
                fabricação, prontos para diferentes tipos de operação logística.
              </p>

              <ul className="mt-8 flex flex-col gap-6">
                {frotaFeatures.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon id={feature.icon} className="h-5 w-5 text-[#f5c518]" />
                    </span>
                    <div>
                      <div className="text-[15px] font-bold text-white">{feature.title}</div>
                      <div className="mt-1 text-[13.5px] text-white/55">{feature.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
              {frotaStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="text-[36px] font-extrabold text-[#f5c518]">{stat.value}</div>
                  <div className="mt-1 text-[13.5px] text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
