/**
 * Mimoza App - Palette 03: Sunset Bloom
 * 有機的なつながり — ミモザの花をイメージ
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#292524',     // ウォームブラウン
    light: '#fefdfb',    // アイボリーホワイト
    midGray: '#78716c',  // ストーングレー
    lightGray: '#f5f5f4' // ナチュラルベージュ
  },
  accent: {
    primary: '#f5b942',   // ミモザイエロー - selfPod
    secondary: '#e07b54', // テラコッタ - pairPod
    third: '#7c9a6e',     // セージグリーン - quadPod
    fourth: '#a78baf'     // モーブ - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
