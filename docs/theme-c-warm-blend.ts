export const themeWarmBlend = {
  name: 'Warm Blend',
  description: 'ピーチオレンジとシーグリーンのバランス。活発さと安心感を両立した中間テーマ。',

  // ブランド
  primary: '#fb923c',
  secondary: '#14b8a6',

  // 状態
  success: '#10b981',
  error: '#ef4444',
  warning: '#eab308',

  // 背景
  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    tertiary: '#f5f5f5',
  },

  // テキスト
  text: {
    primary: '#1f2937',
    secondary: '#4b5563',
    tertiary: '#9ca3af',
    inverse: '#ffffff',
  },

  // ボーダー
  border: {
    light: '#f3f4f6',
    medium: '#e5e7eb',
    dark: '#d1d5db',
  },

  // Podタイプ
  podType: {
    self: '#fb923c',
    pair: '#14b8a6',
    quad: '#6366f1',
    circle: '#ec4899',
    default: '#6b7280',
  },

  // コンポーネント
  tabBarActive: '#fb923c',
  tabBarInactive: '#9ca3af',
  headerText: '#1f2937',
  subtitleText: '#6b7280',
  errorText: '#dc2626',

  // ユーティリティ
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type ThemeWarmBlend = typeof themeWarmBlend;
