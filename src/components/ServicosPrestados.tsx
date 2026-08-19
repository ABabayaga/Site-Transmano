import { useScrollReveal } from '../hooks/useScrollReveal'

const servicos = [
  {
    title: 'Carga fechada',
    description:
      'Ideal para embarques exclusivos e de alta volumetria, com dedicação total do veículo à sua operação.',
    image: '/cargafe.jpg',
  },
  {
    title: 'Transporte fracionado',
    description:
      'Operações otimizadas via cross docking e roteirização eficiente, unindo cargas com controle total.',
    image: '/crossd.jpg',
  },
  {
    title: 'Distribuição nas bases',
    description:
      'Entrega estratégica com agilidade regional a partir das nossas unidades operacionais e bases de embarque.',
    image: '/distr.jpg',
  },
]

export default function ServicosPrestados() {
  const ref = useScrollReveal<HTMLDivElement>('.gsap-reveal')

  return (
    <section
      id="servicos-prestados"
      className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f5f5f7] text-left font-[family-name:var(--sans)]"
    >
      <div ref={ref} className="mx-auto max-w-[1340px] px-8 py-12 max-[860px]:px-5 max-[860px]:py-14">
        <span className="gsap-reveal flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#e11d2e] uppercase">
          <span className="flex w-6 flex-col gap-[3px]" aria-hidden="true">
            <span className="h-[2px] bg-[#e11d2e]" />
            <span className="h-0 border-t-2 border-dashed border-[#e11d2e]" />
            <span className="h-[2px] bg-[#e11d2e]" />
          </span>
          Serviços prestados
        </span>

        <h2 className="gsap-reveal mt-4 max-w-[820px] text-[42px] leading-[1.08] font-extrabold tracking-[-1px] text-[var(--text-h)] uppercase max-[860px]:text-[30px]">
          Soluções completas em transporte rodoviário
        </h2>

        <p className="gsap-reveal mt-6 max-w-[600px] text-[16px] leading-[150%] text-[var(--text)]">
          Atuação nas regiões Centro-Oeste, Sudeste, Sul e Nordeste, com estrutura preparada para
          atender diferentes demandas logísticas com agilidade, segurança e precisão.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {servicos.map((servico) => (
            <div
              key={servico.title}
              className="gsap-reveal relative flex min-h-[260px] items-end overflow-hidden rounded-2xl border border-[var(--border)] p-8"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${servico.image})`, filter: 'brightness(0.75)' }}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="relative">
                <h3 className="text-[18px] font-extrabold tracking-[-0.3px] text-white uppercase [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                  {servico.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[150%] text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                  {servico.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
