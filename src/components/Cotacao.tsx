const beneficios = [
  'Atendimento consultivo, não só cotação de frete',
  'Operação desenhada para o seu segmento',
  'Resposta ágil pela nossa equipe comercial',
]

const segmentos = ['Setor alimentício', 'Placas solares', 'Outro']

function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[11.5px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase">
        {label}
      </label>
      <input
        className="mt-2 w-full rounded-xl border border-[var(--border)] px-4 py-3 text-[14px] text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:border-[#e11d2e] focus:outline-none"
        {...props}
      />
    </div>
  )
}

export default function Cotacao() {
  return (
    <section
      id="cotacao"
      className="relative left-1/2 w-screen -translate-x-1/2 bg-[#fafafa] text-left font-[family-name:var(--sans)]"
    >
      <div className="mx-auto max-w-[1440px] px-8 py-20 max-[860px]:px-5 max-[860px]:py-12">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#e6202f] to-[#8a1420]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-32 -bottom-32 h-[480px] w-[480px] rounded-full bg-[#f5c518]/20 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-[1fr_1.05fr] items-start gap-16 p-16 max-[1080px]:grid-cols-1 max-[1080px]:gap-12 max-[860px]:p-8">
            <div className="self-center">
              <h2 className="text-[46px] leading-[1.05] font-extrabold tracking-[-1px] text-white uppercase max-[860px]:text-[32px]">
                Peça uma cotação
                <br />
                sem compromisso
              </h2>

              <p className="mt-6 max-w-[440px] text-[16px] leading-[150%] text-white/85">
                Conte para o nosso time o que você precisa transportar. Retornamos com a melhor
                solução para a sua operação.
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                {beneficios.map((beneficio) => (
                  <li key={beneficio} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon id="check-icon" className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-[15px] font-medium text-white">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form className="rounded-3xl bg-white p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] max-[860px]:p-6">
              <div className="grid grid-cols-2 gap-5 max-[560px]:grid-cols-1">
                <Field label="Nome" placeholder="Seu nome" name="nome" />
                <Field label="Empresa" placeholder="Sua empresa" name="empresa" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-5 max-[560px]:grid-cols-1">
                <Field
                  label="E-mail"
                  type="email"
                  placeholder="voce@empresa.com"
                  name="email"
                />
                <Field
                  label="WhatsApp"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  name="whatsapp"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-5 max-[560px]:grid-cols-1">
                <Field label="Origem" placeholder="Cidade / UF" name="origem" />
                <Field label="Destino" placeholder="Cidade / UF" name="destino" />
              </div>

              <div className="mt-5">
                <label className="block text-[11.5px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase">
                  Tipo de carga
                </label>
                <select
                  name="tipoDeCarga"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[var(--border)] px-4 py-3 text-[14px] text-[var(--text-h)] focus:border-[#e11d2e] focus:outline-none"
                >
                  <option value="" disabled>
                    Selecione o segmento
                  </option>
                  {segmentos.map((segmento) => (
                    <option key={segmento} value={segmento}>
                      {segmento}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#e11d2e] px-6 py-4 text-[13px] font-bold tracking-[0.3px] text-white uppercase transition-colors hover:bg-[#c8182a]"
              >
                Enviar cotação
                <Icon id="arrow-right-icon" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
