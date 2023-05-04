import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { cache } from 'react';

export const getBaseUrl = cache(() =>
  process.env.VERCEL_URL
    ? `https://pokedex-next-tau.vercel.app`
    : `http://localhost:${process.env.PORT ?? 3000}`,
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
