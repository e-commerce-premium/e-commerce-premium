import { Navbar } from "@/components/Navbar";
import Link from "next/link";

// Mock checkout data - in production, fetch this from an API
const orderSummary = {
  subtotal: 1540,
  shipping: 0,
  taxes: 323.4,
  total: 1863.4,
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Order Summary */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 xl:max-w-[96rem]">
        <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 px-8 py-4 md:w-auto">
          {["Accueil", "Panier", "Commande"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase().replace(/\s/g, "-")}`}>
              <span className="relative flex items-center gap-x-2 text-xs font-medium tracking-wider uppercase transition-colors hover:text-matte-gold">
                {item}
                {index === 0 && (
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 rounded-full bg-matte-gold transition-all group-hover:w-full" />
                )}
              </span>
            </Link>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-24 mx-auto flex max-w-[64rem] grid grid-cols-1 gap-x-8 lg:grid-cols-3 xl:max-w-[96rem]">
          <form action="#" className="flex flex-col gap-y-8 rounded-xl border border-white/20 bg-black/50 px-8 py-10 md:w-1.5/4 lg:max-w-md xl:w-auto">
            {/* Order Number */}
            <div className="rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-4 text-sm font-medium tracking-tight text-black">
              N° Commande: {Math.floor(Math.random() * 100000)}
            </div>

            {/* Order Items */}
            <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mb-6">Articles</h3>

            <div className="flex flex-col gap-y-8">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                  <Link href={`/#`} className="flex items-center justify-between hover:text-matte-gold transition-colors">
                    <span>Robe Velours Édition Limitée</span>
                    <span>x1</span>
                  </Link>
                  <span>{orderSummary.subtotal / 2} €</span>
                </div>
              ))}
            </div>

            {/* Shipping Address */}
            <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mb-6">Adresse de livraison</h3>

            <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <label htmlFor="address-name" className="block text-sm">Votre nom complet</label>
              <input id="address-name" type="text" placeholder="Nom de famille" aria-label="Nom complet" />

              <label htmlFor="address-street" className="block text-sm">Adresse</label>
              <input id="address-street" type="text" placeholder="123 Rue de la Mode, 75000 Paris" aria-label="Adresse complète" />

              <div className="flex flex-wrap gap-x-4">
                <div className="flex flex-col gap-y-4 w-full rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                  <label htmlFor="city" className="block text-sm">Ville</label>
                  <input id="city" type="text" placeholder="Ville" aria-label="Ville" />

                  <label htmlFor="postal-code" className="block text-sm">Code postal</label>
                  <input id="postal-code" type="text" placeholder="75000" aria-label="Code postal" />

                  <div className="flex items-center gap-x-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                    <label htmlFor="country" className="block text-sm">Pays</label>
                    <select id="country" name="country" aria-label="Pays" defaultValue="FR">
                      <option value="FR">France</option>
                      <option value="US">États-Unis</option>
                      <option value="GB">Royaume-Uni</option>
                      <option value="DE">Allemagne</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                <label htmlFor="email" className="block text-sm">Email</label>
                <input id="email" type="email" placeholder="nom@email.com" aria-label="Email" />

                <div className="flex items-center gap-x-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                  <label htmlFor="phone" className="block text-sm">Téléphone</label>
                  <input id="phone" type="tel" placeholder="+33 6 12 34 56 78" aria-label="Téléphone" />
                </div>

                <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                  <label htmlFor="instructions" className="block text-sm">Instructions spéciales</label>
                  <textarea id="instructions" name="instructions" rows={3} placeholder="Livre ou autre indication" aria-label="Instructions" />
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <label htmlFor="promo-code" className="block text-sm">Code cadeau / promo</label>
              <div className="mt-2 flex flex-col gap-y-2">
                <input id="promo-code" type="text" placeholder="Entrez votre code" aria-label="Code promo" />
                <div className="flex items-center justify-between rounded-lg border border-white/20 bg-black/50 py-1 px-4 text-sm font-medium tracking-tight text-white">
                  <button type="submit" name="apply-code" aria-label="Appliquer le code">Appliquer</button>
                </div>
              </div>
            </div>

            {/* Promo Success */}
            {orderSummary.total === orderSummary.subtotal && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold/50 bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-sm font-medium tracking-tight text-black">
                <span>Cadeau appliqué</span>
                <div className="flex items-center gap-x-2">
                  <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M8 3v10m0-10l3 3-3 3-3-3 3-3z"/></svg>
                  <span>Promotion "Welcome to Lumière" appliquée</span>
                </div>
              </div>
            )}

            {/* Payment */}
            <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mb-6">Paiement</h3>

            <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
              <span>Paiement complet sans carte</span>
              <div className="flex items-center gap-x-2 rounded-lg border border-matte-gold bg-white/10 py-2 px-4 text-sm font-medium tracking-tight text-white hover:bg-white/5 transition-colors cursor-default">
                <svg viewBox="0 0 16 16" className="h-[1.5rem] w-full flex-none fill-current md:h-[2rem]" aria-labelledby="mastercard-svg-title"><title id="mastercard-svg-title">Carte de crédit Mastercard</title><g id="Mastercard" fill-rule="evenodd"><path d="M9.076 3.5a4.21,4.21,0,0,1,5.863,0A6.9,6.9,0,0,1,16.552,9h-6.672a1.735,1.735,0,0,0-1.744,1.76v5.238h1.737V19a6.538,6.538,0,0,1,5.495-2.7A1.75,1.75,0,0,0,19.939,15v-.6A6.9,6.9,0,0,1,16.552,8H9.076A1.748,1.748,0,0,0,7.323,6.25a1.744,1.744,0,0,0,.55-1.298l-.001-.383a1.748,1.748,0,0,0,-1.745-1.76H.001A1.752,1.752,0,0,0,0,9h.001A6.9,6.9,0,0,1,6.538,15.7a6.538,6.538,0,0,1-5.495-2.7A1.744,1.744,0,0,0,.011,14v-.6a6.538,6.538,0,0,1,5.495-2.7,1.748,1.748,0,0,0,1.744-1.76V17a6.538,6.538,0,0,1-5.496-2.7A1.75,1.75,0,0,0,.061,15v-.6A6.9,6.9,0,0,1,6.552,8H3" fill-rule="evenodd"/></g><clipPath id="mastercard-svg-b"><rect height="13" width="21.657"/></clipPath></defs><use x="0" y="0" xlink:href="#mastercard-svg-a"/><use x="0" y="0" xlink:href="#mastercard-svg-b"></use>
              </div>
            </div>

            {/* Order Summary */}
            <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mb-6 mt-6">Résumé de la commande</h3>

            <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
              <span>Sous-total</span>
              <span>{formatPrice(orderSummary.subtotal)}</span>
            </div>

            <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
              <span>Taxes</span>
              <span>{formatPrice(orderSummary.taxes)}</span>
            </div>

            <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
              <span>Total</span>
              <span className="text-xl">{formatPrice(orderSummary.total)}</span>
            </div>

            {/* Submit Order */}
            <button type="submit" aria-label="Commander" className="mt-12 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-2.5 px-4 text-sm font-medium tracking-tight text-black hover:text-black">
              Commander - {formatPrice(orderSummary.total)}
            </button>

            {/* Order Confirmation */}
            <div className="flex flex-col gap-y-2 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-sm font-medium tracking-tight text-black">
              <span>Paiement sécurisé</span>
              <div className="flex items-center gap-x-2">
                <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M8 3v10m0-10l3 3-3 3-3-3 3-3z"/></svg>
                <span>Votre paiement sera sécurisé</span>
              </div>
            </div>
          </form>

          {/* Order Summary */}
          <div className="flex flex-col gap-y-8 rounded-xl border border-white/20 bg-black/50 px-8 py-10 md:w-1.5/4 lg:max-w-md xl:w-auto">
            <h3 className="text-lg font-medium tracking-tight text-white md:text-xl">Résumé de la commande</h3>

            {/* Subtotal */}
            <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <span>Sous-total</span>
              <span>{formatPrice(orderSummary.subtotal)}</span>
            </div>

            {/* Shipping */}
            {orderSummary.shipping > 0 && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                <span>Livraison</span>
                <span>{formatPrice(orderSummary.shipping)}</span>
              </div>
            )}

            {/* Taxes */}
            {orderSummary.taxes > 0 && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                <span>Taxes</span>
                <span>{formatPrice(orderSummary.taxes)}</span>
              </div>
            )}

            {/* Total */}
            <div className="flex flex-col gap-y-4 rounded-lg border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
              <span>Total</span>
              <span className="text-xl">{formatPrice(orderSummary.total)}</span>
            </div>

            {/* Promo Code */}
            {orderSummary.taxes > 0 && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
                <span>Cadeau / Code promo</span>
                <form action="#" method="POST" className="mt-2 flex flex-col gap-y-2">
                  <input type="text" placeholder="Cadeau" aria-label="Cadeau" name="gift-code" />
                  <div className="flex items-center justify-between rounded-lg border border-white/20 bg-black/50 py-1 px-4 text-sm font-medium tracking-tight text-white">
                    <button type="submit" name="apply-code" aria-label="Appliquer le code">Appliquer</button>
                  </div>
                </form>
              </div>
            )}

            {/* Promo Success */}
            {orderSummary.taxes === 0 && (
              <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold/50 bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-sm font-medium tracking-tight text-black">
                <span>Cadeau appliqué</span>
                <div className="flex items-center gap-x-2">
                  <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M8 3v10m0-10l3 3-3 3-3-3 3-3z"/></svg>
                  <span>Promotion "Welcome to Lumière" appliquée</span>
                </div>
              </div>
            )}

            {/* Payment */}
            {orderSummary.taxes === 0 && (
              <>
                <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mt-6 mb-6">Paiement</h3>
                <div className="flex flex-col gap-y-4 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
                  <span>Paiement complet sans carte</span>
                  <div className="flex items-center gap-x-2 rounded-lg border border-matte-gold bg-white/10 py-2 px-4 text-sm font-medium tracking-tight text-white hover:bg-white/5 transition-colors cursor-default">
                    <svg viewBox="0 0 16 16" className="h-[1.5rem] w-full flex-none fill-current md:h-[2rem]" aria-labelledby="mastercard-svg-title"><title id="mastercard-svg-title">Carte de crédit Mastercard</title><g id="Mastercard" fill-rule="evenodd"><path d="M9.076 3.5a4.21,4.21,0,0,1,5.863,0A6.9,6.9,0,0,1,16.552,9h-6.672a1.735,1.735,0,0,0-1.744,1.76v5.238h1.737V19a6.538,6.538,0,0,1,5.495-2.7A1.75,1.75,0,0,0,19.939,15v-.6A6.9,6.9,0,0,1,16.552,8H9.076A1.748,1.748,0,0,0,7.323,6.25a1.744,1.744,0,0,0,.55-1.298l-.001-.383a1.748,1.748,0,0,0,-1.745-1.76H.001A1.752,1.752,0,0,0,0,9h.001A6.9,6.9,0,0,1,6.538,15.7a6.538,6.538,0,0,1-5.495-2.7A1.744,1.744,0,0,0,.011,14v-.6a6.538,6.538,0,0,1,5.495-2.7,1.748,1.748,0,0,0,1.744-1.76V17a6.538,6.538,0,0,1-5.496-2.7A1.75,1.75,0,0,0,.061,15v-.6A6.9,6.9,0,0,1,6.552,8H3" fill-rule="evenodd"/></g><clipPath id="mastercard-svg-b"><rect height="13" width="21.657"/></clipPath></defs><use x="0" y="0" xlink:href="#mastercard-svg-a"/><use x="0" y="0" xlink:href="#mastercard-svg-b"></use>
                  </div>
                </div>
              </>
            )}

            {/* Order Summary */}
            {orderSummary.taxes === 0 && (
              <>
                <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mt-6 mb-6">Résumé de la commande</h3>
                <div className="flex flex-col gap-y-4 rounded-lg border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
                  <span>Sous-total</span>
                  <span>{formatPrice(orderSummary.subtotal)}</span>
                </div>

                <div className="flex flex-col gap-y-4 rounded-lg border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
                  <span>Taxes</span>
                  <span>{formatPrice(orderSummary.taxes)}</span>
                </div>

                <div className="flex flex-col gap-y-4 rounded-lg border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-base font-medium tracking-tight text-black">
                  <span>Total</span>
                  <span className="text-xl">{formatPrice(orderSummary.total)}</span>
                </div>

                {/* Submit Order */}
                <button type="submit" aria-label="Commander" className="mt-12 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-2.5 px-4 text-sm font-medium tracking-tight text-black hover:text-black">
                  Commander - {formatPrice(orderSummary.total)}
                </button>

                {/* Order Confirmation */}
                <div className="flex flex-col gap-y-2 rounded-lg border border-matte-gold bg-gradient-to-r from-[#f5e6d3] to-transparent py-3 px-6 text-sm font-medium tracking-tight text-black">
                  <span>Paiement sécurisé</span>
                  <div className="flex items-center gap-x-2">
                    <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M8 3v10m0-10l3 3-3 3-3-3 3-3z"/></svg>
                    <span>Votre paiement sera sécurisé</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Order Confirmation */}
      <OrderConfirmation orderNumber={Math.floor(Math.random() * 100000)} />
    </div>
  );
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function OrderConfirmation({ orderNumber }: { orderNumber: number }) {
  return (
    <section className="mx-auto mt-40 flex min-h-[35rem] w-full max-w-[86rem] flex-col items-center justify-center rounded-xl border border-white/20 bg-black/50 px-16 py-16 lg:px-24">
      <div className="flex flex-col gap-y-4 text-center">
        {/* Checkmark Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-matte-gold bg-[#f5e6d3]">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        </div>

        {/* Success Message */}
        <h2 className="text-3xl tracking-tight text-white xl:text-4xl lg:text-5xl mb-8">Commande confirmée</h2>

        {/* Order Number */}
        <p className="mb-4 text-xl text-gray-400">N° Commande: #{orderNumber}</p>

        {/* Confirmation Details */}
        <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
          <span>Livraison prévue</span>
          <p className="mt-2 leading-relaxed text-gray-400">Environ 3-5 jours ouvrables. Vous recevrez un email de confirmation avec les détails complets.</p>
        </div>

        {/* Next Steps */}
        <div className="flex flex-col gap-y-4 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
          <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mb-6">Prochaines étapes</h3>

          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-y-2 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <span className="flex items-center gap-x-4">
                <svg viewBox="0 0 16 16" className="h-[1.5rem] w-full flex-none fill-current md:h-[2rem]" aria-labelledby="mastercard-svg-title"><title id="mastercard-svg-title">Carte de crédit Mastercard</title><g id="Mastercard" fill-rule="evenodd"><path d="M9.076 3.5a4.21,4.21,0,0,1,5.863,0A6.9,6.9,0,0,1,16.552,9h-6.672a1.735,1.735,0,0,0-1.744,1.76v5.238h1.737V19a6.538,6.538,0,0,1,5.495-2.7A1.75,1.75,0,0,0,19.939,15v-.6A6.9,6.9,0,0,1,16.552,8H9.076A1.748,1.748,0,0,0,7.323,6.25a1.744,1.744,0,0,0,.55-1.298l-.001-.383a1.748,1.748,0,0,0,-1.745-1.76H.001A1.752,1.752,0,0,0,0,9h.001A6.9,6.9,0,0,1,6.538,15.7a6.538,6.538,0,0,1-5.495-2.7A1.744,1.744,0,0,0,.011,14v-.6a6.538,6.538,0,0,1,5.495-2.7,1.748,1.748,0,0,0,1.744-1.76V17a6.538,6.538,0,0,1-5.496-2.7A1.75,1.75,0,0,0,.061,15v-.6A6.9,6.9,0,0,1,6.552,8H3" fill-rule="evenodd"/></g><clipPath id="mastercard-svg-b"><rect height="13" width="21.657"/></clipPath></defs><use x="0" y="0" xlink:href="#mastercard-svg-a"/><use x="0" y="0" xlink:href="#mastercard-svg-b"></use>
              </span>
              <span>N° Commande: {orderNumber}</span>
            </div>
          ))}

          {/* Next Steps */}
          <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mb-6 mt-4">Prochaines étapes</h3>

          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-y-2 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <span className="flex items-center gap-x-4">
                <svg viewBox="0 0 16 16" className="h-[1.5rem] w-full flex-none fill-current md:h-[2rem]" aria-labelledby="mastercard-svg-title"><title id="mastercard-svg-title">Carte de crédit Mastercard</title><g id="Mastercard" fill-rule="evenodd"><path d="M9.076 3.5a4.21,4.21,0,0,1,5.863,0A6.9,6.9,0,0,1,16.552,9h-6.672a1.735,1.735,0,0,0-1.744,1.76v5.238h1.737V19a6.538,6.538,0,0,1,5.495-2.7A1.75,1.75,0,0,0,19.939,15v-.6A6.9,6.9,0,0,1,16.552,8H9.076A1.748,1.748,0,0,0,7.323,6.25a1.744,1.744,0,0,0,.55-1.298l-.001-.383a1.748,1.748,0,0,0,-1.745-1.76H.001A1.752,1.752,0,0,0,0,9h.001A6.9,6.9,0,0,1,6.538,15.7a6.538,6.538,0,0,1-5.495-2.7A1.744,1.744,0,0,0,.011,14v-.6a6.538,6.538,0,0,1,5.495-2.7,1.748,1.748,0,0,0,1.744-1.76V17a6.538,6.538,0,0,1-5.496-2.7A1.75,1.75,0,0,0,.061,15v-.6A6.9,6.9,0,0,1,6.552,8H3" fill-rule="evenodd"/></g><clipPath id="mastercard-svg-b"><rect height="13" width="21.657"/></clipPath></defs><use x="0" y="0" xlink:href="#mastercard-svg-a"/><use x="0" y="0" xlink:href="#mastercard-svg-b"></use>
              </span>
              <span>N° Commande: {orderNumber}</span>
            </div>
          ))}

          {/* Next Steps */}
          <h3 className="text-lg font-medium tracking-tight text-white md:text-xl mb-6 mt-4">Prochaines étapes</h3>

          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-y-2 rounded-lg border border-white/20 bg-black/50 py-3 px-6 text-base font-medium tracking-tight text-white">
              <span className="flex items-center gap-x-4">
                <svg viewBox="0 0 16 16" className="h-[1.5rem] w-full flex-none fill-current md:h-[2rem]" aria-labelledby="mastercard-svg-title"><title id="mastercard-svg-title">Carte de crédit Mastercard</title><g id="Mastercard" fill-rule="evenodd"><path d="M9.076 3.5a4.21,4.21,0,0,1,5.863,0A6.9,6.9,0,0,1,16.552,9h-6.672a1.735,1.735,0,0,0-1.744,1.76v5.238h1.737V19a6.538,6.538,0,0,1,5.495-2.7A1.75,1.75,0,0,0,19.939,15v-.6A6.9,6.9,0,0,1,16.552,8H9.076A1.748,1.748,0,0,0,7.323,6.25a1.744,1.744,0,0,0,.55-1.298l-.001-.383a1.748,1.748,0,0,0,-1.745-1.76H.001A1.752,1.752,0,0,0,0,9h.001A6.9,6.9,0,0,1,6.538,15.7a6.538,6.538,0,0,1-5.495-2.7A1.744,1.744,0,0,0,.011,14v-.6a6.538,6.538,0,0,1,5.495-2.7,1.748,1.748,0,0,0,1.744-1.76V17a6.538,6.538,0,0,1-5.496-2.7A1.75,1.75,0,0,0,.061,15v-.6A6.9,6.9,0,0,1,6.552,8H3" fill-rule="evenodd"/></g><clipPath id="mastercard-svg-b"><rect height="13" width="21.657"/></clipPath></defs><use x="0" y="0" xlink:href="#mastercard-svg-a"/><use x="0" y="0" xlink:href="#mastercard-svg-b"></use>
              </span>
              <span>N° Commande: {orderNumber}</span>
            </div>
          ))}

        {/* Order Confirmation */}
        <OrderConfirmation orderNumber={Math.floor(Math.random() * 100000)} />
      </div>
    </section>
  );
}
