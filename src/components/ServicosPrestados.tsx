function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

const servicos = [
  {
    icon: 'box-icon',
    title: 'Carga fechada',
    description:
      'Ideal para embarques exclusivos e de alta volumetria, com dedicação total do veículo à sua operação.',
  },
  {
    icon: 'expand-icon',
    title: 'Transporte fracionado',
    description:
      'Operações otimizadas via cross docking e roteirização eficiente, unindo cargas com controle total.',
  },
  {
    icon: 'warehouse-icon',
    title: 'Distribuição nas bases',
    description:
      'Entrega estratégica com agilidade regional a partir das nossas unidades operacionais e bases de embarque.',
  },
]

export default function ServicosPrestados() {
  return (
    <section
      id="servicos-prestados"
      className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f5f5f7] text-left font-[family-name:var(--sans)]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-24 max-[860px]:px-5 max-[860px]:py-14">
        <span className="flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#e11d2e] uppercase">
          <span className="flex w-6 flex-col gap-[3px]" aria-hidden="true">
            <span className="h-[2px] bg-[#e11d2e]" />
            <span className="h-0 border-t-2 border-dashed border-[#e11d2e]" />
            <span className="h-[2px] bg-[#e11d2e]" />
          </span>
          Serviços prestados
        </span>

        <h2 className="mt-4 max-w-[820px] text-[42px] leading-[1.08] font-extrabold tracking-[-1px] text-[var(--text-h)] uppercase max-[860px]:text-[30px]">
          Soluções completas em transporte rodoviário
        </h2>

        <p className="mt-6 max-w-[600px] text-[16px] leading-[150%] text-[var(--text)]">
          Atuação nas regiões Centro-Oeste, Sudeste, Sul e Nordeste, com estrutura preparada para
          atender diferentes demandas logísticas com agilidade, segurança e precisão.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {servicos.map((servico) => (
            <div
              key={servico.title}
              className="rounded-2xl border border-[var(--border)] bg-white p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#171717]">
                <Icon id={servico.icon} className="h-6 w-6 text-[#f5c518]" />
              </div>

              <h3 className="mt-6 text-[18px] font-extrabold tracking-[-0.3px] text-[var(--text-h)] uppercase">
                {servico.title}
              </h3>

              <p className="mt-3 text-[15px] leading-[150%] text-[var(--text)]">
                {servico.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
