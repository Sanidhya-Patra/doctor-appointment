import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react-js"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


