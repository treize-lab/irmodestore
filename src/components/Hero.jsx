function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20">

      {/* Effets lumineux */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        {/* Texte */}
        <div>

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
            IRMODESTORE
          </p>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Style.
            <br />
            Attitude.
            <br />
            <span className="text-white/40">
              Identity.
            </span>
          </h1>

          <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
            Une sélection pensée pour ceux qui veulent imposer leur style.
            Découvrez la collection IRMODESTORE.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#collection"
              className="bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
            >
              Découvrir la collection
            </a>

            <a
              href="#about"
              className="border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-white/50"
            >
              En savoir plus
            </a>

          </div>

        </div>

        {/* Image Skull */}
        <div className="relative">

          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">

            <img
              src="public/images/products/skull-03.jpeg"
              alt="IRMODESTORE Skull"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Dégradé */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Texte sur l'image */}
            <div className="absolute bottom-6 left-6">

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                New Collection
              </p>

              <p className="mt-2 text-xl font-bold uppercase tracking-wide text-white">
                IRMODESTORE
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero