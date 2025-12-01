/**
 * Mimoza App - Palette 05: Forest Path
 * 自然な成長 — 森の中の静かな道
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#1c2721',     // フォレストダーク
    light: '#fafdf8',    // リーフホワイト
    midGray: '#6b7c72',  // モスグレー
    lightGray: '#f0f4f1' // ペールグリーン
  },
  accent: {
    primary: '#4ade80',   // エメラルドグリーン - selfPod
    secondary: '#2dd4bf', // ティール - pairPod
    third: '#a3e635',     // ライム - quadPod
    fourth: '#fbbf24'     // ゴールデンイエロー - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
