/**
 * Mimoza App - Final Color Theme v2
 * Teal Lagoon: 配色シフト版（Self=Teal, Pair=Blue）
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#1f2937',     // Primary text / dark backgrounds
    light: '#ffffff',    // Light backgrounds / text on dark
    midGray: '#6b7280',  // Secondary elements, captions
    lightGray: '#f5f5f5' // Subtle backgrounds, surfaces
  },
  accent: {
    primary: '#14b8a6',   // Teal - selfPod
    secondary: '#3b82f6', // Blue - pairPod
    third: '#8b5cf6',     // Purple - quadPod
    fourth: '#f97316'     // Orange - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
