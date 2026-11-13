import { Navbar } from "@/components/Navbar";

// Sample premium products for the landing page
const featuredProducts = [
  {
    id: "1",
    name: "Robe Velours Édition Limitée",
    price: 450,
    description: "Velours pur italien avec détail broderie or",
    category: "Femme",
    image: "/images/placeholder-product.svg",
    rating: 5,
    reviewCount: 23,
    isNew: true,
  },
  {
    id: "2",
    name: "Manteau de Laine Britannique",
    price: 890,
    description: "Laine mérinos 100% avec doublage cashmere",
    category: "Femme",
    image: "/images/placeholder-product.svg",
    rating: 5,
    reviewCount: 47,
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Blazer Structuré Noir",
    price: 320,
    description: "Sensations de coupe italienne premium",
    category: "Homme",
    image: "/images/blazer-noir.jpg",
    rating: 4.5,
    reviewCount: 18,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section - Editorial Style */}
      <section className="relative h-screen overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]" />
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220%200%2060%22 60%22 fill=%22none%22}%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M20 40l20-20-20-20z%22 fill=%22rgba%28255%2C255%2C255%2C0.1%29%22%3E%3C/path%3E%3C/svg%3E')] opacity-40" />
            <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-matte-gold/10 blur-[120px]" />
            <div className="absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-amber-900/10 blur-[100px]" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-full flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-7xl animate-fadeInUp">
            {/* Featured Badge */}
            <div className="mb-8 flex items-center gap-3">
              <Badge variant="new" size="sm">
                Nouvelle Collection 2026
              </Badge>
              <Badge variant="default" size="sm">
                Élégance Redéfinie
              </Badge>
            </div>

            {/* Typography */}
            <h1 className="mb-8 h1-premium text-[5rem] leading-[0.9] tracking-tighter md:text-[6rem] lg:text-[7rem]">
              L'art de la
              <span className="gradient-text"> perfection</span>
            </h1>

            <p className="mb-12 h3-premium max-w-xl text-[1.25rem] leading-relaxed text-gray-400 md:text-xl">
              Découvrez notre collection exclusive conçue pour ceux qui refusent le compromis.
              Chaque pièce est artisan, crafted avec passion et respect du temps éternel.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/collections" className="group relative flex items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-white text-black transition-all hover:border-matte-gold hover:shadow-gold/50 md:w-auto">
                <span className="flex items-center gap-3 font-medium tracking-tight group-hover:gap-4 transition-all duration-300">
                  Explorer la Collection
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link href="/about" className="group flex items-center justify-center rounded-lg border border-white/20 bg-transparent text-black transition-all hover:bg-white/5">
                <span className="font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  Notre Histoire
                </span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-col gap-4 sm:flex-row md:justify-between lg:gap-8">
              <p className="text-sm text-gray-500">
                Plus de {featuredProducts.length * 10 + 23} élégantes pièces vendues en janvier 2026
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-matte-gold/80 hover:text-matte-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">({featuredProducts.length * 36 + 244} avis) • 4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm">
          <div className="h-[2px] w-[12px] animate-scroll ml-3 rounded-full bg-matte-gold" />
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="relative mx-auto border-t border-white/10 py-24 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="h2-premium mb-4 mx-auto max-w-2xl text-[2rem] tracking-tight lg:text-[3rem]">
              Nos Collections Phares 2026
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
              Un soin attentif aux détails et une palette de matières exceptionnelles
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-[800px] lg:gap-x-10">
            {featuredProducts.map((product, index) => (
              <article key={product.id} className={`group relative ${index % 2 === 0 ? 'lg:rounded-tl-xl' : 'lg:rounded-tr-xl'}`}>
                {/* Product Image */}
                <div className="mb-8 flex aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-black">
                  {product.image && (
                    <Image src={product.image} alt={product.name} fill className="object-cover opacity-70 transition-opacity group-hover:opacity-100" />
                  )}
                  {/* Product Info Overlay */}
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-gradient-to-t from-black via-black/80 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm text-matte-gold">{product.description}</p>
                    <h3 className="mt-2 h1-premium text-[1.75rem] tracking-tight md:text-2xl">{product.name}</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-medium tracking-tight">{formatPrice(product.price)}</span>
                      <Link
                        href={`/products/${product.id}`}
                        className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-matte-gold hover:border-matte-gold hover:text-black"
                      >
                        Détails
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">{product.isNew && <Badge variant="new" size="sm">Nouveauté</Badge>}
                    {product.isBestSeller && <Badge variant="featured" size="sm">Le plus vendu</Badge>}
                  </div>
                  <p className="font-medium tracking-tight">{formatPrice(product.price)}</p>
                </div>

                {/* Quick Add on Hover */}
                <button
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 lg:flex"
                  aria-label={`Ajouter ${product.name} au panier`}
                >
                  <svg className="h-8 w-8 rounded-full bg-matte-gold text-black drop-shadow-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <Link href="/all-products" className="group inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 py-4 font-medium text-base tracking-tight transition-all hover:border-matte-gold hover:bg-white/5">
              Voir toute la collection
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative mx-auto border-t border-white/10 py-24 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-matte-gold/10 via-black to-black/80 px-8 py-16 text-center backdrop-blur-sm sm:px-12 md:px-16">
          <Badge variant="default" className="mb-6">Sélectionnez un numéro</Badge>
          <h2 className="h2-premium mb-4 mx-auto max-w-xl text-[1.75rem] tracking-tight md:text-3xl lg:text-[2.5rem]">
            Abonnez-vous à Lumière
          </h2>
          <p className="mb-8 max-w-lg mx-auto leading-relaxed text-gray-400 md:text-xl">
            Recevez nos exclusivités, offres pré-coordinées et accès anticipé aux collections.
            Chaque numéro est une invitation à l'élégance.
          </p>

          <NewsletterForm />
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="border-t border-white/10 bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between md:flex-wrap md:gap-12 lg:justify-start xl:gap-x-16">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5e6d3]">
                  <span className="text-black font-playfair text-lg">E</span>
                </div>
                <span className="hidden text-xl font-display font-bold tracking-tight lg:block xl:text-2xl">
                  Lumière
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 max-w-xs md:text-base lg:ml-8 xl:max-w-md">
                Conception et savoir-faire français. Pour une mode sans compromis depuis 2019.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-16 gap-y-8">
              {["Collections", "À propos", "Cartes de Crédit", "Presse"].map((link) => (
                <Link key={link} href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="group inline-block cursor-pointer rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-gray-400 transition-all hover:border-matte-gold hover:text-matte-gold">
                    {link}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm leading-relaxed text-gray-500">
            <p>© 2026 Lumière. Tous droits réservés. Conception par Claude Code.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NewsletterForm() {
  return (
    <form className="mt-12 flex max-w-md flex-col gap-4 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">Votre email</label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="votre@email.com"
        className="flex h-12 w-full rounded-lg border border-white/20 bg-black/50 px-6 text-sm font-medium text-white placeholder-gray-500 focus:border-matte-gold focus:outline-none focus:ring-2 focus:ring-matte-gold/50"
      />
      <Button type="submit" variant="primary" fullWidth size="lg">
        S'abonner
      </Button>
    </form>
  );
}
