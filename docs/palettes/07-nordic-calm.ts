/**
 * Mimoza App - Palette 07: Nordic Calm
 * 北欧の静けさ — ミニマルで洗練された美
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#1e293b',     // スレートダーク
    light: '#f8fafc',    // スノーホワイト
    midGray: '#94a3b8',  // クールグレー
    lightGray: '#e2e8f0' // ライトスレート
  },
  accent: {
    primary: '#60a5fa',   // スカイブルー - selfPod
    secondary: '#a78bfa', // ラベンダー - pairPod
    third: '#5eead4',     // ミント - quadPod
    fourth: '#fda4af'     // ピーチ - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
