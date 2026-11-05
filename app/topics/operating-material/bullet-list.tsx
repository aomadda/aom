import { ListMark } from '@/components/topics/operating-material/ListMark'
type Bullet = { mark: string; text: string }

export default function BulletList({
  items,
  index = 0,
}: {
  items: Bullet[]
  index?: number
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, itemIndex) => (
        <li
          key={`${itemIndex}-${item.text}`}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
          style={{ animation: `fade-up 0.55s ease-out ${0.25 + 0.04 * (index + itemIndex)}s both` }}
        >
          {item.mark ? (
            <ListMark>{item.mark}</ListMark>
          ) : (
            <span className="mt-0.5 w-4 shrink-0" aria-hidden />
          )}
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
        </li>
      ))}
    </ul>
  )
}
