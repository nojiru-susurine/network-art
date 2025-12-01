/**
 * Mimoza App - Palette 04: Lavender Dreams
 * 穏やかな調和 — 優しさと落ち着きを表現
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#2e2a3b',     // ディープパープル
    light: '#fdfcfe',    // ラベンダーホワイト
    midGray: '#8b8698',  // モーブグレー
    lightGray: '#f5f3f7' // ペールラベンダー
  },
  accent: {
    primary: '#9f7aea',   // ラベンダー - selfPod
    secondary: '#ed8aa6', // ローズピンク - pairPod
    third: '#6cb2c7',     // スカイブルー - quadPod
    fourth: '#b8d4a8'     // ミントグリーン - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
