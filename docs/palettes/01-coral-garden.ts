/**
 * Mimoza App - Palette 01: Coral Garden
 * 暖かいつながり — 信頼と温もりを表現
 *
 * Brand-level prototype colors mapped from current usage.
 * These correspond to the brand guideline slots:
 * - Main Colors: Dark / Light / Mid Gray / Light Gray
 * - Accent Colors: Primary / Secondary / Third / Fourth
 */

export const brandPrototypeColors = {
  main: {
    dark: '#2d3748',     // 深みのあるチャコール
    light: '#fffbf7',    // ほんのりクリーム白
    midGray: '#718096',  // ニュートラルグレー
    lightGray: '#f7f5f3' // ウォームベージュ
  },
  accent: {
    primary: '#e8857b',   // コーラルピンク - selfPod
    secondary: '#7c9eb8', // スモーキーブルー - pairPod
    third: '#9f8fbc',     // ラベンダー - quadPod
    fourth: '#d4a574'     // サンドベージュ - circlePod
  }
} as const;

export type BrandPrototypeColors = typeof brandPrototypeColors;
