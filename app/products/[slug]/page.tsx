import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

// Mock product data - in production, fetch this from an API
const products = {
  robe-velours: {
    slug: "robe-velours",
    name: "Robe Velours Édition Limitée",
    description: "Velours pur italien avec détail broderie or. Robe longue en velours rouge bordeaux, coupure cintrée avec décolleté en V profond. Broderie manuelle sur plis et épaules. Fermeture invisible par l'arrière.",
    price: 450,
    category: "Robes",
    colors: [
      { name: "Rouge Bordeaux", hex: "#8a1c27", swatch: "#" },
      { name: "Noir Nuit", hex: "#0a0a0a", swatch: "#" },
      { name: "Vert Émeraude", hex: "#1e4d3b", swatch: "#" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 5,
    reviewCount: 23,
  },
  manteau-laine: {
    slug: "manteau-laine",
    name: "Manteau de Laine Britannique",
    description: "Laine mérinos 100% avec doublage cashmere. Manteau double-jus parodie, coupe droite, col montant, poches latérales. Revers en velours rouge. Fermeture cachée.",
    price: 890,
    category: "Manteaux",
    colors: [
      { name: "Gris Ardoise", hex: "#4a5c63", swatch: "#" },
      { name: "Noir Ebonite", hex: "#1a1a1a", swatch: "#" },
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 5,
    reviewCount: 47,
    isBestSeller: true,
  },
  blazer-noir: {
    slug: "blazer-noir",
    name: "Blazer Structuré Noir",
    description: "Sensations de coupe italienne premium. Blazer sans col, épaules structurées, boutons or, doublage satiné. Fermeture bouton caché.",
    price: 320,
    category: "Hauts",
    colors: [
      { name: "Noir Intense", hex: "#1a1a1a", swatch: "#" },
      { name: "Charcoal Premium", hex: "#36454f", swatch: "#" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviewCount: 18,
  },
};

const relatedProducts = [
  {
    name: "Pantalon Lin Côtelé Beige",
    price: 280,
    image: "/images/placeholder-product.svg",
  },
  {
    name: "Trench Oversized Taupe",
    price: 450,
    image: "/images/placeholder-product.svg",
  },
  {
    name: "Sarlots Soie Vert Émeraude",
    price: 380,
    image: "/images/placeholder-product.svg",
  },
];

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug] || products.robe-velours;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Breadcrumb */}
      <nav className="absolute top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-sm py-4">
        <ol className="flex items-center gap-x-6 text-xs font-medium tracking-wider text-gray-500">
          {["Accueil", product.category].map((item, index) => (
            <li key={index} className="relative">
              {index === 0 ? (
                <>
                  <Link href="/" className="after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-matte-gold transition-all group-hover:w-full" aria-current="page">
                    Accueil
                  </Link>
                </>
              ) : (
                <Link href="/" className="transition-colors hover:text-white">{item}</Link>
              )}
              {index !== 0 && <span className="ar">/</span>}
            </li>
          ))}
        </ol>
      </nav>

      {/* Product Details */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 xl:max-w-[96rem]">
        {/* Tabs */}
        <div className="mx-auto mb-12 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 md:w-auto">
          {["Image", "Description"].map((tab) => (
            <Link key={tab} href={`#`} className="relative flex items-center gap-x-6 text-xs font-medium tracking-wider uppercase transition-colors hover:text-matte-gold">
              <span className="group">{tab}</span>
              {tab === "Image" && (
                <span className="absolute bottom-0 left-0 h-[1px] w-0 rounded-full bg-matte-gold transition-all group-hover:w-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Main Content */}
        <div className="mx-auto flex max-w-[96rem] flex-col gap-x-16 lg:flex-row lg:gap-x-0">
          {/* Image Gallery */}
          <div className="flex flex-col gap-y-4 md:flex-row lg:max-w-[58rem] lg:w-full xl:max-w-[62rem]">
            {/* Primary Image */}
            <div className="relative mb-12 h-[50rem] w-full overflow-hidden rounded-xl border border-white/10 bg-gray-900 md:mb-0">
              <Image src="/images/robe-velours.jpg" alt={product.name} fill className="object-contain object-center transition-transform hover:scale-105" />

              {/* Color Swatches */}
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-x-3 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm px-4 py-3">
                {product.colors.map((color, index) => (
                  <button key={index} className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border-2 transition-all hover:border-matte-gold focus:outline-none focus:ring-2 focus:ring-matte-gold/50" aria-label={`Couleur ${color.name}`}>
                    <span className="flex h-4 w-4 rounded-full border border-white/30 bg-gray-800"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size & Color Select */}
            <div className="flex flex-col gap-y-6 md:flex-row lg:max-w-[58rem] lg:w-full xl:max-w-[62rem]">
              <div className="flex flex-col gap-y-4">
                <label htmlFor="color-select" className="block text-sm font-medium tracking-tight text-white">Couleur</label>
                <div className="flex items-center justify-between rounded-lg border border-white/20 bg-black/50 py-3 px-6">
                  {product.colors.map((color, index) => (
                    <button key={index} type="button" className="flex min-h-[3rem] w-[4.5rem] items-center gap-x-4 rounded-md border border-white/20 bg-gray-800 py-1 pl-2 pr-1 focus:outline-none focus:ring-2 focus:ring-matte-gold/50" aria-label={`Couleur ${color.name}`}>
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-white/30 bg-gray-900" />
                      <span className="text-xs font-medium tracking-tight">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <label htmlFor="size-select" className="block text-sm font-medium tracking-tight text-white">Taille</label>
                <select id="size-select" className="flex w-full items-center justify-between rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-sm font-medium tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-matte-gold/50">
                  {product.sizes.map((size) => (
                    <option key={size} value={size} className="text-black bg-transparent">{size}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-y-4">
                <label htmlFor="quantity-select" className="block text-sm font-medium tracking-tight text-white">Quantité</label>
                <select id="quantity-select" className="flex w-full items-center justify-between rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-sm font-medium tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-matte-gold/50">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-y-6 lg:max-w-[30rem]">
            <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
              {product.isBestSeller && (
                <Link href={`/#`} className="flex h-8 w-8 items-center justify-center rounded-full border border-matte-gold bg-matte-gold text-black">
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor"><path d="M15.749 5.08L7.238 13.6l-4.822-8.52H4.707l8.043 14.087v-10.19Z" fill="currentColor"/></svg>
                </Link>
              )}
              {product.isBestSeller && (
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-matte-gold bg-matte-gold text-black">
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor"><path d="M7.529 3.28a.92.92 0 011.34 0L12.7 7.9l4.822 4.655v-6.027l-11.174-.14Z" fill="currentColor"/></svg>
                </span>
              )}
            </div>

            <Link href={`/#`} className="h1-premium text-[1.8rem] tracking-tight md:text-[2.5rem] xl:text-3xl">
              {product.name}
            </Link>

            <div className="flex items-center gap-x-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight">
              <span>{formatPrice(product.price)}</span>
              {product.isBestSeller && (
                <>
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor"><path d="M8.053 7.924l5.082-3.957a.92.92 0 011.34 0L16.378 7.92l-8.106 3.709a.92.92 0 01-1.218-.558l-.013-.02-7.637-8.464h2.555Z" fill="currentColor"/></svg>
                  <span>{product.category}</span>
                </>
              )}
            </div>

            <p className="text-base leading-relaxed text-gray-400 md:text-lg">{product.description}</p>

            {/* Reviews */}
            <div className="flex items-center gap-x-2 rounded-lg border border-white/20 bg-black/50 py-3 px-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} viewBox="0 0 16 16" className="h-4 w-4" fill={star <= Math.round(product.rating) ? "currentColor" : "none"}><path d="M8.053 7.924l5.082-3.957a.92.92 0 011.34 0L16.378 7.92l-8.106 3.709a.92.92 0 01-1.218-.558l-.013-.02-7.637-8.464h2.555Z" fill="currentColor"/></svg>
              ))}
            </div>

            <p className="mt-4 text-sm font-medium tracking-tight text-gray-400">{product.reviewCount} avis</p>

            {/* Add to Cart */}
            <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 lg:flex-row lg:items-center lg:justify-between">
              <Button size="lg" variant="primary" fullWidth className="gap-x-1 md:w-auto">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Ajouter au panier
              </Button>

              <Button size="lg" variant="outline" fullWidth className="gap-x-1 md:w-auto">
                Avoir en stock
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section id="related" className="mt-24">
          <h3 className="text-xl font-medium tracking-tight text-white mb-6 lg:text-2xl">Vous pourriez aimer</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-[54rem] xl:grid-cols-3">
            {relatedProducts.map((product, index) => (
              <Link key={index} href={`/#`} className="group">
                <div className="relative h-[38rem] overflow-hidden rounded-xl border border-white/10 bg-gray-900">
                  <Image src={product.image} alt={product.name} fill className="object-cover opacity-70 transition-opacity group-hover:opacity-100" />

                  <div className="absolute inset-x-4 bottom-4 flex flex-col justify-end rounded-lg border border-white/20 bg-gradient-to-t from-black via-black/90 to-transparent px-4 py-3">
                    <p className="text-sm text-matte-gold">{product.name}</p>
                    <p className="mt-1 text-xl font-medium tracking-tight">{formatPrice(product.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-24">
          <h3 className="text-xl font-medium tracking-tight text-white mb-6 lg:text-2xl">Questions Fréquentes</h3>
          <div className="space-y-4 md:space-y-8 rounded-lg border border-white/20 bg-black/50 p-8">
            {["Combien de temps pour la livraison ?", "Quelle est votre politique de retour ?", "Comment mesurer mes mesures ?"].map((question, index) => (
              <details key={index} className="group relative open:rounded-xl open:border-matte-gold/50 px-4">
                <summary className="flex flex-col items-start gap-x-2 cursor-pointer rounded-lg border border-white/10 py-4 pl-2 text-sm font-medium tracking-tight text-white hover:text-matte-gold [&[open]]:text-matte-gold">
                  {question}
                </summary>
                <div className="mt-4 rounded-lg border border-white/20 bg-black/50 px-6 py-4">
                  <p className="text-sm leading-relaxed text-gray-400">Nous expédions sous 24h en Europe (3-5 jours) et 10-15 jours hors EU. Pour les retours, vous disposez de 30 jours après réception. Contactez-nous pour mesurer.</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mt-24">
          <h3 className="text-xl font-medium tracking-tight text-white mb-6 lg:text-2xl">Avis Clients</h3>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3">
            {[
              { author: "Sophie M.", rating: 5, text: "Inoubliable ! Une robe qui me change la vie. Le velours est d'une qualité incroyable." },
              { author: "Camille L.", rating: 4, text: "Superbe manteau, coupe parfaite. Petit souci avec les boutons mais tout le reste est top." },
              { author: "Emma D.", rating: 5, text: "L'excellence en matière de vêtements. Je recommande à 100% !"}
            ].map((review, index) => (
              <article key={index} className="rounded-xl border border-white/20 bg-black/50 p-6">
                <div className="mb-4 flex items-center gap-x-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg viewBox="0 0 16 16" key={star} className="h-4 w-4" fill={star <= review.rating ? "currentColor" : "none"}><path d="M8.053 7.924l5.082-3.957a.92.92 0 011.34 0L16.378 7.92l-8.106 3.709a.92.92 0 01-1.218-.558l-.013-.02-7.637-8.464h2.555Z" fill="currentColor"/></svg>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">{review.text}</p>
                <span className="text-sm font-medium tracking-tight">{review.author}</span>
              </article>
            ))}
          </div>

          {/* Write Review */}
          <div className="mt-8 rounded-xl border border-white/20 bg-black/50 p-6">
            <Button variant="outline" size="lg">Réserver un avis</Button>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSection />
      </section>
    </div>
  );
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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
