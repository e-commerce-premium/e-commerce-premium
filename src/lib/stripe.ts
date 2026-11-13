import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripe: Stripe | null = null;

export async function getStripe(): Promise<Stripe> {
  if (!stripe) {
    stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
    );
  }
  return stripe!;
}
