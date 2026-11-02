function Collections() {
  const collections = [
    {
      name: "Skulls",
      label: "01 — Collection",
      image: "/images/products/skull-02.jpeg",
      id: "skulls",
    },
    {
      name: "Cagoules",
      label: "02 — Collection",
      image: "/images/products/cagoule-03.jpeg",
      id: "cagoules",
    },
    {
      name: "Sports",
      label: "03 — Collection",
      image: "/images/products/maillot-01.jpeg",
      id: "sports",
    },
  ]

  return (
    <section
      id="collections"
      className="bg-white px-6 py-24 text-black md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* En-tête */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Explore
            </p>

            <h2 className="text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
              Collections
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-500">
            Découvrez les différentes collections sélectionnées par
            IRMODESTORE.
          </p>

        </div>

        {/* Cartes */}
        <div className="grid gap-4 md:grid-cols-3">

          {collections.map((collection) => (
            <a
              key={collection.id}
              href={`#${collection.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-neutral-100"
            >

              <img
                src={collection.image}
                alt={collection.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40" />

              {/* Texte */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">

                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
                  {collection.label}
                </p>

                <div className="flex items-end justify-between">

                  <h3 className="text-3xl font-black uppercase tracking-tight">
                    {collection.name}
                  </h3>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-lg transition group-hover:bg-white group-hover:text-black">
                    →
                  </span>

                </div>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Collections