import { useState } from "react"

function Navbar({ cartCount }) {
const [menuOpen, setMenuOpen] = useState(false)

const closeMenu = () => {
setMenuOpen(false)
}

const navLinks = [
{ label: "Accueil", href: "#" },
{ label: "Collection", href: "#collection" },
{ label: "Skulls", href: "#skulls" },
{ label: "Cagoules", href: "#cagoules" },
{ label: "Sports", href: "#sports" },
]

return ( <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">

```
  {/* BARRE PRINCIPALE */}
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20">

    {/* LOGO */}
    <a
      href="#"
      onClick={closeMenu}
      className="text-2xl font-black tracking-[-0.08em] text-white"
    >
      IR<span className="ml-1 text-[9px] font-medium tracking-[0.2em] text-neutral-400">MODESTORE</span>
    </a>

    {/* NAVIGATION ORDINATEUR */}
    <div className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>

    {/* ACTIONS À DROITE */}
    <div className="flex items-center gap-4">

      {/* PANIER */}
      <button className="relative text-white">
        <span className="text-[10px] font-semibold uppercase tracking-wider sm:text-xs">
          Panier
        </span>

        <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-black">
          {cartCount}
        </span>
      </button>

      {/* BOUTON MENU MOBILE */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-10 w-10 items-center justify-center text-2xl text-white md:hidden"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "×" : "☰"}
      </button>

    </div>
  </div>

  {/* MENU MOBILE */}
  {menuOpen && (
    <div className="border-t border-white/10 bg-black px-5 py-6 md:hidden">

      <div className="flex flex-col gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            className="border-b border-white/10 pb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>

    </div>
  )}

</nav>
)
}

export default Navbar
