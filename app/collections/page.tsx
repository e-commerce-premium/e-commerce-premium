import { Navbar } from "@/components/Navbar";

const collections = [
  {
    id: "women",
    name: "Femme",
    description: "Des pièces conçues pour sublimer votre beauté naturelle",
    image: "/images/collection-femme.jpg",
  },
  {
    id: "men",
    name: "Homme",
    description: "L'excellence masculine, intemporelle et élégante",
    image: "/images/collection-homme.jpg",
  },
  {
    id: "accessories",
    name: "Accessoires",
    description: "Détails raffinés qui complètent votre style parfait",
    image: "/images/collection-accessoires.jpg",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Header */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]" />

        <div className="absolute top-4 left-6 flex gap-2">
          {collections.map((c) => (
            <Link key={c.id} href={`/${c.name.toLowerCase().replace(/\s+/g, "-")}`} className="group relative">
              <span className="text-xs font-medium tracking-wider text-gray-500 group-hover:text-matte-gold transition-colors">{c.name}</span>
              <div className="absolute left-0 top-0 h-1 w-0 rounded-full bg-matte-gold transition-all group-hover:w-20" />
            </Link>
          ))}
        </div>

        <div className="relative mx-auto flex min-h-full flex-col justify-center px-6 py-12 sm:px-8 lg:px-12">
          <h1 className="h1-premium text-[4rem] leading-none tracking-tight md:text-[5rem] lg:text-[6rem]">
            Notre Collection
          </h1>
          <p className="mt-6 h3-premium max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Découvrez l'univers complet de Lumière. De la haute couture à l'élégance urbaine.
          </p>
        </div>

        <div className="absolute right-10 top-1/2 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-matte-gold bg-black/50 backdrop-blur-sm">
          <svg className="w-6 h-6 text-matte-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-x-8 gap-y-16 md:flex-row lg:max-w-[96rem] lg:gap-x-12 lg:gap-y-24">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 transition-all hover:border-matte-gold/50">
              {/* Placeholder Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full border-2 border-matte-gold/30">
                  <div className="w-8 h-8 rounded-full bg-matte-gold/50" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full border-t border-white/10 bg-gradient-to-t from-black via-black/90 to-transparent transition-transform group-hover:translate-y-0">
                <Link href={`/${collection.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex flex-col items-start justify-end gap-4 p-8 md:justify-center">
                  <h2 className="h1-premium text-[3rem] tracking-tight">{collection.name}</h2>
                  <p className="text-base leading-relaxed text-gray-400 md:text-lg">{collection.description}</p>
                  <span className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-matte-gold hover:bg-matte-gold hover:text-black">
                    Explorer
                    <svg className="-ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Hover Effect */}
              <button className="absolute inset-0 group-hover:flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all">
                <div className="h-[1.2rem] w-[1.2rem] rounded-full border border-matte-gold bg-matte-gold transition-transform group-hover:rotate-45" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <h3 className="text-center text-lg font-medium tracking-widest uppercase text-gray-500 md:text-xl">
          Nos Partenaires Exclusifs
        </h3>

        {/* Brand Names */}
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row lg:justify-center">
          {["Maison Chanel", "Hermès", "Louis Vuitton", "Gucci", "Prada"].map((brand) => (
            <Link key={brand} href={`/#`} className="text-2xl font-display tracking-widest uppercase text-gray-400 transition-colors hover:text-matte-gold group">
              {brand}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 rounded-full bg-matte-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-5">
          {["CV", "LV", "G", "P", "H"].map((logo) => (
            <Link key={logo} href={`/#`} className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 py-6 text-lg font-medium text-gray-400 transition-all hover:border-matte-gold hover:bg-white/10 group">
              {logo}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto border-t border-white/10 py-20 sm:px-6 md:px-8 lg:px-12">
        <NewsletterSection />
      </section>
    </div>
  );
}

function NewsletterSection() {
  return (
    <NewsletterForm />
  );
}

function NewsletterForm() {
  return (
    <form className="mx-auto flex max-w-md flex-col gap-4 items-center justify-center text-center">
      <Badge variant="default" className="mb-6">Sélectionnez un numéro</Badge>
      <h2 className="h2-premium mb-4 mx-auto max-w-xl text-[1.75rem] tracking-tight md:text-3xl lg:text-[2.5rem]">
        Abonnez-vous à Lumière
      </h2>
      <p className="mb-8 max-w-lg mx-auto leading-relaxed text-gray-400 md:text-xl">
        Recevez nos exclusivités, offres pré-coordinées et accès anticipé aux collections.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row w-full">
        <label htmlFor="newsletter-email" className="sr-only">Votre email</label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="votre@email.com"
          className="flex h-12 w-full rounded-lg border border-white/20 bg-black/50 px-6 text-sm font-medium text-white placeholder-gray-500 focus:border-matte-gold focus:outline-none focus:ring-2 focus:ring-matte-gold/50"
        />
        <Button type="submit" variant="primary">
          S'abonner
        </Button>
      </div>
    </form>
  );
}
