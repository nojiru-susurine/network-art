/**
 * Mimoza App - Palette 08: Golden Hour
 * 黄金の時間 — 夕暮れの温かな光
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#27241d',     // ウォームブラウン
    light: '#fffef5',    // クリームホワイト
    midGray: '#8d8473',  // サンドグレー
    lightGray: '#f5f3eb' // ウォームベージュ
  },
  accent: {
    primary: '#f59e0b',   // アンバー - selfPod
    secondary: '#ef7d52', // コーラルオレンジ - pairPod
    third: '#84cc16',     // ライムグリーン - quadPod
    fourth: '#e879a9'     // ローズピンク - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
