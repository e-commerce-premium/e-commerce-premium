import { Navbar } from "@/components/Navbar";

// Mock cart data - in production, fetch this from an API
const cartItems = [
  {
    product: {
      id: "1",
      name: "Robe Velours Édition Limitée",
      price: 450,
      image: "/images/placeholder-product.svg",
    },
    quantity: 1,
    selectedColor: "#8a1c27",
    selectedSize: "S",
  },
  {
    product: {
      id: "2",
      name: "Manteau de Laine Britannique",
      price: 890,
      image: "/images/placeholder-product.svg",
    },
    quantity: 1,
    selectedColor: "#4a5c63",
    selectedSize: "M",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = Math.max(0, subtotal - 500) > 0 ? Math.floor(subtotal / 500) * 15 : 0;
  const taxes = subtotal * 0.21;
  const total = subtotal + shipping + taxes;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Cart Header */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 xl:max-w-[96rem]">
        <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 px-8 py-4 md:w-auto">
          {["Accueil", "Panier"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`}>
              <span className="relative flex items-center gap-x-2 text-xs font-medium tracking-wider uppercase transition-colors hover:text-matte-gold">
                {item}
                {index === 0 && (
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 rounded-full bg-matte-gold transition-all group-hover:w-full" />
                )}
              </span>
            </Link>
          ))}
        </div>

        {/* Cart Content */}
        <div className="mt-24 mx-auto flex max-w-[64rem] grid grid-cols-1 gap-x-8 lg:grid-cols-3 xl:max-w-[96rem]">
          {/* Cart Items */}
          <div className="flex flex-col gap-y-8 rounded-xl border border-white/20 bg-black/50 px-8 py-10 md:w-1.5/4 lg:max-w-md xl:flex-none xl:w-[34rem]">
            {cartItems.map((item, index) => (
              <article key={index} className="flex flex-col gap-y-6 rounded-lg border border-white/20 bg-black/50 p-8">
                <div className="mb-8 flex h-[32rem] w-full overflow-hidden rounded-xl bg-gray-900 md:h-[24rem]">
                  <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />

                  {/* Quantity Selector */}
                  <div className="absolute inset-x-0 bottom-6 flex items-center justify-between rounded-lg border border-white/20 bg-black/50 py-4 px-6">
                    <button className="rounded-md border border-white/20 bg-black/50 px-3 py-1 text-sm font-medium tracking-tight text-white hover:text-matte-gold" aria-label="Diminuer la quantité">-</button>
                    <span className="text-base font-medium tracking-tight text-white">{item.quantity}</span>
                    <button className="rounded-md border border-white/20 bg-black/50 px-3 py-1 text-sm font-medium tracking-tight text-white hover:text-matte-gold" aria-label="Augmenter la quantité">+</button>
                  </div>
                </div>

                {/* Product Details */}
                <Link href={`/#`} className="flex flex-col gap-y-4">
                  <p className="text-sm font-medium tracking-tight text-matte-gold">{item.product.category}</p>
                  <h3 className="h1-premium text-[1.75rem] tracking-tight md:text-2xl xl:text-3xl">{item.product.name}</h3>

                  {/* Colors */}
                  <div className="flex items-center gap-x-4">
                    <span className="text-xs font-medium tracking-tight text-gray-400">Couleur:</span>
                    <label htmlFor={`color-select-${index}`} className="sr-only" htmlFor={item.selectedColor}>Choisir la couleur</label>
                    <input id={`color-select-${index}`} type="color" name={`color-select-${index}`} defaultValue={item.selectedColor} aria-label={`Choisir la couleur pour ${item.product.name}`} />
                  </div>

                  {/* Sizes */}
                  <div className="flex items-center gap-x-4">
                    <span className="text-xs font-medium tracking-tight text-gray-400">Taille:</span>
                    <select defaultValue={item.selectedSize} name="size" id={`size-select-${index}`} aria-label={`Choisir la taille pour ${item.product.name}`}>
                      {["XS", "S", "M", "L", "XL"].map((size) => (
                        <option key={size} value={size} disabled={size === item.selectedSize}>{size}</option>
                      ))}
                    </select>
                  </div>
                </Link>

                {/* Total Price */}
                <div className="flex items-end justify-between">
                  <p className="font-medium tracking-tight text-white">{formatPrice(item.product.price * item.quantity)}</p>
                  <button type="button" aria-label={`Retirer ${item.product.name}`}>Supprimer</button>
                </div>
              </article>
            ))}

            {/* Empty Cart */}
            {cartItems.length === 0 && (
              <EmptyCart />
            )}
          </div>

          {/* Order Summary */}
          <div className="flex flex-col gap-y-8 rounded-xl border border-white/20 bg-black/50 px-8 py-10 md:w-1.5/4 lg:max-w-md xl:w-auto">
            <h3 className="text-lg font-medium tracking-tight text-white md:text-xl">Résumé de la commande</h3>

            {/* Subtotal */}
            <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <span>Sous-total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            {/* Shipping */}
            {shipping > 0 && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                <span>Livraison</span>
                <span>{formatPrice(shipping)}</span>
              </div>
            )}

            {/* Taxes */}
            {taxes > 0 && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                <span>Taxes</span>
                <span>{formatPrice(taxes)}</span>
              </div>
            )}

            {/* Subtotal + Shipping */}
            {taxes > 0 ? (
              <>
                <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                  <span>Sous-total + Livraison</span>
                  <span>{formatPrice(subtotal + shipping)}</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                <span>Sous-total + Livraison</span>
                <span>{formatPrice(subtotal + shipping)}</span>
              </div>
            )}

            {/* Tax Summary */}
            {taxes > 0 && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                <span>Imposition</span>
                <span>{formatPrice(taxes)}</span>
              </div>
            )}

            {/* Total */}
            <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold/50 bg-gradient-to-r from-matte-gold/10 to-transparent py-3 px-6 text-base font-medium tracking-tight text-white">
              <span>Total</span>
              <span className="text-xl">{formatPrice(total)}</span>
            </div>

            {/* Promo Code */}
            <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <span>Cadeau / Code promo</span>
              <form className="mt-2 flex flex-col gap-y-2" action="#" method="POST">
                <input type="text" placeholder="Cadeau" aria-label="Cadeau" name="gift-code" />
                <div className="flex items-center justify-between rounded-lg border border-white/20 bg-black/50 py-1 px-4 text-sm font-medium tracking-tight text-white">
                  <button type="submit" name="apply-code" aria-label="Appliquer le code">Appliquer</button>
                </div>
              </form>
            </div>

            {/* Promo Success */}
            {total === subtotal + shipping && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold/50 bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-sm font-medium tracking-tight text-black">
                <span>Cadeau appliqué</span>
                <div className="flex items-center gap-x-2">
                  <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M8 3v10m0-10l3 3-3 3-3-3 3-3z"/></svg>
                  <span>Promotion "Welcome to Lumière" appliquée</span>
                </div>
              </div>
            )}

            {/* Payment Options */}
            <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <span>Paiement</span>
              {["Visa", "Mastercard"].map((card) => (
                <div key={card} className="flex items-center gap-x-4">
                  <svg viewBox="0 0 569.71 320" className="h-[1.5rem] w-full flex-none fill-current text-white md:h-[2rem]"><g id="Visa"><defs><clipPath id="visa-svg-a"><rect height="320" width="569.71"/></clipPath></defs><path d="M477 13l-1.6-.2c3.2.4 6.2 1.6 8.8 3.3l10.5-10.8c5.2-5.3 13.9-5.1 19 .2l-17.5 18c-2.1-1.2-4.6-1.8-7.2-1.8zM159 305.2V222.4h226.9v82.8h44.8l-.2 41.5H159zm85.3-241c21.7 0 39.3 17.5 39.3 39.3s-17.6 39.3-39.3 39.3S114.9 152.3 115 130.5c0-21.8 17.5-39.3 39.3-39.3zm63.8 24v266.8l40.2-.4V297.6l64.8-.4v-10.3l-64.8.4V319.5h-40.2V298.8h-45.7v10.7H144.8l-.8-41.5h164.8V251.8H182c-9.5 0-17.3-7.8-17.3-17.3s7.8-17.3 17.3-17.3h79.8zm24.2-82.3c21.8 0 39.3 17.5 39.3 39.3s-17.6 39.3-39.3 39.3S146.3 194.3 146.3 172.5c0-21.8 17.6-39.3 39.3-39.3zM428.6 300h27.6l-.7-41.1H328v41.1h72.4V300zM345.3 201c-19.4 0-35.3 15.9-35.3 35.3s15.9 35.3 35.3 35.3 35.3-15.9 35.3-35.3S364.7 201 345.3 201z" clip-path="url(#visa-svg-a)" fillRule="evenodd"></path></g><clipPath id="visa-svg-b"><rect height="320" width="569.71"/></clipPath></defs><use x="0" y="0" xlink:href="#visa-svg-a"/><use x="0" y="0" xlink:href="#visa-svg-b"/></svg>
                  <div className="flex flex-col gap-y-1">
                    <span>VISA</span>
                    <span className="text-xs text-gray-400">Carte bancaire</span>
                  </div>
                </div>
              ))}

              <button type="submit" aria-label="Payer avec carte">
                <svg viewBox="0 0 21.657 13" className="h-[1.5rem] w-full flex-none fill-current text-white md:h-[2rem]"><g id="Mastercard"><path d="M14.903,3.35a4.668,4.668,0,1,0-4.687,8.339l0,1.1A4.702,4.702,0,1,0,7.778,2.148a5.31,5.31,0,0,1,7.125,1.2Z" fill-rule="evenodd"></path></g><clipPath id="mastercard-svg-b"><rect height="13" width="21.657"/></clipPath></defs><use x="0" y="0" xlink:href="#mastercard-svg-a"/><use x="0" y="0" xlink:href="#mastercard-svg-b"/></svg>
              </button>

              <div className="flex items-center gap-x-2 rounded-lg border border-white/20 bg-black/50 py-2 px-4 text-sm font-medium tracking-tight text-white">
                <input type="checkbox" id="cash-on-delivery" name="cod" aria-label="Payer à la livraison" />
                <label htmlFor="cash-on-delivery">Payement au livreur</label>
              </div>
            </div>

            {/* Order Summary */}
            <form action="#" className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <span>Afin de continuer</span>
              <button type="submit" aria-label="Passer la commande" className="rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-2.5 px-4 text-sm font-medium tracking-tight text-black hover:text-black">
                Commander
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Empty Cart */}
      <EmptyCart />
    </div>
  );
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function EmptyCart() {
  return (
    <section className="mx-auto mt-40 flex min-h-[35rem] w-full max-w-[86rem] flex-col items-center justify-center rounded-xl border border-white/20 bg-black/50 px-16 py-16 lg:px-24">
      <h2 className="text-3xl tracking-tight text-white xl:text-4xl lg:text-5xl mb-8">Panier vide</h2>
      <p className="mb-12 max-w-lg text-xl text-gray-400">C'est le moment idéal pour créer votre première commande.</p>

      <div className="flex items-center gap-x-4 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-2.5 px-4 text-sm font-medium tracking-tight text-black hover:text-black">
        Continuer vos achats
        <svg viewBox="0 0 21.657 13" className="h-[1.5rem] w-full flex-none fill-current md:h-[2rem]" aria-labelledby="mastercard-svg-title"><title id="mastercard-svg-title">Carte de crédit Mastercard</title><g id="Mastercard" fill-rule="evenodd"><path d="M9.076 3.5a4.21,4.21,0,0,1,5.863,0A6.9,6.9,0,0,1,16.552,9h-6.672a1.735,1.735,0,0,0-1.744,1.76v5.238h1.737V19a6.538,6.538,0,0,1,5.495-2.7A1.75,1.75,0,0,0,19.939,15v-.6A6.9,6.9,0,0,1,16.552,8H9.076A1.748,1.748,0,0,0,7.323,6.25a1.744,1.744,0,0,0,.55-1.298l-.001-.383a1.748,1.748,0,0,0,-1.745-1.76H.001A1.752,1.752,0,0,0,0,9h.001A6.9,6.9,0,0,1,6.538,15.7a6.538,6.538,0,0,1-5.495-2.7A1.744,1.744,0,0,0,.011,14v-.6a6.538,6.538,0,0,1,5.495-2.7,1.748,1.748,0,0,0,1.744-1.76V17a6.538,6.538,0,0,1-5.496-2.7A1.75,1.75,0,0,0,.061,15v-.6A6.9,6.9,0,0,1,6.552,8H3" fill-rule="evenodd"/></g><clipPath id="mastercard-svg-b"><rect height="13" width="21.657"/></clipPath></defs><use x="0" y="0" xlink:href="#mastercard-svg-a"/><use x="0" y="0" xlink:href="#mastercard-svg-b"></use>
      </button>
    </section>
  );
}
