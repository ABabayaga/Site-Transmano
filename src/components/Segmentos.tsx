function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

const segmentos = [
  {
    tag: 'Setor alimentício',
    image: '/segali.jpg',
    title: 'Transporte de alimentos',
    description:
      'No abastecimento, o relógio não para: janela de recebimento fechada, CD sem espaço amanhã, promotor esperando na loja. Nossa operação já nasce nesse ritmo.',
    requisitos: [
      'Rotas planejadas pela janela de recebimento de cada cliente',
      'Controle de integridade da carga durante toda a jornada',
      'Comunicação ativa em cada etapa — sem o embarcador precisar ligar',
      'Adaptação rápida quando o CD muda a janela de última hora',
    ],
    alerta:
      'Uma falha aqui vira ruptura de gôndola, multa contratual ou perda de produto. Por isso, eficiência não é diferencial — é o mínimo.',
  },
  {
    tag: 'Placas solares',
    image: 'segsol.jpg',
    title: 'Painéis fotovoltaicos',
    description:
      'Painel solar não é carga comum. A avaria nem sempre aparece na entrega — muitas vezes só aparece depois, com os módulos já instalados e gerando abaixo do esperado. Aí a conta chega dobrada.',
    requisitos: [
      'Amarração técnica com verificação em pontos críticos da rota',
      'Proteção contra vibração e acondicionamento por modelo de módulo',
      'Rotas planejadas pelo estado do pavimento e restrições viárias',
      'Responsável operacional dedicado do carregamento à entrega',
    ],
    alerta:
      'Módulo danificado significa logística reversa, perícia, obra parada e prazo perdido. Experiência é o que separa entrega de indenização.',
  },
]

export default function Segmentos() {
  return (
    <section
      id="segmentos"
      className="relative left-1/2 w-screen -translate-x-1/2 text-left font-[family-name:var(--sans)]"
    >
      <div className="mx-auto max-w-[1340px] px-8 py-12 max-[860px]:px-5 max-[860px]:py-14">
        <span className="flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#e11d2e] uppercase">
          <span className="flex w-6 flex-col gap-[3px]" aria-hidden="true">
          <span className="h-[2px] bg-[#e11d2e]" />
          <span className="h-0 border-t-2 border-dashed border-[#e11d2e]" />
          <span className="h-[2px] bg-[#e11d2e]" />
        </span>
          Segmentos especializados
        </span>

        <h2 className="mt-4 max-w-[820px] font-black! text-[42px] leading-[1.08] font-extrabold tracking-[-1px] text-[var(--text-h)] uppercase max-[860px]:text-[30px]">
          Cada carga tem uma <span className="text-[#e11d2e]">exigência.</span> A gente conhece a
          sua.
        </h2>

        <p className="mt-6 max-w-[600px] text-[16px] leading-[150%] text-[var(--text)]">
          Transportar bem não é mover volume — é entender o que cada setor não pode perder. Veja o
          padrão de operação que aplicamos onde somos especialistas.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
          {segmentos.map((segmento) => (
            <div
              key={segmento.title}
              className="rounded-3xl border border-[var(--border)] bg-white p-6"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={segmento.image}
                  alt={segmento.title}
                  className="h-[280px] w-full object-cover"
                />
                <span className="absolute top-5 left-5 rounded-full bg-[#f5c518] px-4 py-2 text-[12.5px] font-bold tracking-[0.3px] text-[#171717] uppercase">
                  {segmento.tag}
                </span>
              </div>

              <div className="pt-8">
                <h3 className="text-[24px] font-extrabold tracking-[-0.5px] text-[var(--text-h)] uppercase">
                  {segmento.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[150%] text-[var(--text)]">
                  {segmento.description}
                </p>

                <div className="mt-6 text-[12.5px] font-bold tracking-[0.3px] text-[#e11d2e] uppercase">
                  Padrão de exigência que aplicamos
                </div>

                <ul className="mt-4 flex flex-col gap-3">
                  {segmento.requisitos.map((requisito) => (
                    <li key={requisito} className="flex items-start gap-3">
                      <Icon
                        id="check-icon"
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#e11d2e]"
                      />
                      <span className="text-[14.5px] leading-[145%] text-[var(--text-h)]">
                        {requisito}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#fdf6e3] px-5 py-4">
                  <Icon
                    id="warning-icon"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e0a000]"
                  />
                  <p className="text-[13.5px] leading-[150%] text-[var(--text)]">
                    {segmento.alerta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
