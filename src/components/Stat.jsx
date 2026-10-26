export default function Stat({ value, label, align = 'left' }) {
  return (
    <div data-stat className={align === 'right' ? 'text-right' : 'text-left'}>
      <p className="font-display text-3xl font-medium text-signal md:text-6xl">{value}</p>
      <p className="mt-2 max-w-[9rem] text-xs leading-snug text-lane/70 md:max-w-[14rem] md:text-base">
        {label}
      </p>
    </div>
  )
}
