import { useRef } from 'react'
import Car from './Car'
import Stat from './Stat'
import { STAT_SETS } from '../data/stats'
import { useHeroAnimation } from '../hooks/useHeroAnimation'

const WORDS = ['WELCOME', 'ITZFIZZ']

export default function Hero() {
  const scope = useRef(null)
  useHeroAnimation(scope)

  return (
    <section ref={scope} data-hero className="relative h-screen w-full overflow-hidden bg-asphalt">
      {/* Road: tall strip moved with translateY to fake forward speed */}
      <div data-road-wrap className="road-mask pointer-events-none absolute inset-y-0 left-1/2 w-[min(34vh,16rem)] -translate-x-1/2 overflow-hidden bg-black/25 [mask-image:linear-gradient(to_bottom,transparent_18vh,black_32vh)]">
        <div data-road className="road-dashes absolute -top-full left-1/2 h-[300%] w-1.5 -translate-x-1/2 will-change-transform" />
      </div>

      {/* Headline */}
      <h1
        data-headline
        aria-label="Welcome ItzFizz"
        className="absolute inset-x-0 top-[11vh] z-20 flex flex-wrap justify-center gap-x-[2.2em] px-4 font-display text-xl font-light text-lane will-change-transform md:text-5xl"
      >
        {WORDS.map((word) => (
          <span key={word} aria-hidden="true" className="flex">
            {word.split('').map((ch, i) => (
              <span key={i} data-letter className="inline-block pr-[0.45em] will-change-transform">
                {ch}
              </span>
            ))}
          </span>
        ))}
      </h1>

      {/* Stat panels flank the car; they are stacked and crossfaded on scroll */}
      {STAT_SETS.map((set, i) => (
        <div
          key={i}
          data-panel={i}
          className={`absolute inset-x-0 top-[32vh] z-20 flex justify-between px-4 will-change-transform md:px-[8vw] ${i > 0 ? 'opacity-0' : ''}`}
        >
          <div className="flex flex-col gap-10 md:gap-24">
            {set.filter((s) => s.side === 'left').map((s, j) => <Stat key={j} {...s} />)}
          </div>
          <div className="flex flex-col gap-10 md:gap-24">
            {set.filter((s) => s.side === 'right').map((s, j) => <Stat key={j} {...s} align="right" />)}
          </div>
        </div>
      ))}

      {/* Car: outer wrapper = scroll motion, inner wrapper = intro motion */}
      <div
        data-car
        className="pointer-events-none absolute -bottom-[16vh] left-1/2 z-10 h-[52vh] -translate-x-1/2 will-change-transform md:h-[66vh]"
      >
        <div data-car-inner className="h-full">
          <Car />
        </div>
      </div>
    </section>
  )
}
