import { useState } from "react"

function ProductCard({ product }) {
  const [isImageOpen, setIsImageOpen] = useState(false)

  const discount =
    product.isPromo && product.promoPrice
      ? Math.round(
          ((product.price - product.promoPrice) / product.price) * 100
        )
      : 0

  function orderOnWhatsApp() {
    const phoneNumber = "2250141136167"

    const price =
      product.isPromo && product.promoPrice
        ? product.promoPrice
        : product.price

    const message =
      `Bonjour, je souhaite commander : ${product.name} — ` +
      `${price.toLocaleString("fr-FR")} FCFA.`

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <article className="group">
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">

          {/* Photo du produit */}
          <button
            type="button"
            onClick={() => setIsImageOpen(true)}
            className="absolute inset-0 z-0 block h-full w-full cursor-zoom-in"
            aria-label={`Agrandir la photo de ${product.name}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </button>

          {product.isPromo && product.promoPrice && (
            <span className="pointer-events-none absolute left-4 top-4 z-10 bg-red-600 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
              -{discount}%
            </span>
          )}

          {product.isNew && !product.isPromo && (
            <span className="pointer-events-none absolute left-2 top-2 z-10 bg-black/90 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-white sm:left-3 sm:top-3 sm:px-2.5 sm:text-[9px]">
              Nouveau
            </span>
          )}

          {!product.stock ? (
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/40">
              <span className="border border-white/40 bg-black px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                Épuisé
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={orderOnWhatsApp}
              className="absolute bottom-2 left-2 right-2 z-20 cursor-pointer bg-white py-3 text-[9px] font-bold uppercase tracking-wider text-black hover:bg-neutral-200 active:scale-95"
            >
              Commander sur WhatsApp
            </button>
          )}
        </div>

        <div className="pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-[8px] font-medium uppercase tracking-wider text-neutral-400 sm:mb-2 sm:text-[9px] sm:tracking-[0.25em]">
                {product.category}
              </p>

              <h3 className="text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                {product.name}
              </h3>
            </div>

            <div className="text-right">
              {product.isPromo && product.promoPrice ? (
                <>
                  <p className="text-xs text-white/40 line-through">
                    {product.price.toLocaleString("fr-FR")} FCFA
                  </p>

                  <p className="mt-1 text-xs font-bold text-white sm:text-sm">
                    {product.promoPrice.toLocaleString("fr-FR")} FCFA
                  </p>
                </>
              ) : (
                <p className="text-xs font-bold text-white sm:text-sm">
                  {product.price.toLocaleString("fr-FR")} FCFA
                </p>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Affichage de la photo en plein écran */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute right-5 top-5 z-[101] flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-3xl text-white"
            aria-label="Fermer la photo"
          >
            ×
          </button>

          <img
            src={product.image}
            alt={product.name}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>
      )}
    </>
  )
}

export default ProductCard