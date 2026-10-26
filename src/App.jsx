import Hero from './components/Hero'

export default function App() {
  return (
    <main>
      <Hero />
      {/* Content after the hero proves the pin releases and the page keeps scrolling */}
      <section className="flex min-h-screen items-center justify-center px-6">
        <p className="max-w-xl text-center font-display text-2xl font-light leading-relaxed text-lane/80">
          The hero is released here and the page scrolls on as normal.
        </p>
      </section>
    </main>
  )
}
