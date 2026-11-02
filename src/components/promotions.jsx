import { products } from "../data/products"
import ProductCard from "./productCard"

function Promotions() {

  // Récupérer uniquement les produits en promotion
  const promoProducts = products.filter(
    (product) =>
      product.isPromo &&
      product.promoPrice !== null &&
      product.promoPrice > 0 &&
      product.promoPrice < product.price &&
      product.stock
  )

  // Ne rien afficher s'il n'y a aucune promotion
  if (promoProducts.length === 0) {
    return null
  }

  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        {/* En-tête */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-red-500">
              Limited offers
            </p>

            <h2 className="text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
              Offres du moment<span className="text-red-500">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50">
            Profitez de nos offres exclusives avant qu'elles ne disparaissent.
          </p>

        </div>

        {/* Produits en promotion */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">

          {promoProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Promotions