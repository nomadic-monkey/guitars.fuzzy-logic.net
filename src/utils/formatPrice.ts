import type { GuitarPrice } from "../types/guitar";

export function formatPrice(price: GuitarPrice) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);
}
