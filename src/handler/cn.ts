import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function for creating composite class names using clsx and tailwind-merge.
 *
 * @param {...ClassValue} classes - Class names or conditional classes to be merged.
 * @returns {string} - The merged class names.
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));