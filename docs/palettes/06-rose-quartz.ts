/**
 * Mimoza App - Palette 06: Rose Quartz
 * 愛情と癒し — ローズクォーツの優しい輝き
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#3b2f3d',     // ディープローズ
    light: '#fef9fa',    // ブラッシュホワイト
    midGray: '#9c8a9e',  // ダスティローズ
    lightGray: '#f9f3f5' // ペールピンク
  },
  accent: {
    primary: '#f472b6',   // ホットピンク - selfPod
    secondary: '#c084fc', // オーキッド - pairPod
    third: '#67c5d1',     // アクア - quadPod
    fourth: '#fca5a5'     // コーラル - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
