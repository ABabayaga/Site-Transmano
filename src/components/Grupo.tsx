function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

const empresas = [
  {
    prefix: 'Trans',
    highlight: 'mano',
    description: 'Transporte e logística rodoviária de cargas com frota própria.',
  },
  {
    prefix: 'Cent',
    highlight: 'ral',
    description: 'Logística e Transportes — capilaridade e redistribuição de cargas.',
  },
  {
    prefix: 'ALD',
    highlight: '',
    description: 'Transportes e Locações — apoio operacional e soluções complementares.',
  },
]

const responsabilidade = [
  {
    icon: 'droplet-icon',
    title: 'Junho vermelho',
    description:
      'Reforçamos o convite à doação de sangue. Uma doação leva menos de uma hora e pode salvar até quatro vidas.',
  },
  {
    icon: 'users-icon',
    title: 'Saúde do motorista',
    description:
      'Alinhamento antes de cada viagem, canal direto durante a jornada e atenção aos períodos de descanso. Quem cuida de quem opera entrega melhor.',
  },
  {
    icon: 'clock-icon',
    title: 'Parceria de verdade',
    description:
      'Quando o imprevisto chega, o protocolo já está ativo: comunicação imediata e solução antes da cobrança. Responsabilidade do início ao fim.',
  },
]

export default function Grupo() {
  return (
    <>
      <section
        id="grupo"
        className="relative left-1/2 w-screen -translate-x-1/2 bg-white text-center font-[family-name:var(--sans)]"
      >
        <div className="mx-auto max-w-[1440px] px-8 py-24 max-[860px]:px-5 max-[860px]:py-14">
          <span className="mx-auto flex w-fit items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#e11d2e] uppercase">
            <span className="h-[2px] w-6 bg-[#e11d2e]" aria-hidden="true" />
            O Grupo Transmano
          </span>

          <h2 className="mx-auto mt-4 max-w-[820px] text-[42px] leading-[1.08] font-extrabold tracking-[-1px] text-[var(--text-h)] uppercase max-[860px]:text-[30px]">
            Três empresas, uma só estrutura logística
          </h2>

          <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[150%] text-[var(--text)]">
            Referência em transporte e logística na região Centro-Oeste, com matriz em Campo
            Grande/MS e operação em Centro-Oeste, Nordeste, Sul e Sudeste.
          </p>

          <div className="mx-auto mt-12 grid max-w-[1030px] grid-cols-3 gap-6 max-[860px]:grid-cols-1">
            {empresas.map((empresa) => (
              <div
                key={empresa.prefix + empresa.highlight}
                className="rounded-2xl bg-[#f5f5f7] p-8"
              >
                <h3 className="text-[20px] font-extrabold tracking-[-0.3px] text-[var(--text-h)]">
                  {empresa.prefix}
                  <span className="text-[#e11d2e]">{empresa.highlight}</span>
                </h3>
                <p className="mt-3 text-[14px] leading-[150%] text-[var(--text)]">
                  {empresa.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f5f5f7] text-left font-[family-name:var(--sans)]">
        <div className="mx-auto max-w-[1440px] px-8 py-24 max-[860px]:px-5 max-[860px]:py-14">
          <span className="flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#e11d2e] uppercase">
            <span className="h-[2px] w-6 bg-[#e11d2e]" aria-hidden="true" />
            Responsabilidade além das estradas
          </span>

          <h2 className="mt-4 max-w-[700px] text-[42px] leading-[1.08] font-extrabold tracking-[-1px] text-[var(--text-h)] uppercase max-[860px]:text-[30px]">
            Cuidar de quem opera é parte da operação
          </h2>

          <p className="mt-6 max-w-[600px] text-[16px] leading-[150%] text-[var(--text)]">
            Acreditamos que empresas também têm responsabilidade dentro da sociedade — com as
            pessoas na estrada e com as comunidades onde atuamos.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {responsabilidade.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdeceb]">
                  <Icon id={item.icon} className="h-5 w-5 text-[#e11d2e]" />
                </div>

                <h3 className="mt-6 text-[15px] font-extrabold tracking-[-0.3px] text-[var(--text-h)] uppercase">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14.5px] leading-[150%] text-[var(--text)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
