import { SAMPALE_HABITS } from "@/public/assets/data";
import { HabitType } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isHexColor(color: string): boolean {
  const hexColorRegex = /^#?([0-9A-F]{3}){1,2}$/i;
  return hexColorRegex.test(color);
}

export function formatDate(date: number): string {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function generateUUID(): string {
  let uuid = "";
  const chars = "0123456789abcdef";

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += "-";
    } else if (i === 14) {
      uuid += "4"; // UUID version 4
    } else if (i === 19) {
      uuid += chars.charAt(Math.random() * 16);
    } else {
      uuid += chars.charAt(Math.random() * 16);
    }
  }

  return uuid;
}

export function getHabitByID(id: string): HabitType | undefined {
  return SAMPALE_HABITS.find((item) => item.id === id);
}
