import { formatValue } from '../lib/swapi'

export default function DataCard({ mark, title, fields }) {
  return (
    <article className="min-h-56 rounded-2xl border border-sky-200/20 bg-[rgba(15,20,32,0.78)] p-7">
      <p className="text-xs font-extrabold tracking-[0.16em] text-sw-yellow">{mark}</p>
      <h3 className="mt-4 mb-5 min-h-14 text-[1.28rem] leading-tight">{title}</h3>
      <dl className="m-0">
        {fields.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-3 border-t border-sky-200/15 py-2 text-sm"
          >
            <dt className="text-sw-muted">{label}</dt>
            <dd className="m-0 text-right text-sw-text">{formatValue(value)}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
