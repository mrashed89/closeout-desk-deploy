import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function parseMoneyInput(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "");
  if (cleaned === "" || cleaned === ".") return 0;
  const dollars = Number.parseFloat(cleaned);
  if (Number.isNaN(dollars)) return 0;
  return Math.round(dollars * 100);
}

export function moneyInputDisplay(cents: number): string {
  return (cents / 100).toFixed(2);
}
