/**
 * Mimoza App - Final Color Theme
 * C4 Final-1 Optimized (Opt-1: 彩度統一)
 */

export const colors = {
  // ブランド
  primary: '#f97316',
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

  // Podタイプ (Self=Primary, Pair=Secondary)
  podType: {
    self: '#f97316',
    pair: '#14b8a6',
    quad: '#3b82f6',
    circle: '#8b5cf6',
    default: '#6b7280',
  },

  // コンポーネント
  component: {
    tabBarActive: '#f97316',
    tabBarInactive: '#9ca3af',
    headerText: '#1f2937',
    subtitleText: '#6b7280',
    errorText: '#dc2626',
  },

  // ユーティリティ
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type Colors = typeof colors;
