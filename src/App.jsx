import { products } from "./data/products"
import ProductCard from "./components/ProductCard"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Collections from "./components/Collections"
import Promotions from "./components/Promotions"

function App() {
  const categories = [
    { id: "skulls", title: "Skulls" },
    { id: "cagoules", title: "Cagoules" },
    { id: "sports", title: "Sports", category: "maillots" },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar cartCount={0} />

      <Hero />
      <Collections />
      <Promotions />

      <section
        id="collection"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
      >
        <h2 className="mb-12 text-2xl font-bold uppercase tracking-wide sm:text-3xl">
          Notre collection
        </h2>

        <div className="space-y-20">
          {categories.map((category) => {
            const categoryProducts = products.filter(
              (product) =>
                product.category === (category.category || category.id)
            )

            return (
              <div key={category.id} id={category.id}>
                <h3 className="mb-6 border-b border-white/10 pb-4 text-lg font-bold uppercase tracking-widest sm:text-xl">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App