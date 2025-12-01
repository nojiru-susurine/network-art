/**
 * Mimoza App - Warm Glow Theme
 * Dark theme with warm amber/orange tones
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#05060a',     // Primary text / dark backgrounds
    light: '#fefcf5',    // Light backgrounds / text on dark (cream white)
    midGray: '#6b7280',  // Secondary elements, captions
    lightGray: '#0b0f18' // Subtle backgrounds, surfaces (dark mode)
  },
  accent: {
    primary: '#ffe66d',   // Soft yellow - selfPod
    secondary: '#ffb347', // Amber orange - pairPod
    third: '#ff7a3c',     // Deep orange - quadPod
    fourth: '#c8ff5a'     // Neon lime - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
