import { useState, type FormEvent } from 'react'

// "Novo rastreamento" on SSW's result page links back here.
const RETURN_URL = 'https://site-transmano-red.vercel.app/#hero'

type Perfil = 'remetente' | 'destinatario' | 'pagador'
type Modo = 'nfs' | 'senha'

const perfis: { id: Perfil; label: string }[] = [
  { id: 'remetente', label: 'Remetente' },
  { id: 'destinatario', label: 'Destinatário' },
  { id: 'pagador', label: 'Pagador' },
]

const modos: { id: Modo; label: string }[] = [
  { id: 'nfs', label: 'Por NFs' },
  { id: 'senha', label: 'Com senha' },
]

// The 6 SSW tracking forms (ssw.inf.br/ajuda/rastreamento*.html): one action + CNPJ field name per perfil × modo.
const sswForms: Record<Perfil, Record<Modo, string> & { cnpjField: string }> = {
  remetente: {
    cnpjField: 'cnpj',
    nfs: 'https://ssw.inf.br/2/ssw_resultSSW',
    senha: 'https://ssw.inf.br/2/ssw_resultSSW_rem',
  },
  destinatario: {
    cnpjField: 'cnpjdest',
    nfs: 'https://ssw.inf.br/2/ssw_resultSSW_dest_nro',
    senha: 'https://ssw.inf.br/2/ssw_resultSSW_dest',
  },
  pagador: {
    cnpjField: 'cnpjpag',
    nfs: 'https://ssw.inf.br/2/ssw_resultSSW_pag_nro',
    senha: 'https://ssw.inf.br/2/ssw_resultSSW_pag',
  },
}

type Errors = { documento?: string; nfs?: string; senha?: string }

function Icon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { id: T; label: string }[]
  value: T
  onChange: (id: T) => void
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="flex items-center gap-1 rounded-full bg-[#f4f3ec] p-1 text-[11px] font-bold tracking-[0.2px] uppercase"
    >
      {options.map((option) => {
        const active = option.id === value
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.id)}
            className={`flex-1 rounded-full px-3 py-1.5 transition-colors ${
              active
                ? 'bg-white text-[var(--text-h)] shadow-[0_4px_10px_rgba(0,0,0,0.08)]'
                : 'text-[var(--text)] hover:text-[var(--text-h)]'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

const inputClass =
  'mt-1 w-full rounded-xl border px-3.5 py-2 text-[13.5px] text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:border-[#e11d2e] focus:outline-none'
const labelClass = 'mt-2.5 block text-[11px] font-bold tracking-[0.3px] text-[var(--text-h)] uppercase'

export default function TrackingWidget() {
  const [perfil, setPerfil] = useState<Perfil>('remetente')
  const [modo, setModo] = useState<Modo>('nfs')
  const [documento, setDocumento] = useState('')
  const [nfs, setNfs] = useState('')
  const [senha, setSenha] = useState('')
  const [errors, setErrors] = useState<Errors>({})

  const form = sswForms[perfil]
  const perfilLabel = perfis.find((p) => p.id === perfil)!.label.toLowerCase()
  // SSW expects bare digits for the document and one NF per line.
  const nfList = nfs
    .split('\n')
    .map((line) => line.replace(/\D/g, ''))
    .filter(Boolean)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const next: Errors = {}
    if (documento.length !== 11 && documento.length !== 14) {
      next.documento = 'Informe um CNPJ (14 dígitos) ou CPF (11 dígitos).'
    }
    if (modo === 'nfs' && nfList.length === 0) {
      next.nfs = 'Informe ao menos uma nota fiscal.'
    }
    // Mirrors SSW's own rule: password is mandatory for CNPJ, optional for CPF.
    if (modo === 'senha' && documento.length > 11 && !senha) {
      next.senha = 'Informe a senha.'
    }
    setErrors(next)
    if (Object.keys(next).length > 0) event.preventDefault()
  }

  return (
    <form
      method="POST"
      action={form[modo]}
      target="_blank"
      rel="noopener"
      noValidate
      onSubmit={handleSubmit}
      className="px-6 pt-3 pb-4"
    >
      <input type="hidden" name="urlori" value={RETURN_URL} />
      <input type="hidden" name={form.cnpjField} value={documento} />
      {modo === 'nfs' && <textarea hidden readOnly name="NR" value={nfList.join('\n')} />}
      {/* Por NFs: password is optional and only unlocks delivery proof / DACTE. */}
      {senha && <input type="hidden" name={modo === 'nfs' ? 'chave' : 'senha'} value={senha} />}

      <div className="flex flex-col gap-1.5">
        <Segmented label="Consultar como" options={perfis} value={perfil} onChange={setPerfil} />
        <Segmented
          label="Forma de consulta"
          options={modos}
          value={modo}
          onChange={(id) => {
            setModo(id)
            setErrors({})
          }}
        />
      </div>

      <label htmlFor="tracking-documento" className={labelClass}>
        CNPJ/CPF do {perfilLabel}
      </label>
      <input
        id="tracking-documento"
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder="Somente números"
        maxLength={14}
        value={documento}
        onChange={(e) => setDocumento(e.target.value.replace(/\D/g, ''))}
        aria-invalid={!!errors.documento}
        aria-describedby={errors.documento ? 'tracking-documento-erro' : undefined}
        className={`${inputClass} ${errors.documento ? 'border-[#e11d2e]' : 'border-[var(--border)]'}`}
      />
      {errors.documento && (
        <p id="tracking-documento-erro" className="mt-1 text-[11.5px] text-[#e11d2e]">
          {errors.documento}
        </p>
      )}

      {modo === 'nfs' && (
        <>
          <label htmlFor="tracking-nfs" className={labelClass}>
            Notas fiscais{' '}
            <span className="font-normal normal-case text-[var(--text)]">(uma por linha)</span>
          </label>
          <textarea
            id="tracking-nfs"
            rows={1}
            placeholder="Ex: 123456"
            value={nfs}
            onChange={(e) => setNfs(e.target.value)}
            aria-invalid={!!errors.nfs}
            aria-describedby={errors.nfs ? 'tracking-nfs-erro' : undefined}
            className={`${inputClass} resize-none ${errors.nfs ? 'border-[#e11d2e]' : 'border-[var(--border)]'}`}
          />
          {errors.nfs && (
            <p id="tracking-nfs-erro" className="mt-1 text-[11.5px] text-[#e11d2e]">
              {errors.nfs}
            </p>
          )}
        </>
      )}

      <label htmlFor="tracking-senha" className={labelClass}>
        Senha{' '}
        {modo === 'nfs' && (
          <span className="font-normal normal-case text-[var(--text)]">
            (opcional · libera comprovante de entrega)
          </span>
        )}
      </label>
      <input
        id="tracking-senha"
        type="password"
        autoComplete="off"
        maxLength={8}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        aria-invalid={!!errors.senha}
        aria-describedby={errors.senha ? 'tracking-senha-erro' : undefined}
        className={`${inputClass} ${errors.senha ? 'border-[#e11d2e]' : 'border-[var(--border)]'}`}
      />
      {errors.senha && (
        <p id="tracking-senha-erro" className="mt-1 text-[11.5px] text-[#e11d2e]">
          {errors.senha}
        </p>
      )}

      <button
        type="submit"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#e11d2e] px-6 py-2.5 text-[13px] font-bold tracking-[0.3px] text-white uppercase transition-colors hover:bg-[#c8182a]"
      >
        Rastrear agora
        <Icon id="arrow-right-icon" className="h-4 w-4" />
      </button>

      <p className="mt-2.5 flex items-start gap-2 text-[11.5px] leading-[140%] text-[var(--text)]">
        <Icon id="lock-icon" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e11d2e]" />
        Consulta segura via sistema SSW. O resultado abre em uma nova aba.
      </p>
    </form>
  )
}
