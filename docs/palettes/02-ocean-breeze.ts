/**
 * Mimoza App - Palette 02: Ocean Breeze
 * 清潔感と信頼 — プロフェッショナルな印象
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#1a2f38',     // ディープティール
    light: '#ffffff',    // ピュアホワイト
    midGray: '#64748b',  // クールグレー
    lightGray: '#f1f5f9' // ライトスレート
  },
  accent: {
    primary: '#0d9488',   // ティール - selfPod
    secondary: '#3b82f6', // ブルー - pairPod
    third: '#8b5cf6',     // バイオレット - quadPod
    fourth: '#f59e0b'     // アンバー - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
