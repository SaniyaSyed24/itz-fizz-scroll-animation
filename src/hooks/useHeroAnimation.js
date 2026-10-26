import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Two independent layers so they never fight over the same properties:
 *  1. Intro  – plays once on load (letters, car, stats).
 *  2. Scroll – one scrubbed, pinned timeline whose progress == scroll progress.
 * Only transform / opacity are animated, so nothing triggers layout on scroll.
 */
export function useHeroAnimation(scope) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.selector(scope)
      const hero = scope.current
      const letters = q('[data-letter]')
      const stats = q('[data-panel="0"] [data-stat]')
      const panels = q('[data-panel]')
      const [car] = q('[data-car]')
      const [carInner] = q('[data-car-inner]')
      const [headline] = q('[data-headline]')
      const [road] = q('[data-road]')
      const [roadWrap] = q('[data-road-wrap]')

      // ---- 1. Intro (time based, runs once) ----
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from(letters, { yPercent: 70, opacity: 0, duration: 1.1, stagger: 0.05 })
        .from(carInner, { yPercent: 25, opacity: 0, scale: 0.94, duration: 1.4, ease: 'power4.out' }, 0.25)
        .from(stats, { y: 36, opacity: 0, duration: 0.9, stagger: 0.22 }, '-=0.7')

      // ---- 2. Scroll (progress based) ----
      const drive = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 1.2, // lerps toward scroll position => smooth, inertial feel
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      const H = () => window.innerHeight

      drive
        // car cruises forward, then drives off the top at the end
        .to(car, { y: () => -H() * 0.12, scale: 1.1, duration: 2.4 }, 0)
        .to(car, { keyframes: [{ rotation: -2.5 }, { rotation: 2.5 }, { rotation: 0 }], duration: 2.4 }, 0)
        .to(car, { y: () => -H() * 1.3, duration: 0.8, ease: 'power2.in' }, 2.4)
        // road streams past for the whole scroll
        .to(road, { yPercent: 35, duration: 3.2 }, 0)

      // Content change: panel i leaves, panel i+1 arrives
      panels.forEach((panel, i) => {
        const t = 0.9 + i * 1.0
        const isLast = i === panels.length - 1
        drive.to(panel, { y: -40, opacity: 0, duration: 0.4, ease: 'power2.in' }, isLast ? 2.5 : t)
        if (!isLast) {
          drive.fromTo(panels[i + 1], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, t + 0.35)
        }
      })

      drive.to(headline, { y: -120, opacity: 0, scaleX: 1.12, duration: 0.4, ease: 'power2.in' }, 2.1)
    })

    return () => mm.revert()
  }, [scope])
}
