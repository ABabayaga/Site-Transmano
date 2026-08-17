/* const stats = [
  { value: '20', label: 'anos de estrada' },
  { value: '12+', label: 'estados atendidos' },
  { value: '40', label: 'veículos próprios' },
]
 */
export default function QuemSomos() {
  return (
    <section
      id="quem-somos"
      className="relative left-1/2 w-screen -translate-x-1/2 text-left font-[family-name:var(--sans)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_1.05fr] items-center gap-10 px-8 py-15 max-[1080px]:grid-cols-1 max-[1080px]:gap-10 max-[860px]:px-5 max-[860px]:py-14">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/quem.jpg"
            alt="Caminhão do Grupo Transmano em rodovia"
            className="h-full max-h-[520px] w-full object-cover"
          />
          <span className="absolute bottom-5 left-5 rounded-full bg-[#f5c518] px-4 py-2 text-[12.5px] font-bold tracking-[0.3px] text-[#171717] uppercase">
            Campo Grande · MS
          </span>
        </div>

        <div>
          <span className="flex items-center gap-2 text-[13px] font-bold tracking-[0.3px] text-[#e11d2e] uppercase">
            <span className="flex w-6 flex-col gap-[3px]" aria-hidden="true">
              <span className="h-[2px] bg-[#e11d2e]" />
              <span className="h-0 border-t-2 border-dashed border-[#e11d2e]" />
              <span className="h-[2px] bg-[#e11d2e]" />
            </span>
            Quem somos
          </span>

          <h2 className="mt-4 text-[52px] leading-[1.08] font-black! tracking-[-1px] text-[var(--text-h)] uppercase max-[860px]:text-[30px]">
            Referência em transporte e logística no Centro-Oeste
          </h2>

          <p className="mt-6 max-w-[520px] text-[16px] leading-[150%] text-[var(--text)]">
            Com 20 anos de atuação, o Grupo Transmano tem matriz em Campo Grande/MS e, desde 2022,
            expandiu a operação com novas unidades para ampliar o atendimento e a eficiência
            logística. Combinamos experiência e estrutura moderna para entregar resultados de alto
            desempenho.
          </p>

         {/*  <div className="mt-10 grid grid-cols-3 gap-6 max-[640px]:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[34px] font-extrabold text-[#e11d2e]">{stat.value}</div>
                <div className="text-[13px] text-[var(--text)]">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
